import { notFound } from "next/navigation";
import { featuredProducts } from "@/data/dummyData";
import { slugify, parsePrice } from "@/lib/slugify";
import ProductDetailPage from "@/features/product/ProductDetailPage";

export default async function ProdukDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = featuredProducts.find((p) => slugify(p.title) === slug);

  if (!product) {
    notFound();
  }

  const basePrice = parsePrice(product.price);

  return (
    <ProductDetailPage
      product={{
        name: product.title,
        breadcrumb: product.title,
        image: product.image,
        features: [
          `Kategori: ${product.category}`,
          `Harga mulai dari ${product.price} ${product.unit}`,
          "Tersedia berbagai pilihan ukuran & bahan",
          "Cetak dengan mesin teknologi terkini",
          "Estimasi produksi tergantung jumlah pesanan",
        ],
        bahanOptions: [{ label: "Standard", pricePerUnit: basePrice }],
        cetakSisiOptions: [{ label: "Standard", pricePerUnit: 0 }],
      }}
    />
  );
}

// Opsional: generate static params supaya halaman ini di-pre-render saat build
export async function generateStaticParams() {
  return featuredProducts.map((p) => ({ slug: slugify(p.title) }));
}
