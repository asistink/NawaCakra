import Image from "next/image";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary-dark py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/logo-ugm-white.png"
            alt="Lambang Universitas Gadjah Mada"
            width={56}
            height={56}
            className="h-14 w-14 object-contain opacity-90"
          />
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold">Nawa Cakra</p>
            <p className="text-xs text-white/60">
              {site.program}, {site.locations}, {site.regency}
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-white/50 lg:text-right">
          © 2027 Tim KKN {site.name}, {site.university}.
          <br className="sm:hidden" /> Membangun desa bersama, untuk desa.
        </p>
      </div>
    </footer>
  );
}
