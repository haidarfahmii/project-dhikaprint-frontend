// Mendefinisikan struktur tipe data produk
export interface Product {
  title: string;
  price: string;
  unit: string;
  category: string;
}

// Data dummy produk unggulan
export const featuredProducts: Product[] = [
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
    unit: "/ rim",
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
