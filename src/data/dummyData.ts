// Mendefinisikan struktur tipe data produk
export interface Product {
  title: string;
  price: string;
  unit: string;
  category: string;
  image: string;
}

// Data dummy produk unggulan
export const featuredProducts: Product[] = [
  {
    title: "Print A3+ Art Paper (120gr/150gr)",
    price: "Rp 8.000",
    unit: "/ lbr",
    category: "PRINT A3+",
    image:
      "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=800&q=80",
  },
  {
    title: "Stiker Vinyl A3+",
    price: "Rp 16.500",
    unit: "/ lbr",
    category: "STICKER A3+",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
  },
  {
    title: "Jilid Hard Cover",
    price: "Rp 55.000",
    unit: "/ pcs",
    category: "FINISHING A3+",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80",
  },
  {
    title: "Brosur Ukuran A4",
    price: "Rp 715.000",
    unit: "/ rim",
    category: "BROSUR",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
  },
];
