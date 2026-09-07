import os
import subprocess
import shutil

ffmpeg = r"C:\Users\Asus\AppData\Local\Programs\Python\Python313\Lib\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe"
video_dir = "public/videos"

videos = [f for f in os.listdir(video_dir) if f.lower().endswith(".mp4") and not f.endswith(".comp.mp4")]
print(f"Found {len(videos)} videos in {video_dir}")

total_orig = 0
total_comp = 0

for v in videos:
    in_path = os.path.join(video_dir, v).replace("\\", "/")
    out_path = os.path.join(video_dir, f"{v}.comp.mp4").replace("\\", "/")
    orig_size = os.path.getsize(in_path)
    total_orig += orig_size

    # Video compression settings for high visual quality & web performance
    cmd = [
        ffmpeg, "-y",
        "-i", in_path,
        "-vcodec", "libx264",
        "-crf", "26",
        "-preset", "medium",
        "-c:a", "aac", "-b:a", "96k",
        "-movflags", "+faststart",
        out_path
    ]
    
    print(f"\nCompressing {v} ({orig_size // 1024} KB)...")
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode == 0 and os.path.exists(out_path):
        new_size = os.path.getsize(out_path)
        if new_size < orig_size:
            shutil.move(out_path, in_path)
            total_comp += new_size
            saved = orig_size - new_size
            print(f" -> Success: {new_size // 1024} KB (Saved {saved // 1024} KB, -{saved*100//orig_size}%)")
        else:
            os.remove(out_path)
            total_comp += orig_size
            print(f" -> Kept original: compressed was {new_size // 1024} KB")
    else:
        print(f" -> Failed with code {res.returncode}")
        if os.path.exists(out_path):
            os.remove(out_path)
        total_comp += orig_size

saved_total = total_orig - total_comp
print(f"\n==========================================")
print(f"All Videos Processed!")
print(f"Original: {total_orig // 1024} KB ({total_orig / (1024*1024):.2f} MB)")
print(f"Compressed: {total_comp // 1024} KB ({total_comp / (1024*1024):.2f} MB)")
print(f"Total Saved: {saved_total // 1024} KB ({saved_total / (1024*1024):.2f} MB, -{saved_total*100//total_orig}%)")
print(f"==========================================")
