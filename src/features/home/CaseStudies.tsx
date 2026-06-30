"use client";

import { useEffect, useRef, useState } from "react";
import { caseStudies } from "@/lib/site-data";

export default function CaseStudies() {
  const targetRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [titleProgress, setTitleProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current || !containerRef.current) return;

      // Mendapatkan posisi section utama
      const { top, height } = targetRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Jarak maksimal yang bisa di-scroll secara vertikal
      const scrollableDistance = height - windowHeight;

      // Menghitung persentase scroll (0 sampai 1)
      let progress = -top / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress)); // Membatasi agar tidak kurang dari 0 atau lebih dari 1

      // Menghitung lebar maksimal pergerakan horizontal
      // padding tambahan (misal 32px) agar konten terakhir tidak terpotong tepi layar
      const maxHorizontalScroll =
        containerRef.current.scrollWidth - window.innerWidth + 32;

      // Memperbarui state translateX berdasarkan persentase scroll
      setTranslateX(progress * maxHorizontalScroll);

      // Title hide progress: selesai sembunyi di 15% awal scroll, lalu tetap hidden
      const hideThreshold = 0.15;
      const titleHideProgress = Math.max(
        0,
        Math.min(1, progress / hideThreshold),
      );
      setTitleProgress(titleHideProgress);
    };

    // Event listener untuk scroll dan resize layar
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    // Panggil sekali saat pertama render untuk menyesuaikan posisi
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      {/* 
        Container luar diberi tinggi 300vh agar pengguna memiliki ruang untuk scroll ke bawah.
        Semakin besar vh, semakin lama/lambat efek horizontal scrollnya.
      */}

      {/* Container Sticky: akan menahan konten di tengah layar selama container luar di-scroll */}
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div
          className="container mx-auto px-4 md:px-8 mb-8 md:mb-12 transition-none"
          style={{
            opacity: 1 - titleProgress,
            transform: `translateY(-${titleProgress * 40}px)`,
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Case Studies
          </h2>
        </div>

        {/* Pembungkus elemen yang akan bergerak ke samping */}
        <div className="flex items-center">
          <div
            ref={containerRef}
            className="flex gap-8 md:gap-16 px-4 md:px-8 w-max will-change-transform"
            style={{
              transform: `translateX(-${translateX}px)`,
              // Transisi halus jika dibutuhkan, namun biasanya native scroll sudah mulus
              // transition: 'transform 0.1s ease-out'
            }}
          >
            {/* Render Block Case Studies */}
            {caseStudies.map((cs) => (
              <div key={cs.name} className="w-[300px] md:w-[450px] shrink-0">
                {/* Mengganti grid 3x3 menjadi satu kotak 1:1 */}
                <div className="aspect-square bg-gray-200 overflow-hidden relative group cursor-pointer">
                  <img
                    src={cs.image}
                    alt={cs.name}
                    draggable={false}
                    className="h-full w-full object-cover"
                  />

                  {/* Efek Hover overlay tetap dipertahankan */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
