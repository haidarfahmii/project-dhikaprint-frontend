import Link from "next/link";
import Image from "next/image";
import { featuredProducts } from "@/data/dummyData";
import { ShoppingCart } from "lucide-react";
import { slugify } from "@/lib/slugify";

export default function FeaturedProduct() {
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
          {featuredProducts.slice(0, 8).map((product, idx) => {
            const slug = slugify(product.title);

            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col group hover:shadow-lg hover:border-[#00a651]/50 transition-all duration-300"
              >
                {/* Product Image Placeholder */}
                <Link
                  href={`/product/${slug}`}
                  className="h-56 bg-gray-100 relative w-full flex items-center justify-center overflow-hidden"
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-110 transition-transform duration-500"></div>

                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 bg-[#111d35] text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm tracking-wider">
                    {product.category}
                  </span>

                  {/* Placeholder Text */}
                  {/* <span className="absolute text-gray-400 font-semibold text-sm tracking-widest uppercase">
                    MOCKUP PRODUK
                  </span> */}
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>

                {/* Product Details */}
                <div className="p-5 flex flex-col flex-grow">
                  <Link href={`/product/${slug}`}>
                    <h3 className="font-bold text-[#111d35] text-sm mb-3 line-clamp-2 leading-relaxed group-hover:text-[#00a651] transition-colors">
                      {product.title}
                    </h3>
                  </Link>

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
                    <Link
                      href={`/product/${slug}`}
                      className="flex-grow flex items-center justify-center bg-white border border-[#00a651] text-[#00a651] rounded text-xs font-bold tracking-wider py-2.5 hover:bg-[#00a651] hover:text-white transition-colors uppercase"
                    >
                      Lihat Detail
                    </Link>
                    <button
                      className="w-10 flex items-center justify-center bg-gray-50 border border-gray-200 text-gray-600 rounded hover:bg-[#00a651] hover:text-white hover:border-[#00a651] transition-colors"
                      title="Tambah ke Keranjang"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View All Button */}
        <button className="w-full md:hidden mt-8 bg-white border-2 border-[#111d35] text-[#111d35] rounded font-bold text-sm py-3 hover:bg-[#111d35] hover:text-white transition-colors">
          LIHAT SEMUA PRODUK
        </button>
      </div>
    </section>
  );
}
