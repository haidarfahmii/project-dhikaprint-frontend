import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-slate-50 pb-6 pt-16 text-slate-800">
      <div className="container mx-auto px-4">
        {/* Grid Layout: 1 kolom di mobile, 2 kolom di tablet, 4 kolom di desktop */}
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Kolom 1: Logo, About Us & Marketplace Buttons */}
          <div className="flex flex-col space-y-5">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-removebg.png"
                width={150}
                height={150}
                alt="Logo Dhika 4 Print"
              />
            </Link>

            {/* About Us */}
            <p className="text-sm leading-relaxed text-slate-500">
              Layanan untuk memfasilitasi UMKM agar dapat meningkatkan omzetnya
              dengan pendekatan branding, designing, marketing, dan printing.
            </p>

            {/* Marketplace Buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="https://shopee.co.id/dhika4print"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#ee4d2d] px-4 py-2.5 text-sm font-bold tracking-wide text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff6224] hover:shadow-md"
              >
                <Image
                  src="/shopee-white.png"
                  width={28}
                  height={28}
                  alt="Logo Shopee"
                />
                BELANJA DI SHOPEE
              </a>
              <a
                href="https://www.tokopedia.com/dhika4print"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#03ac0e] px-4 py-2.5 text-sm font-bold tracking-wide text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#05cc11] hover:shadow-md"
              >
                <Image
                  src="/tokopedia.png"
                  width={36}
                  height={36}
                  alt="Logo Tokopedia"
                />
                BELANJA DI TOKOPEDIA
              </a>
            </div>
          </div>

          {/* Kolom 2: Alamat */}
          <div>
            <h4 className="mb-6 inline-block border-b-2 border-brand pb-2 text-base font-bold tracking-wide text-ink">
              Alamat Kami
            </h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span className="leading-relaxed">
                  Jl. Alternatif Cibubur No.117, Nagrak, Kec. Gn. Putri,
                  Kabupaten Bogor, Jawa Barat 16967
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand" />
                <a
                  href="mailto:email@dhika4print.com"
                  className="hover:text-brand transition-colors"
                >
                  email@dhika4print.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand" />
                <a
                  href="tel:+6281310092124"
                  className="hover:text-brand transition-colors"
                >
                  +62 813-1009-2124
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Quick Links */}
          <div>
            <h4 className="mb-6 inline-block border-b-2 border-brand pb-2 text-base font-bold tracking-wide text-ink">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 transition-colors hover:text-brand"
                >
                  <span className="text-slate-400">›</span> Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/produk"
                  className="flex items-center gap-2 transition-colors hover:text-brand"
                >
                  <span className="text-slate-400">›</span> Katalog Produk
                </Link>
              </li>
              <li>
                <Link
                  href="/cara-pesan"
                  className="flex items-center gap-2 transition-colors hover:text-brand"
                >
                  <span className="text-slate-400">›</span> Cara Pemesanan
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="flex items-center gap-2 transition-colors hover:text-brand"
                >
                  <span className="text-slate-400">›</span> FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="flex items-center gap-2 transition-colors hover:text-brand"
                >
                  <span className="text-slate-400">›</span> Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Social Media */}
          <div>
            <h4 className="mb-6 inline-block border-b-2 border-brand pb-2 text-base font-bold tracking-wide text-ink">
              Social Media
            </h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 transition-colors hover:text-brand"
                >
                  <div className="rounded-full bg-slate-200 p-2 transition-colors group-hover:bg-brand">
                    <FaFacebook className="h-4 w-4 text-slate-600 group-hover:text-white" />
                  </div>
                  Dhika4Print Official
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dhika4print"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 transition-colors hover:text-brand"
                >
                  <div className="rounded-full bg-slate-200 p-2 transition-colors group-hover:bg-brand">
                    <FaInstagram className="h-4 w-4 text-slate-600 group-hover:text-white" />
                  </div>
                  @dhika4print
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 transition-colors hover:text-brand"
                >
                  <div className="rounded-full bg-slate-200 p-2 transition-colors group-hover:bg-brand">
                    <FaTwitter className="h-4 w-4 text-slate-600 group-hover:text-white" />
                  </div>
                  @dhika4print
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-slate-500 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Dhika4Print.com. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/syarat-ketentuan"
              className="transition-colors hover:text-brand"
            >
              Syarat & Ketentuan
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              href="/kebijakan-privasi"
              className="transition-colors hover:text-brand"
            >
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
