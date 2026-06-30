import { Calendar, User } from "lucide-react";

export default function RecentBlog() {
  const blogs = [
    {
      title: "Perbedaan Kertas Art Paper dan Art Carton",
      date: "24 Jun 2026",
      author: "Admin",
    },
    {
      title: "Tips Menyiapkan File Resolusi Tinggi untuk Cetak Spanduk",
      date: "20 Jun 2026",
      author: "Design Team",
    },
    {
      title: "Tren Packaging Ramah Lingkungan di Tahun 2026",
      date: "15 Jun 2026",
      author: "Admin",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#111d35] mb-2">
            Our Recent Blog
          </h2>
          <p className="text-gray-500">
            Informasi, tips, dan panduan seputar dunia percetakan dan desain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <article
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group flex flex-col cursor-pointer"
            >
              {/* Image Placeholder dengan Teks */}
              <div className="h-48 relative w-full flex items-center justify-center overflow-hidden bg-gray-100">
                {/* Background Gradient & Efek Zoom */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-500"></div>

                {/* Teks Mockup (Z-index agar di atas background) */}
                <span className="absolute z-10 text-gray-400 font-semibold text-sm tracking-widest uppercase">
                  MOCKUP BLOG 16:9
                </span>
              </div>

              {/* Konten Blog */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-400 mb-3 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" /> {blog.date}
                  </span>
                  <span className="flex items-center">
                    <User className="w-3 h-3 mr-1" /> {blog.author}
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug group-hover:text-[#00a651] transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-500 text-sm mb-5 line-clamp-2">
                  Pelajari lebih lanjut tentang topik ini untuk memastikan hasil
                  cetakan Anda maksimal dan sesuai dengan ekspektasi bisnis
                  Anda...
                </p>

                <div className="mt-auto">
                  <span className="text-[#00a651] font-semibold text-sm group-hover:underline flex items-center">
                    Baca Selengkapnya{" "}
                    <span className="ml-1 text-lg leading-none">&rarr;</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
