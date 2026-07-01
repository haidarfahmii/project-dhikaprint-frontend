"use client";

import { useState } from "react";

import type { ProductDetail } from "../types";

export function ProductTabs({ product }: { product: ProductDetail }) {
  const [activeTab, setActiveTab] = useState<"deskripsi" | "spesifikasi">(
    "deskripsi",
  );

  return (
    <section className="container-x pb-16">
      <div
        className="border-b border-border"
        role="tablist"
        aria-label="Detail produk"
      >
        <div className="flex gap-8">
          {(["deskripsi", "spesifikasi"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-4 text-sm font-medium capitalize transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                activeTab === tab
                  ? "text-ink"
                  : "text-muted-foreground hover:text-ink"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute inset-x-0 -bottom-px h-[2px] bg-brand" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-2xl py-8">
        {activeTab === "deskripsi" ? (
          <p className="text-sm leading-relaxed text-foreground">
            {product.description ??
              "Belum ada deskripsi tambahan untuk produk ini."}
          </p>
        ) : (
          <dl className="divide-y divide-border">
            {(product.specs ?? []).map((spec) => (
              <div
                key={spec.label}
                className="flex items-center justify-between py-3 text-sm"
              >
                <dt className="text-muted-foreground">{spec.label}</dt>
                <dd className="font-mono text-ink">{spec.value}</dd>
              </div>
            ))}
            {(!product.specs || product.specs.length === 0) && (
              <p className="py-3 text-sm text-muted-foreground">
                Belum ada spesifikasi tambahan untuk produk ini.
              </p>
            )}
          </dl>
        )}
      </div>
    </section>
  );
}
