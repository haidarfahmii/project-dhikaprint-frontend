import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, ShoppingBag } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b1b3d] text-white pt-16 pb-6 border-t border-gray-700">
      <div className="container mx-auto px-4">
        {/* Grid Layout: 1 kolom di mobile, 2 kolom di tablet, 4 kolom di desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Kolom 1: Logo, About Us & Marketplace Buttons */}
          <div className="flex flex-col space-y-5">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center text-2xl font-bold tracking-tight"
            >
              <Image
                src="/logo-removebg.png"
                width={150}
                height={150}
                alt="Logo Dhika 4 Print"
              />
            </Link>

            {/* About Us */}
            <p className="text-sm text-gray-300 leading-relaxed text-justify">
              Layanan untuk memfasilitasi UMKM agar dapat meningkatkan omzetnya
              dengan pendekatan branding, designing, marketing, dan printing.
            </p>

            {/* Marketplace Buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="https://shopee.co.id/dhika4print"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#ee4d2d] hover:bg-[#ff6224] text-white px-4 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md"
              >
                <Image
                  src="/shopee-white.png"
                  width={30}
                  height={30}
                  alt="Logo Shopee"
                />
                BELANJA DI SHOPEE
              </a>
              <a
                href="https://www.tokopedia.com/dhika4print"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#03ac0e] hover:bg-[#05cc11] text-white px-4 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md"
              >
                <Image
                  src="/tokopedia.png"
                  width={40}
                  height={40}
                  alt="Logo Tokopedia"
                />
                BELANJA DI TOKOPEDIA
              </a>
            </div>
          </div>

          {/* Kolom 2: Alamat */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide border-b border-gray-700 pb-2 inline-block">
              Alamat Kami
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-[#00a651]" />
                <span className="leading-relaxed">
                  Jl. Alternatif Cibubur No.117, Nagrak, Kec. Gn. Putri,
                  Kabupaten Bogor, Jawa Barat 16967
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-[#00a651]" />
                <span>email@dhika4print.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-[#00a651]" />
                <span>+62 813-1009-2124</span>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide border-b border-gray-700 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#00a651] transition-colors flex items-center gap-2"
                >
                  <span className="text-gray-600">›</span> Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/produk"
                  className="hover:text-[#00a651] transition-colors flex items-center gap-2"
                >
                  <span className="text-gray-600">›</span> Katalog Produk
                </Link>
              </li>
              <li>
                <Link
                  href="/cara-pesan"
                  className="hover:text-[#00a651] transition-colors flex items-center gap-2"
                >
                  <span className="text-gray-600">›</span> Cara Pemesanan
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-[#00a651] transition-colors flex items-center gap-2"
                >
                  <span className="text-gray-600">›</span> FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="hover:text-[#00a651] transition-colors flex items-center gap-2"
                >
                  <span className="text-gray-600">›</span> Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide border-b border-gray-700 pb-2 inline-block">
              Social Media
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#00a651] transition-colors group"
                >
                  <div className="bg-gray-800 p-2 rounded-full group-hover:bg-[#00a651] transition-colors">
                    <FaFacebook className="h-4 w-4 text-white" />
                  </div>
                  Dhika4Print Official
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dhika4print"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#00a651] transition-colors group"
                >
                  <div className="bg-gray-800 p-2 rounded-full group-hover:bg-[#00a651] transition-colors">
                    <FaInstagram className="h-4 w-4 text-white" />
                  </div>
                  @dhika4print
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#00a651] transition-colors group"
                >
                  <div className="bg-gray-800 p-2 rounded-full group-hover:bg-[#00a651] transition-colors">
                    <FaTwitter className="h-4 w-4 text-white" />
                  </div>
                  @dhika4print
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 border-t border-gray-700/80 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            &copy; {new Date().getFullYear()} Dhika4Print.com. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/syarat-ketentuan"
              className="hover:text-white transition-colors"
            >
              Syarat & Ketentuan
            </Link>
            <span>•</span>
            <Link
              href="/kebijakan-privasi"
              className="hover:text-white transition-colors"
            >
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
