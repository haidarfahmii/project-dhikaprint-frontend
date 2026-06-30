"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { megaMenu } from "@/lib/site-data";

export default function CategoryMegaMenu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = megaMenu[activeIndex];

  return (
    <div className="absolute left-1/2 top-full z-40 w-[min(90vw,900px)] -translate-x-1/2 border-t-2 border-brand bg-white shadow-xl">
      <div className="flex">
        {/* Kolom kiri: daftar kategori utama */}
        <div className="w-64 shrink-0 border-r border-gray-100 py-3">
          {megaMenu.map((item, i) => (
            <button
              key={item.label}
              onMouseEnter={() => setActiveIndex(i)}
              className={`flex w-full items-center justify-between px-5 py-2 text-left text-sm transition-colors ${
                i === activeIndex
                  ? "bg-brand-light font-semibold text-brand"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {item.label}
              <ChevronRight className="h-3.5 w-3.5 opacity-60" />
            </button>
          ))}
        </div>

        {/* Kolom kanan: sub-kategori (2 kolom) + promo banner */}
        <div className="flex flex-1 flex-col">
          <div className="grid flex-1 grid-cols-2 gap-x-8 px-8 py-6">
            {active.columns.map((col) => (
              <div key={col.heading}>
                <p className="mb-3 text-sm font-bold text-ink">{col.heading}</p>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="flex items-center gap-1.5 text-sm text-gray-600 transition-colors hover:text-brand"
                      >
                        <ChevronRight className="h-3 w-3 opacity-50" />
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link
            href="#"
            className="flex items-center justify-between border-t border-gray-100 px-8 py-3 text-sm font-semibold text-brand hover:underline"
          >
            Show All Category
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>

          {/* Promo banner pakai gambar kategori aktif */}
          <Link
            href="#"
            className="relative block h-28 w-full overflow-hidden"
            style={{
              backgroundImage: `url(${active.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 flex items-center bg-black/40 px-8">
              <span className="text-base font-bold text-white">
                {active.ctaLabel}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
