"use client";

import type { ProductDetail } from "../types";
import { dummyProduct } from "../data/dummy-product";
import { Breadcrumb } from "./Breadcrumb";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { ProductTabs } from "./ProductTabs";
import { HowToOrderSteps } from "./HowToOrderSteps";
import { FormOrderProduct } from "./FormOrderProduct";

export default function ProductDetailPage({
  product = dummyProduct,
}: {
  product?: ProductDetail;
}) {
  return (
    <div className="bg-background">
      <Breadcrumb product={product} />

      {/* --- Hero: gambar + info produk --- */}
      <section className="container-x py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </section>

      {/* --- Tabs: Deskripsi / Spesifikasi --- */}
      <ProductTabs product={product} />

      {/* --- 3 Langkah mudah --- */}
      <HowToOrderSteps />

      {/* --- Form Order --- */}
      <FormOrderProduct product={product} />
    </div>
  );
}
