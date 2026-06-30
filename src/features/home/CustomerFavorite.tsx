"use client";

import { useEffect, useRef, useState } from "react";
import { favoriteImages } from "@/lib/site-data";

export default function CustomerFavorites() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const [dragging, setDragging] = useState(false);

  // Gambar diduplikasi 3x supaya ada "buffer" di kiri & kanan untuk efek infinite loop
  const loopedImages = [
    ...favoriteImages,
    ...favoriteImages,
    ...favoriteImages,
  ];
  const setCount = favoriteImages.length; // jumlah gambar asli per "set"

  // Posisikan scroll awal di tengah (set ke-2), supaya user bisa geser ke kiri maupun ke kanan
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const oneSetWidth = el.scrollWidth / 3;
    el.scrollLeft = oneSetWidth;
  }, []);

  // Saat scroll mendekati ujung kiri/kanan, lompat diam-diam (tanpa transisi) ke posisi yang sama di set tengah
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const oneSetWidth = el.scrollWidth / 3;

    if (el.scrollLeft <= 0) {
      el.scrollLeft += oneSetWidth;
    } else if (el.scrollLeft >= oneSetWidth * 2) {
      el.scrollLeft -= oneSetWidth;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    setDragging(true);
    startX.current = e.pageX;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const dx = e.pageX - startX.current;
    scrollRef.current.scrollLeft = scrollLeftStart.current - dx;
  };

  const stopDragging = () => {
    isDragging.current = false;
    setDragging(false);
  };

  return (
    <section className="py-14">
      <div className="px-6 sm:px-10 lg:px-16">
        <h2 className="mb-8 text-2xl font-bold text-ink sm:text-3xl">
          Customer Favorites
        </h2>
      </div>

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onScroll={handleScroll}
        className={`flex w-full overflow-x-auto scrollbar-hide ${
          dragging ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
      >
        {loopedImages.map((src, i) => (
          <div
            key={i}
            className="h-72 w-1/3 shrink-0 overflow-hidden sm:h-[420px]"
          >
            <img
              src={src}
              alt={`Customer favorite ${(i % setCount) + 1}`}
              draggable={false}
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
