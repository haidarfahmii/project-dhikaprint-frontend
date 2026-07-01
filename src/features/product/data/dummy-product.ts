import type { ProductDetail } from "@/features/product/types";

export const dummyProduct: ProductDetail = {
  name: "Brosur A4",
  category: "Cetak Promosi",
  breadcrumb: "Brosur A4",
  image:
    "https://dhika4print.com/wp-content/uploads/2023/02/BROSUR-A4-min-1024x1024-2-1024x1024.jpg",
  description:
    "Brosur A4 full color untuk kebutuhan promosi bisnis, katalog produk, hingga materi presentasi. Dicetak di atas bahan pilihan dengan warna yang tajam dan konsisten di setiap lembarnya.",
  features: [
    "Tersedia beberapa pilihan bahan",
    "Ukuran A4 (21 x 29,7 cm)",
    "Isi Per Rim (500 Lembar)",
    "Cetak Full Color",
    "Dicetak menggunakan mesin teknologi terkini",
  ],
  specs: [
    { label: "Ukuran", value: "A4 — 21 x 29,7 cm" },
    { label: "Isi", value: "500 lembar / rim" },
    { label: "Warna Cetak", value: "Full Color (CMYK)" },
    { label: "Estimasi Produksi", value: "2–4 hari kerja" },
  ],
  bahanOptions: [
    { label: "HVS 100", pricePerUnit: 75000 },
    { label: "Art Paper 120", pricePerUnit: 95000 },
    { label: "Art Carton 210", pricePerUnit: 130000 },
  ],
  cetakSisiOptions: [
    { label: "1 Muka", pricePerUnit: 0 },
    { label: "2 Muka (Bolak-balik)", pricePerUnit: 25000 },
  ],
};
