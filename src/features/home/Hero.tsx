import { ChevronLeft, ChevronRight } from "lucide-react";
// import Image from 'next/image'; // Uncomment ini saat Anda sudah memiliki aset gambar asli

export default function Hero() {
  return (
    <section className="pt-6 pb-2">
      <div className="container mx-auto px-4">
        {/* Banner Container */}
        <div className="relative w-full h-[350px] md:h-[450px] bg-[#006842] rounded-xl overflow-hidden shadow-sm flex flex-col items-center justify-center group">
          {/* Top Right Floating Button */}
          <div className="absolute top-6 right-6 z-30">
            <button className="bg-white text-gray-900 font-bold px-6 py-2.5 rounded-full text-xs tracking-widest shadow-md hover:bg-gray-100 hover:scale-105 transition-all uppercase">
              Pesan Now
            </button>
          </div>

          {/* Left / Right Nav Arrows */}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 text-white rounded-full flex items-center justify-center hover:bg-black/50 transition-colors z-30 backdrop-blur-sm opacity-0 group-hover:opacity-100">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 text-white rounded-full flex items-center justify-center hover:bg-black/50 transition-colors z-30 backdrop-blur-sm opacity-0 group-hover:opacity-100">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Center Images Presentation (Mocking the 3D perspective from the design) */}
          <div className="relative w-full h-full flex items-center justify-center gap-4 md:gap-8 z-10 px-12 mt-[-40px]">
            {/* Product Mockup 1: Brosur (Left) */}
            <div className="hidden md:flex w-1/3 h-56 bg-gray-200 -rotate-6 shadow-xl rounded overflow-hidden relative opacity-90 transform transition-transform hover:rotate-0 hover:z-20">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-300 to-white flex items-center justify-center">
                <span className="text-gray-400 font-bold text-sm tracking-widest">
                  MOCKUP BROSUR
                </span>
              </div>
            </div>

            {/* Product Mockup 2: Kartu Nama (Center / Active) */}
            <div className="w-3/4 md:w-1/3 h-64 bg-white shadow-2xl rounded overflow-hidden relative z-20 scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-200 flex items-center justify-center">
                <span className="text-[#00a651] font-bold text-sm tracking-widest">
                  MOCKUP KARTU NAMA
                </span>
              </div>
            </div>

            {/* Product Mockup 3: Spanduk (Right) */}
            <div className="hidden md:flex w-1/3 h-56 bg-gray-200 rotate-6 shadow-xl rounded overflow-hidden relative opacity-90 transform transition-transform hover:rotate-0 hover:z-20">
              <div className="absolute inset-0 bg-gradient-to-bl from-gray-300 to-white flex items-center justify-center">
                <span className="text-gray-400 font-bold text-sm tracking-widest">
                  MOCKUP SPANDUK
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Content: Title & Pagination */}
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#00422a] to-transparent pt-24 pb-6 flex flex-col items-center z-20">
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-black tracking-wider uppercase mb-6 drop-shadow-lg text-center px-4">
              Cetak Cepat Dan Berkualitas!
            </h1>

            {/* Pagination Indicators (Pill style) */}
            <div className="flex gap-2 items-center">
              <div className="w-8 h-1.5 bg-white rounded-full shadow-sm cursor-pointer"></div>
              <div className="w-3 h-1.5 bg-white/40 hover:bg-white/70 rounded-full transition-colors cursor-pointer"></div>
              <div className="w-3 h-1.5 bg-white/40 hover:bg-white/70 rounded-full transition-colors cursor-pointer"></div>
              <div className="w-3 h-1.5 bg-white/40 hover:bg-white/70 rounded-full transition-colors cursor-pointer"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
