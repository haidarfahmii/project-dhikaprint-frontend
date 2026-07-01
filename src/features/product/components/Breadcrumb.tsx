import Link from "next/link";
import { ChevronRight } from "lucide-react";

import type { ProductDetail } from "../types";

export function Breadcrumb({ product }: { product: ProductDetail }) {
  return (
    <div className="border-b border-border bg-muted">
      <div className="container-x flex h-12 items-center gap-2 text-xs">
        <Link
          href="/"
          className="text-muted-foreground transition-colors hover:text-ink"
        >
          Beranda
        </Link>
        <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
        {product.category && (
          <>
            <span className="text-muted-foreground">{product.category}</span>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
          </>
        )}
        <span className="font-medium text-ink">{product.breadcrumb}</span>
      </div>
    </div>
  );
}
