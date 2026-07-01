"use client";

import { useMemo } from "react";
import { ChevronRight } from "lucide-react";

import type { ProductDetail } from "../types";
import { formatRupiah } from "../lib/format";
import { RegistrationMark } from "./ui/RegistrationMark";

export function ProductInfo({ product }: { product: ProductDetail }) {
  const startingPrice = useMemo(
    () => Math.min(...product.bahanOptions.map((o) => o.pricePerUnit)),
    [product.bahanOptions],
  );

  return (
    <div className="flex flex-col">
      <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-brand">
        <RegistrationMark className="h-3.5 w-3.5" />
        {product.category ?? "Produk Cetak"}
      </div>

      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {product.name}
      </h1>

      <p className="mb-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
        {product.description ??
          "Produk cetak berkualitas, diproses dengan presisi oleh tim produksi kami."}
      </p>

      <div className="mb-6 flex flex-wrap items-baseline gap-2 border-y border-border py-4">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">
          Mulai dari
        </span>
        <span className="font-mono text-2xl font-semibold text-ink">
          {formatRupiah(startingPrice)}
        </span>
        <span className="text-xs text-muted-foreground">/ rim</span>
      </div>

      <ul className="mb-8 space-y-3">
        {product.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm text-foreground"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            {feature}
          </li>
        ))}
      </ul>

      <a href="#konfigurasi" className="btn-primary w-fit gap-2">
        Mulai Pesan
        <ChevronRight className="h-4 w-4" />
      </a>
    </div>
  );
}
