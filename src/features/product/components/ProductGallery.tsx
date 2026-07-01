"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import type { ProductDetail } from "../types";
import { RegistrationMark } from "./ui/RegistrationMark";

export function ProductGallery({ product }: { product: ProductDetail }) {
  const images = useMemo(
    () => product.images ?? (product.image ? [product.image] : []),
    [product.images, product.image],
  );
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-border bg-card">
        {activeImage ? (
          <Image
            src={activeImage}
            alt={product.name}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Mockup Produk
          </div>
        )}
        <RegistrationMark className="absolute left-3 top-3 h-4 w-4 text-ink/25" />
        <RegistrationMark className="absolute right-3 top-3 h-4 w-4 text-ink/25" />
        <RegistrationMark className="absolute bottom-3 left-3 h-4 w-4 text-ink/25" />
        <RegistrationMark className="absolute bottom-3 right-3 h-4 w-4 text-ink/25" />
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3">
          {images.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onClick={() => setActiveImage(img)}
              className={`relative h-20 w-20 overflow-hidden rounded-md border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                activeImage === img
                  ? "border-brand"
                  : "border-border hover:border-muted-foreground/50"
              }`}
            >
              <Image
                src={img}
                alt={`${product.name} ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
