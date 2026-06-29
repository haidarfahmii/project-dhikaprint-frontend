"use client"; // Wajib ditambahkan karena kita menggunakan interaksi state dan referensi

import Link from "next/link";
import Image from "next/image";
import { Search, User, ShoppingCart, Menu } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useRef, useState, MouseEvent } from "react";

export default function Navbar() {
  const navCategories = [
    { name: "Business Cards", href: "/category/business-cards" },
    {
      name: "Postcards & Print Advertising",
      href: "/category/postcards-print-advertising",
    },
    { name: "Sign, Banners & Poster", href: "/category/signs-banners-posters" },
    {
      name: "Label, Stickers, Packaging",
      href: "/category/labels-stickers-packaging",
    },
    { name: "Home & Gifts", href: "/category/home-gifts" },
    {
      name: "Invitation & Stationery",
      href: "/category/invitation-stationery",
    },
    { name: "Clothing & Bags", href: "/category/clothing-bags" },
    { name: "Promotional Products", href: "/category/promotional-products" },
    { name: "Dhika4Print X Masif Agency", href: "/collab/masif-agency" },
    { name: "Design & Logos", href: "/services/design-logos" },
  ];

  // --- State dan Ref untuk fitur Drag-to-Scroll ---
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault(); // Mencegah teks ter-highlight saat digeser
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Angka 2 adalah kecepatan geser (scroll speed)
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#111d35] text-white shadow-md">
      {/* --- Tingkat Atas: Logo & Actions --- */}
      <div className="container mx-auto px-4 h-20 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-4">
          <button className="lg:hidden text-white hover:text-[#00a651] transition-colors">
            <Menu className="h-6 w-6" />
          </button>
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
        </div>

        <div className="hidden lg:flex flex-1 max-w-xl mx-8 relative">
          <input
            type="text"
            placeholder="Cari produk cetak..."
            className="w-full bg-white/10 border border-white/20 rounded-full py-2 pl-4 pr-10 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-[#00a651] focus:bg-white/20 transition-all"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-[#00a651]">
            <Search className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-5 md:gap-6">
          <button className="text-white hover:text-[#00a651] transition-colors lg:hidden">
            <Search className="h-5 w-5" />
          </button>
          <button className="text-white hover:text-[#00a651] transition-colors hidden sm:block">
            <User className="h-5 w-5" />
          </button>
          <button className="text-white hover:text-[#00a651] transition-colors relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#00a651] text-[10px] font-bold text-white">
              0
            </span>
          </button>
          <a
            href="https://wa.me/6281310092124"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center rounded bg-[#00a651] text-white hover:bg-green-700 transition-colors h-10 px-4 text-xs font-bold tracking-wide uppercase"
          >
            <span className="mr-2 text-base">
              <FaWhatsapp />
            </span>
            Pesan Via WA
          </a>
        </div>
      </div>

      {/* --- Tingkat Bawah: Kategori Produk (Bisa di-drag) --- */}
      <div className="bg-[#0b1325]">
        <div className="container mx-auto px-4">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            // Tambahkan class cursor-grab agar pengguna tahu area ini bisa ditarik
            className={`flex items-center gap-6 overflow-x-auto py-3 no-scrollbar scroll-smooth ${
              isDragging ? "cursor-grabbing select-none" : "cursor-grab"
            }`}
          >
            {navCategories.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                // Tambahkan pointer-events-none saat dragging agar tidak tidak sengaja mengklik link saat sedang menggeser
                className={`whitespace-nowrap text-[13px] font-semibold tracking-wide hover:text-[#00a651] transition-colors uppercase ${
                  item.name.includes("Masif Agency")
                    ? "text-[#f9b233]"
                    : "text-gray-200"
                } ${isDragging ? "pointer-events-none" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
