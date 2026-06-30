"use client";

import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function CustomerFavorite() {
  const favorites = [
    { id: 1, name: "Stiker Vinyl Anti Air", sold: "10k+ Terjual", rating: 4.9 },
    {
      id: 2,
      name: "Brosur Lipat 3 Art Paper",
      sold: "8k+ Terjual",
      rating: 4.8,
    },
    { id: 3, name: "Kartu Nama Premium PVC", sold: "5k+ Terjual", rating: 4.9 },
    {
      id: 4,
      name: "Spanduk Outdoor 340gsm",
      sold: "15k+ Terjual",
      rating: 4.7,
    },
    { id: 5, name: "Buku Menu Hardcover", sold: "2k+ Terjual", rating: 5.0 },
  ];

  // Ref untuk menargetkan wadah slider
  const scrollRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    // Cek apakah slider sudah mentok di ujung kanan (dengan toleransi 10px)
    if (scrollLeft + clientWidth >= scrollWidth - 10) {
      // Jika sudah di ujung, lakukan animasi gulung balik ke awal
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      // Geser ke kanan sejauh 1 ukuran kartu + ukuran gap (gap-6 = 24px)
      const itemWidth = scrollRef.current.children[0].clientWidth;
      scrollRef.current.scrollBy({ left: itemWidth + 24, behavior: "smooth" });
    }
  };

  const prevSlide = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth } = scrollRef.current;

    // Cek apakah slider sudah mentok di ujung kiri
    if (scrollLeft <= 10) {
      // Jika sudah di paling kiri tapi dipencet prev, gulung ke paling akhir
      scrollRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
    } else {
      // Geser ke kiri sejauh 1 ukuran kartu
      const itemWidth = scrollRef.current.children[0].clientWidth;
      scrollRef.current.scrollBy({
        left: -(itemWidth + 24),
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Header Section dengan Tombol Navigasi di Kanan */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-[#111d35] mb-2">
              Customer Favorite
            </h2>
            <p className="text-gray-500 text-sm">
              Produk cetak paling laris pilihan pelanggan kami.
            </p>
          </div>

          {/* Navigasi Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#00a651] hover:text-white hover:border-[#00a651] transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#00a651] hover:text-white hover:border-[#00a651] transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        {/* Menggunakan overflow-x-auto dan snap-x agar halus saat di-swipe jari */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6"
        >
          {favorites.map((item) => (
            <div
              key={item.id}
              // Lebar item: Full di Mobile, 1/3 di Desktop (dikurangi gap agar presisi 3 item per baris)
              className="w-full shrink-0 md:w-[calc((100%-3rem)/3)] snap-start group flex flex-col cursor-pointer"
            >
              {/* Image Container Persegi (Aspect-Square) */}
              <div className="aspect-square w-full bg-gray-100 rounded-2xl mb-4 overflow-hidden relative border border-gray-100 shadow-sm group-hover:shadow-md transition-all">
                {/* Background & Teks Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                  <span className="text-gray-400/80 font-bold text-lg tracking-widest uppercase">
                    Image 1:1
                  </span>
                </div>

                {/* Badge Top Left */}
                <div className="absolute top-3 left-3 bg-white/95 px-3 py-1.5 rounded text-[10px] font-bold text-[#00a651] uppercase tracking-wider shadow-sm z-10 border border-gray-100">
                  Best Seller
                </div>
              </div>

              {/* Detail Konten */}
              <div className="px-1">
                <h3 className="font-bold text-[#111d35] text-lg mb-1 group-hover:text-[#00a651] transition-colors line-clamp-1">
                  {item.name}
                </h3>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="text-[#00a651] font-semibold bg-green-50 px-2 py-1 rounded border border-green-100">
                      {item.sold}
                    </span>
                  </div>
                  <div className="flex items-center text-yellow-500 text-sm font-bold">
                    <Star className="w-4 h-4 fill-current mr-1" />
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
