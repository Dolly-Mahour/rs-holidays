import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen items-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />

      <main className="w-100 flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}
