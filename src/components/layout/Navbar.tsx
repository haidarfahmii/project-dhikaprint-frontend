"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Bell, ShoppingCart, Menu, ChevronDown } from "lucide-react";
import { useRef, useState, MouseEvent } from "react";
import CategoryMegaMenu from "./CategoryMegaMenu";

const navLinks = [
  { name: "Featured Product", href: "/featured", hasDropdown: true },
  { name: "Category Product", href: "/category", hasDropdown: true },
  // { name: "Order Tutorial", href: "/order-tutorial" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  // --- State dan Ref untuk fitur Drag-to-Scroll (mobile category strip) ---
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

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-ink shadow-sm">
      {/* --- Tingkat Utama: Logo, Menu, Icons --- */}
      <div className="container-x relative flex h-20 items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="text-ink transition-colors hover:text-brand lg:hidden">
            <Menu className="h-6 w-6" />
          </button>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-removebg.png"
              width={130}
              height={130}
              alt="Logo Dhika 4 Print"
            />
          </Link>
        </div>

        {/* Menu Tengah */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <div
              key={item.name}
              className="relative h-20 flex items-center"
              onMouseEnter={() => item.hasDropdown && setOpenMenu(item.name)}
              onMouseLeave={() => item.hasDropdown && setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wide transition-colors hover:text-brand ${
                  openMenu === item.name ? "text-brand" : "text-ink"
                }`}
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${
                      openMenu === item.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Mega menu hanya untuk Category Product */}
              {item.name === "Category Product" && openMenu === item.name && (
                <CategoryMegaMenu />
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <button className="text-ink transition-colors hover:text-brand">
            <Search className="h-5 w-5" />
          </button>
          <button className="text-ink transition-colors hover:text-brand">
            <Bell className="h-5 w-5" />
          </button>
          <button className="relative text-ink transition-colors hover:text-brand">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
              0
            </span>
          </button>
        </div>
      </div>

      {/* --- Strip kategori drag-scroll (khusus mobile/tablet) --- */}
      <div className="border-t border-gray-100 bg-gray-50 lg:hidden">
        <div className="container-x">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`flex items-center gap-6 overflow-x-auto py-3 no-scrollbar scroll-smooth ${
              isDragging ? "cursor-grabbing select-none" : "cursor-grab"
            }`}
          >
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`whitespace-nowrap text-[13px] font-semibold uppercase tracking-wide text-gray-600 transition-colors hover:text-brand ${
                  isDragging ? "pointer-events-none" : ""
                }`}
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
