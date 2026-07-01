import { FileUp, ListChecks, ShoppingBag } from "lucide-react";

export const marketingSteps = [
  {
    number: "01",
    icon: ListChecks,
    title: "Tentukan pilihanmu",
    desc: "Pilih bahan, sisi cetak, dan jumlah yang kamu butuhkan.",
  },
  {
    number: "02",
    icon: FileUp,
    title: "Upload design",
    desc: "Unggah desain siap cetak, tim kami akan meninjau file kamu.",
  },
  {
    number: "03",
    icon: ShoppingBag,
    title: "Checkout & Order",
    desc: "Konfirmasi pesanan, kami hubungi kamu untuk pembayaran & jadwal cetak.",
  },
];

export const ACCEPTED_EXTENSIONS = [
  "jpg",
  "jpeg",
  "png",
  "tiff",
  "tif",
  "bmp",
  "rar",
  "zip",
  "7z",
  "ps",
  "psd",
  "cdr",
  "ai",
  "indd",
  "pdf",
];

export const MAX_FILE_SIZE_MB = 50;
