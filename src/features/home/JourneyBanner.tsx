"use client";

import { ArrowRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export default function JourneyBanner() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Sisi Kiri: Logo Typography Dhika 4 Print */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/logo-removebg.png"
              width={500}
              height={500}
              alt="Logo Dhika 4 Print"
            />
          </div>

          {/* Sisi Kanan: Konten Teks & Animasi */}
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold text-ink mb-4">
              Perjalanan Kami
            </h2>

            <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed text-justify">
              Dhika4Print merupakan layanan percetakan sejak tahun 2009. Pertama
              kami bergerak untuk membantu{" "}
              <span className="italic font-medium">small business</span> dan
              UMKM untuk menemukan customer yang dibutuhkan dalam usahanya
              dengan
            </p>

            {/* Animasi Typing Teks */}
            <div className="text-2xl font-bold text-ink mb-8 h-8 flex items-center">
              Dhika 4{" "}
              <span className="ml-2">
                <TypeAnimation
                  sequence={[
                    "Marketing",
                    2000,
                    "Designing",
                    2000,
                    "Branding",
                    2000,
                    "Printing",
                    2000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  className="text-gray-400"
                />
              </span>
            </div>

            {/* Tombol Click Here */}
            <a
              href="https://wa.me/6281310092124"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 group"
            >
              Click here
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Tombol Click Here (Menggunakan class btn-primary) */}
            {/* <button className="btn-primary flex items-center gap-2 group">
              Click here
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
