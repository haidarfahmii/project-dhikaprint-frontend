import { notFound } from "next/navigation";
import { featuredProducts } from "@/data/dummyData";
import { slugify, parsePrice } from "@/lib/slugify";
import ProductDetailPage from "@/features/product/components/ProductDetailPage";

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
        category: product.category,
        breadcrumb: product.title,
        image: product.image,
        description: `${product.title} dari kategori ${product.category}, dicetak dengan mesin teknologi terkini dan hasil warna yang presisi.`,
        features: [
          `Kategori: ${product.category}`,
          `Harga mulai dari ${product.price} ${product.unit}`,
          "Tersedia berbagai pilihan ukuran & bahan",
          "Cetak dengan mesin teknologi terkini",
          "Estimasi produksi tergantung jumlah pesanan",
        ],
        specs: [
          { label: "Kategori", value: product.category },
          { label: "Harga Mulai", value: `${product.price} ${product.unit}` },
        ],
        bahanOptions: [{ label: "Standard", pricePerUnit: basePrice }],
        cetakSisiOptions: [{ label: "Standard", pricePerUnit: 0 }],
      }}
    />
  );
}

// Generate static params supaya halaman ini di-pre-render saat build
export async function generateStaticParams() {
  return featuredProducts.map((p) => ({ slug: slugify(p.title) }));
}
