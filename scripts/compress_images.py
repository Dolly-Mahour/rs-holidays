import os
from PIL import Image, ImageOps

image_dir = "public/images"
files = [f for f in os.listdir(image_dir) if f.lower().endswith(".png")]
print(f"Found {len(files)} PNG images in {image_dir}")

total_orig = 0
total_comp = 0

for f in sorted(files):
    p = os.path.join(image_dir, f)
    orig_size = os.path.getsize(p)
    total_orig += orig_size
    temp_p = os.path.join(image_dir, f"__tmp_{f}")

    try:
        with Image.open(p) as img:
            img.load()
            w, h = img.size
            has_transparency = False

            if img.mode in ("RGBA", "LA") or ("transparency" in img.info):
                if img.mode == "RGBA":
                    alpha = img.getchannel("A")
                    min_a, max_a = alpha.getextrema()
                    if min_a < 250:
                        has_transparency = True
                else:
                    has_transparency = True

            # Preserve logo without color reduction
            is_logo = "logo" in f.lower() or "icon" in f.lower()

            # Resize if overly large for web
            max_dim = 1600
            if max(w, h) > max_dim:
                scale = max_dim / max(w, h)
                new_w, new_h = int(w * scale), int(h * scale)
                img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)

            if has_transparency or is_logo:
                # Keep RGBA, compress lossless
                img.save(temp_p, "PNG", optimize=True, compress_level=9)
            else:
                rgb = img.convert("RGB")
                # Try quantized 256-color palette
                q = rgb.quantize(colors=256, method=Image.Resampling.LANCZOS)
                q.save(temp_p, "PNG", optimize=True)

                # Check if quality check passes
                comp_size = os.path.getsize(temp_p)
                if comp_size >= orig_size:
                    # Try standard RGB optimize
                    rgb.save(temp_p, "PNG", optimize=True, compress_level=9)

            # Verify the written image is readable
            with Image.open(temp_p) as test_read:
                test_read.verify()

            new_size = os.path.getsize(temp_p)
            if new_size < orig_size:
                os.replace(temp_p, p)
                total_comp += new_size
                saved = orig_size - new_size
                print(f"Compressed {f}: {orig_size//1024}KB -> {new_size//1024}KB (-{saved*100//orig_size}%)")
            else:
                if os.path.exists(temp_p):
                    os.remove(temp_p)
                total_comp += orig_size
                print(f"Retained original {f}: {orig_size//1024}KB")

    except Exception as e:
        print(f"Error processing {f}: {e}")
        if os.path.exists(temp_p):
            os.remove(temp_p)
        total_comp += orig_size

saved_total = total_orig - total_comp
print("\n==========================================")
print(f"All Images Processed!")
print(f"Original Total: {total_orig // 1024} KB ({total_orig / (1024*1024):.2f} MB)")
print(f"Compressed Total: {total_comp // 1024} KB ({total_comp / (1024*1024):.2f} MB)")
print(f"Total Saved: {saved_total // 1024} KB ({saved_total / (1024*1024):.2f} MB, -{saved_total*100//total_orig}%)")
print("==========================================")
