import ProductListingPage from "@/features/product/components/ProductListingPage";
import { featuredProducts } from "@/data/dummyData";
import { megaMenu } from "@/lib/site-data";

export default async function ProdukPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; kategori?: string }>;
}) {
  const { q, kategori } = await searchParams;

  return (
    <ProductListingPage
      products={featuredProducts}
      categoryMenu={megaMenu}
      initialQuery={q ?? ""}
      initialCategory={kategori ?? "all"}
    />
  );
}
