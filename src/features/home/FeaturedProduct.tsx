import { ShoppingCart } from "lucide-react";

export default function FeaturedProduct() {
  // Data produk disesuaikan dengan katalog percetakan yang spesifik
  const products = [
    {
      title: "Print A3+ Art Paper (120gr/150gr)",
      price: "Rp 8.000",
      unit: "/ lbr",
      category: "PRINT A3+",
    },
    {
      title: "Stiker Vinyl A3+",
      price: "Rp 16.500",
      unit: "/ lbr",
      category: "STICKER A3+",
    },
    {
      title: "Jilid Hard Cover",
      price: "Rp 55.000",
      unit: "/ pcs",
      category: "FINISHING A3+",
    },
    {
      title: "Brosur Ukuran A4",
      price: "Rp 715.000",
      unit: "/ rim", // Asumsi harga borongan
      category: "BROSUR",
    },
    {
      title: "Kartu Nama AC 260gr + Glossy",
      price: "Rp 46.500",
      unit: "/ box",
      category: "KARTU NAMA",
    },
    {
      title: "Cetak ID Card (PVC)",
      price: "Rp 27.500",
      unit: "/ pcs",
      category: "ID CARD",
    },
    {
      title: "E-Toll Emoney Custom (1 Sisi)",
      price: "Rp 71.500",
      unit: "/ pcs",
      category: "E-TOLL",
    },
    {
      title: "Plakat Kayu Premium",
      price: "Rp 363.000",
      unit: "/ pcs",
      category: "PLAKAT",
    },
    {
      title: "Tumbler Custom",
      price: "Rp 143.000",
      unit: "/ pcs",
      category: "MERCHANDISE",
    },
    {
      title: "Cetak Latex HVS 80gr (A0)",
      price: "Rp 77.000",
      unit: "/ lbr",
      category: "LATEX",
    },
    {
      title: "Spanduk Flexi Korea 440gr",
      price: "Rp 60.500",
      unit: "/ m²",
      category: "OUTDOOR",
    },
    {
      title: "Stiker Vinyl White (UV Hires)",
      price: "Rp 165.000",
      unit: "/ m²",
      category: "INDOOR UV HIRES",
    },
    {
      title: "X-Banner Flexi Korea 440gr",
      price: "Rp 110.000",
      unit: "/ set",
      category: "PAKET BANNER",
    },
    {
      title: "Print UV Flatbed",
      price: "Rp 165",
      unit: "/ cm",
      category: "UV FLATBED",
    },
  ];

  return (
    <section className="py-16 bg-[#f8f9fc]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-3xl font-bold text-[#111d35]">
              Featured Product
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Pilihan produk cetak terbaik untuk kebutuhan Anda.
            </p>
          </div>
          <button className="hidden md:block text-[#00a651] font-bold text-sm hover:underline tracking-wide">
            LIHAT SEMUA PRODUK &rarr;
          </button>
        </div>

        {/* Product Grid - 4 Columns on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col group hover:shadow-lg hover:border-[#00a651]/50 transition-all duration-300"
            >
              {/* Product Image Placeholder */}
              <div className="h-56 bg-gray-100 relative w-full flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-110 transition-transform duration-500"></div>

                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-[#111d35] text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm tracking-wider">
                  {product.category}
                </span>

                {/* Placeholder Text */}
                <span className="absolute text-gray-400 font-semibold text-sm tracking-widest uppercase">
                  MOCKUP PRODUK
                </span>
              </div>

              {/* Product Details */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-[#111d35] text-sm mb-3 line-clamp-2 leading-relaxed group-hover:text-[#00a651] transition-colors">
                  {product.title}
                </h3>

                <div className="mt-auto mb-5">
                  <p className="text-[#00a651] font-extrabold text-lg flex items-baseline gap-1">
                    {product.price}
                    <span className="text-xs text-gray-500 font-medium">
                      {product.unit}
                    </span>
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-grow bg-white border border-[#00a651] text-[#00a651] rounded text-xs font-bold tracking-wider py-2.5 hover:bg-[#00a651] hover:text-white transition-colors uppercase">
                    Pilih Opsi
                  </button>
                  <button
                    className="w-10 flex items-center justify-center bg-gray-50 border border-gray-200 text-gray-600 rounded hover:bg-[#00a651] hover:text-white hover:border-[#00a651] transition-colors"
                    title="Tambah ke Keranjang"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <button className="w-full md:hidden mt-8 bg-white border-2 border-[#111d35] text-[#111d35] rounded font-bold text-sm py-3 hover:bg-[#111d35] hover:text-white transition-colors">
          LIHAT SEMUA PRODUK
        </button>
      </div>
    </section>
  );
}
