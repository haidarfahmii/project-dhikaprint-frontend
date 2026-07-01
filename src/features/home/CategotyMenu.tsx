import {
  IdCard,
  FileText,
  Flag,
  Sticker,
  Package,
  LayoutGrid,
} from "lucide-react";
import Link from "next/link";

export default function CategoryMenu() {
  // Menampilkan 5 kategori utama dari daftar yang Anda berikan
  const categories = [
    { name: "KARTU NAMA", icon: IdCard, href: "/category/kartu-nama" },
    { name: "BROSUR", icon: FileText, href: "/category/brosur" },
    { name: "PAKET BANNER", icon: Flag, href: "/category/paket-banner" },
    { name: "STICKER A3+", icon: Sticker, href: "/category/sticker-a3" },
    { name: "MERCHANDISE", icon: Package, href: "/category/merchandise" },
  ];

  return (
    <section className="py-8 bg-[#f8f9fc] -mt-4 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Render 5 Kategori Utama */}
          {categories.map((cat, idx) => (
            <Link
              href={cat.href}
              key={idx}
              className="group flex flex-col items-center justify-center py-6 px-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#00a651] cursor-pointer"
            >
              <cat.icon className="h-10 w-10 text-[#00422a] mb-3 group-hover:scale-110 transition-transform stroke-[1.5]" />
              <h3 className="font-bold text-[#111d35] text-sm tracking-wide text-center uppercase">
                {cat.name}
              </h3>
            </Link>
          ))}

          {/* Tombol See All Categories (Slot ke-6) */}
          <Link
            href="/product"
            className="group flex flex-col items-center justify-center py-6 px-4 bg-gray-50/80 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#00a651] hover:bg-white cursor-pointer"
          >
            <div className="h-10 w-10 bg-[#00a651]/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#00a651] transition-all duration-300">
              <LayoutGrid className="h-5 w-5 text-[#00a651] group-hover:text-white stroke-[2]" />
            </div>
            <h3 className="font-bold text-[#00a651] text-sm tracking-wide text-center uppercase">
              See All Categories
            </h3>
          </Link>
        </div>
      </div>
    </section>
  );
}
