"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ChevronsDown,
  Server,
  FileUp,
  ShoppingCart,
  Upload,
} from "lucide-react";

// --- Tipe data produk (sesuaikan / pindahkan ke site-data.ts kalau perlu) ---
type ProductOption = {
  label: string;
  pricePerUnit: number;
};

type ProductDetail = {
  name: string;
  breadcrumb: string;
  image?: string;
  features: string[];
  bahanOptions: ProductOption[];
  cetakSisiOptions: ProductOption[];
};

const dummyProduct: ProductDetail = {
  name: "Brosur A4",
  breadcrumb: "Brosur A4",
  image:
    "https://dhika4print.com/wp-content/uploads/2023/02/BROSUR-A4-min-1024x1024-2-1024x1024.jpg",
  features: [
    "Tersedia beberapa pilihan bahan",
    "Ukuran A4 (21 x 29,7 cm)",
    "Isi Per Rim (500 Lembar)",
    "Cetak Full Color",
    "Dicetak menggunakan mesin teknologi terkini",
    "Estimasi produksi tergantung dari waktu yg di pilih",
    "Estimasi juga mengacu pada jumlah pesanan.",
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

const steps = [
  {
    number: 1,
    icon: Server,
    color: "bg-blue-600",
    title: "Tentukan pilihanmu",
    desc: "Pilih opsi yang kamu inginkan untuk cetakanmu. Kami akan membuatmu senang dengan pilihanmu.",
  },
  {
    number: 2,
    icon: FileUp,
    color: "bg-pink-600",
    title: "Upload design",
    desc: "Upload desain kamu yang sudah jadi di sini, dan kami akan mencetaknya sesuai dengan pilihanmu",
  },
  {
    number: 3,
    icon: ShoppingCart,
    color: "bg-amber-500",
    title: "Checkout & Order",
    desc: "Checkout dan selesaikan pesanan kamu dengan sangat mudah. lakukan pembayaran sesuai yang tertera di menu checkout",
  },
];

export default function ProductDetailPage({
  product = dummyProduct,
}: {
  product?: ProductDetail;
}) {
  const [activeTab, setActiveTab] = useState<"deskripsi" | "foto">("deskripsi");

  // --- Form state ---
  const [bahan, setBahan] = useState(product.bahanOptions[0].label);
  const [cetakSisi, setCetakSisi] = useState(product.cetakSisiOptions[0].label);
  const [jumlah, setJumlah] = useState<number>(0);
  const [catatan, setCatatan] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);

  const hargaSatuan = useMemo(() => {
    const bahanPrice =
      product.bahanOptions.find((o) => o.label === bahan)?.pricePerUnit ?? 0;
    const cetakPrice =
      product.cetakSisiOptions.find((o) => o.label === cetakSisi)
        ?.pricePerUnit ?? 0;
    return bahanPrice + cetakPrice;
  }, [bahan, cetakSisi, product]);

  const total = hargaSatuan * (jumlah || 0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : null);
  };

  const formatRupiah = (value: number) =>
    `Rp. ${value.toLocaleString("id-ID")}`;

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="container-x flex h-14 items-center justify-between text-sm">
          <span className="text-gray-500">{product.breadcrumb}</span>
          <div className="text-gray-400">
            <Link href="/" className="hover:text-brand">
              Home
            </Link>{" "}
            / <span className="text-gray-600">{product.breadcrumb}</span>
          </div>
        </div>
      </div>

      {/* --- Bagian Detail Produk --- */}
      <section className="container-x py-10">
        <div className="mb-6 flex justify-end gap-2">
          <button
            onClick={() => setActiveTab("deskripsi")}
            className={`rounded px-5 py-2 text-sm font-semibold transition-colors ${
              activeTab === "deskripsi"
                ? "bg-blue-700 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Deskripsi Produk
          </button>
          <button
            onClick={() => setActiveTab("foto")}
            className={`rounded px-5 py-2 text-sm font-semibold transition-colors ${
              activeTab === "foto"
                ? "bg-blue-700 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Foto
          </button>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Gambar produk */}
          <div className="relative aspect-square w-full max-w-xl overflow-hidden rounded-lg bg-gray-100">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-sm font-semibold uppercase tracking-widest text-gray-400">
                Mockup Produk
              </div>
            )}
          </div>

          {/* Info produk */}
          <div>
            {activeTab === "deskripsi" ? (
              <>
                <h1 className="mb-5 text-2xl font-bold text-ink">
                  {product.name}
                </h1>
                <ul className="space-y-4">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 text-brand">✔</span>
                      <span className="text-sm leading-relaxed text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="flex aspect-video items-center justify-center rounded-lg bg-gray-50 text-sm text-gray-400">
                Belum ada foto tambahan untuk produk ini.
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="flex justify-center py-2 text-gray-300">
        <ChevronsDown className="h-6 w-6" />
      </div>

      {/* --- 3 Langkah Mudah --- */}
      <section className="bg-gray-50 py-16">
        <div className="container-x text-center">
          <h2 className="mb-12 text-2xl font-bold text-ink sm:text-3xl">
            3 Langkah mudah order print online
          </h2>

          <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-3">
            {/* garis penghubung */}
            <div className="absolute left-0 right-0 top-5 hidden border-t border-dashed border-gray-300 sm:block" />

            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center"
                >
                  <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 text-sm font-bold text-white">
                    {step.number}
                  </span>
                  <div
                    className={`mb-5 flex h-28 w-28 items-center justify-center rounded-full text-white ${step.color}`}
                  >
                    <Icon className="h-12 w-12" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="max-w-xs text-sm leading-relaxed text-gray-500">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="flex justify-center py-2 text-gray-300">
        <ChevronsDown className="h-6 w-6" />
      </div>

      {/* --- Form Order --- */}
      <section className="container-x py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Step 1: Tentukan Pilihanmu */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded bg-gray-700 text-lg font-bold text-white">
                1
              </span>
              <h3 className="flex-1 border-b border-gray-200 pb-3 text-xl font-bold text-ink">
                Tentukan pilihanmu
              </h3>
            </div>

            <p className="mb-4 text-sm font-bold uppercase text-brand">
              {product.name}
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Bahan
                </label>
                <select
                  value={bahan}
                  onChange={(e) => setBahan(e.target.value)}
                  className="w-full rounded border border-gray-300 bg-white px-3 py-2.5 text-sm focus:border-brand focus:outline-none"
                >
                  {product.bahanOptions.map((o) => (
                    <option key={o.label} value={o.label}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Cetak Sisi
                </label>
                <select
                  value={cetakSisi}
                  onChange={(e) => setCetakSisi(e.target.value)}
                  className="w-full rounded border border-gray-300 bg-white px-3 py-2.5 text-sm focus:border-brand focus:outline-none"
                >
                  {product.cetakSisiOptions.map((o) => (
                    <option key={o.label} value={o.label}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Jumlah (Rim)
                </label>
                <input
                  type="number"
                  min={0}
                  value={jumlah || ""}
                  onChange={(e) => setJumlah(Number(e.target.value))}
                  placeholder="0"
                  className="w-full rounded border border-gray-300 px-3 py-2.5 text-sm focus:border-brand focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Harga Satuan
                </label>
                <input
                  type="text"
                  readOnly
                  value={formatRupiah(hargaSatuan)}
                  className="w-full rounded border border-gray-200 bg-gray-100 px-3 py-2.5 text-sm text-gray-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Catatan
                </label>
                <textarea
                  value={catatan}
                  onChange={(e) => setCatatan(e.target.value)}
                  rows={5}
                  placeholder="Tambahkan catatan untuk pesananmu (opsional)"
                  className="w-full resize-y rounded border border-gray-300 px-3 py-2.5 text-sm focus:border-brand focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Step 2 & 3 */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded bg-gray-700 text-lg font-bold text-white">
                2
              </span>
              <h3 className="flex-1 border-b border-gray-200 pb-3 text-xl font-bold text-ink">
                Upload design
              </h3>
            </div>

            <p className="mb-4 text-sm leading-relaxed text-gray-500">
              File yang diijinkan jpg, jpeg, png, tiff, bmp, rar, zip, 7z, tif,
              ps, psd, cdr, ai, id, pdf dan Max Ukuran File 50 MB. Jika file
              lebih dari satu silahkan jadikan satu dengan format Zip atau Rar
            </p>

            <label
              htmlFor="design-upload"
              className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 py-10 text-center transition-colors hover:border-brand"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-light text-brand">
                <Upload className="h-7 w-7" />
              </div>
              <span className="font-semibold text-brand">
                {fileName ?? "Upload design"}
              </span>
              <span className="rounded bg-gray-200 px-4 py-1.5 text-xs font-semibold text-gray-700">
                Browse
              </span>
              <input
                id="design-upload"
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            <div className="mt-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded bg-gray-700 text-lg font-bold text-white">
                  3
                </span>
                <h3 className="flex-1 border-b border-gray-200 pb-3 text-xl font-bold text-ink">
                  Checkout & Order
                </h3>
              </div>

              <p className="mb-4 text-lg font-semibold text-ink">
                Total :{" "}
                <span className="text-red-600">{formatRupiah(total)}</span>
              </p>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded bg-amber-400 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-amber-500"
              >
                <ShoppingCart className="h-4 w-4" />
                Order
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
