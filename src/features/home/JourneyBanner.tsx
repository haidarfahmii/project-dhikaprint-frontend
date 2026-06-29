"use client";

import { ArrowRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export default function JourneyBanner() {
  return (
    <section className="py-20 bg-[#f8f9fc]">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Sisi Kiri: Logo Dhika 4 Print */}
          <div className="flex justify-center md:justify-start">
            {/* Dalam implementasi nyata, ganti ini dengan <Image src="/logo.png" />
              Untuk sementara, saya membuat replika teks logonya 
            */}
            {/* <div className="flex items-baseline">
              <span className="text-[#00a651] font-black text-6xl md:text-8xl italic tracking-tighter shadow-sm">
                dhika
              </span>
              <span className="text-[#f9b233] font-black text-6xl md:text-8xl mx-1 shadow-sm">
                4
              </span>
              <div className="flex flex-col">
                <span className="text-[#00a651] font-black text-6xl md:text-8xl italic tracking-tighter leading-none shadow-sm">
                  print
                </span>
                <span className="text-[#f9b233] font-bold text-sm md:text-base tracking-[0.3em] uppercase mt-1">
                  DIGITAL PRINTING
                </span>
              </div>
            </div> */}
            <Image
              src="/logo-removebg.png"
              width={500}
              height={500}
              alt="Logo Dhika 4 Print"
            />
          </div>

          {/* Sisi Kanan: Konten Teks & Animasi */}
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold text-[#111d35] mb-4">
              Perjalanan Kami
            </h2>

            <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed text-justify">
              Dhika4Print merupakan layanan percetakan sejak tahun 2009. Pertama
              kami bergerak untuk membantu{" "}
              <span className="italic font-medium">small business</span> dan
              UMKM untuk menemukan customer yang dibutuhkan dalam usahanya
              dengan bentuk
            </p>

            {/* Animasi Typing Teks */}
            <div className="text-2xl font-bold text-[#111d35] mb-8 h-8 flex items-center">
              Dhika 4{" "}
              <span className="ml-2">
                <TypeAnimation
                  sequence={[
                    "Marketing",
                    2000, // Ketik 'Marketing', tunggu 2 detik
                    "Designing",
                    2000, // Hapus dan ketik 'Designing', tunggu 2 detik
                    "Branding",
                    2000, // Hapus dan ketik 'Branding', tunggu 2 detik
                    "Printing",
                    2000, // Hapus dan ketik 'Printing', tunggu 2 detik
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
              className="bg-[#00422a] text-white font-bold px-6 py-3 rounded hover:bg-[#00301e] transition-colors flex items-center gap-2 group"
            >
              Click here
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
