"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  PackageSearch,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { slugify, parsePrice } from "@/lib/slugify";
import type { Product } from "@/data/dummyData";
import type { MegaMenuItem } from "@/lib/site-data";

type SortOption = "relevansi" | "harga-rendah" | "harga-tinggi" | "nama";

const PAGE_SIZE = 8;

const SORT_LABELS: Record<SortOption, string> = {
  relevansi: "Relevansi",
  "harga-rendah": "Harga Terendah",
  "harga-tinggi": "Harga Tertinggi",
  nama: "Nama (A-Z)",
};

function RegistrationMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="7" />
      <line x1="12" y1="1" x2="12" y2="23" />
      <line x1="1" y1="12" x2="23" y2="12" />
    </svg>
  );
}

export default function ProductListingPage({
  products,
  categoryMenu,
  initialQuery = "",
  initialCategory = "all",
}: {
  products: Product[];
  categoryMenu: MegaMenuItem[];
  initialQuery?: string;
  initialCategory?: string;
}) {
  const router = useRouter();

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sort, setSort] = useState<SortOption>("relevansi");
  const [page, setPage] = useState(1);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Kategori nyata diambil dari data produk, bukan hardcode — filter ini
  // dijamin selalu sinkron dengan produk yang benar-benar ada.
  const productCategories = useMemo(() => {
    const counts = new Map<string, number>();
    products.forEach((p) =>
      counts.set(p.category, (counts.get(p.category) ?? 0) + 1),
    );
    return Array.from(counts.entries()).map(([label, count]) => ({
      label,
      count,
    }));
  }, [products]);

  const filtered = useMemo(() => {
    let list = products;

    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }

    const sorted = [...list];
    if (sort === "harga-rendah") {
      sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sort === "harga-tinggi") {
      sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (sort === "nama") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
    return sorted;
  }, [products, selectedCategory, query, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Reset ke halaman 1 setiap kali filter berubah
  useEffect(() => {
    setPage(1);
  }, [query, selectedCategory, sort]);

  // Sinkronkan filter ke URL (debounced) supaya hasil pencarian bisa dibagikan
  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams();
      if (query.trim()) params.set("q", query.trim());
      if (selectedCategory !== "all") params.set("kategori", selectedCategory);
      const qs = params.toString();
      router.replace(`/product${qs ? `?${qs}` : ""}`, { scroll: false });
    }, 400);
    return () => clearTimeout(timeout);
  }, [query, selectedCategory]);

  const toggleExpand = (label: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  const clearFilters = () => {
    setQuery("");
    setSelectedCategory("all");
    setSort("relevansi");
  };

  const hasActiveFilters = query.trim() !== "" || selectedCategory !== "all";
  const activeCategoryLabel =
    selectedCategory !== "all" ? selectedCategory : null;

  return (
    <div className="bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted">
        <div className="container-x flex h-12 items-center gap-2 text-xs">
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-ink"
          >
            Beranda
          </Link>
          <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
          <span className="font-medium text-ink">
            {activeCategoryLabel ?? "Semua Produk"}
          </span>
        </div>
      </div>

      {/* Header pencarian */}
      <section className="border-b border-border">
        <div className="container-x py-10">
          <p className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand">
            <RegistrationMark className="h-3.5 w-3.5" />
            Katalog Produk
          </p>
          <h1 className="mb-6 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Cari produk cetak yang kamu butuhkan
          </h1>

          <div className="relative max-w-xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari nama produk atau kategori..."
              className="w-full rounded-lg border border-border bg-card py-3 pl-11 pr-10 text-sm text-ink placeholder:text-muted-foreground focus:border-brand focus:outline-none"
            />
            {query && (
              <button
                type="button"
                aria-label="Hapus pencarian"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="container-x py-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
          {/* ---------- Sidebar ---------- */}
          <aside className="space-y-8">
            {/* Filter kategori (fungsional, dari data produk) */}
            <div>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Filter Kategori
              </h2>
              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition-colors ${
                    selectedCategory === "all"
                      ? "bg-brand-light font-medium text-brand-dark"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  Semua Kategori
                  <span className="font-mono text-xs text-muted-foreground">
                    {products.length}
                  </span>
                </button>
                {productCategories.map((c) => (
                  <button
                    key={c.label}
                    type="button"
                    onClick={() => setSelectedCategory(c.label)}
                    className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition-colors ${
                      selectedCategory === c.label
                        ? "bg-brand-light font-medium text-brand-dark"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {c.label}
                    <span className="font-mono text-xs text-muted-foreground">
                      {c.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Jelajahi departemen (navigasi, dari site-data.ts) */}
            <div>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Jelajahi Kategori Lengkap
              </h2>
              <div className="divide-y divide-border rounded-lg border border-border">
                {categoryMenu.map((item) => {
                  const isOpen = expanded.has(item.label);
                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        onClick={() => toggleExpand(item.label)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between px-3 py-2.5 text-left text-sm text-foreground hover:text-ink"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 text-muted-foreground transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="space-y-3 bg-muted px-3 py-3">
                          {item.columns.map((col) => (
                            <div key={col.heading}>
                              <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                                {col.heading}
                              </p>
                              <ul className="space-y-1">
                                {col.links.map((link) => (
                                  <li key={link}>
                                    <Link
                                      href={`/kategori/${slugify(link)}`}
                                      className="text-xs text-foreground hover:text-brand"
                                    >
                                      {link}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* ---------- Konten utama ---------- */}
          <div>
            {/* Toolbar: hasil + sort + filter mobile */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                Menampilkan{" "}
                <span className="font-medium text-ink">
                  {currentItems.length}
                </span>{" "}
                dari{" "}
                <span className="font-medium text-ink">{filtered.length}</span>{" "}
                produk
              </p>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setFiltersOpen((v) => !v)}
                  className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium text-foreground hover:bg-muted lg:hidden"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5" />
                  Filter
                </button>

                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortOption)}
                    className="appearance-none rounded-md border border-border bg-card py-2 pl-3 pr-8 text-xs font-medium text-foreground focus:border-brand focus:outline-none"
                  >
                    {(Object.keys(SORT_LABELS) as SortOption[]).map((key) => (
                      <option key={key} value={key}>
                        Urutkan: {SORT_LABELS[key]}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Chip filter aktif */}
            {hasActiveFilters && (
              <div className="mb-6 flex flex-wrap items-center gap-2">
                {query.trim() && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-light px-3 py-1 text-xs text-brand-dark">
                    &ldquo;{query.trim()}&rdquo;
                    <button
                      type="button"
                      aria-label="Hapus filter pencarian"
                      onClick={() => setQuery("")}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {activeCategoryLabel && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-light px-3 py-1 text-xs text-brand-dark">
                    {activeCategoryLabel}
                    <button
                      type="button"
                      aria-label="Hapus filter kategori"
                      onClick={() => setSelectedCategory("all")}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs text-muted-foreground underline-offset-2 hover:text-ink hover:underline"
                >
                  Hapus semua filter
                </button>
              </div>
            )}

            {/* Grid produk */}
            {currentItems.length > 0 ? (
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 xl:grid-cols-4">
                {currentItems.map((product) => (
                  <Link
                    key={product.title}
                    href={`/product/${slugify(product.title)}`}
                    className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md"
                  >
                    <div className="relative aspect-square w-full overflow-hidden bg-muted">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="mb-1 text-[11px] font-medium uppercase tracking-wide text-brand">
                        {product.category}
                      </p>
                      <h3 className="mb-2 line-clamp-2 text-sm font-medium text-ink">
                        {product.title}
                      </h3>
                      <p className="font-mono text-sm font-semibold text-ink">
                        {product.price}
                        <span className="ml-1 font-sans text-xs font-normal text-muted-foreground">
                          {product.unit}
                        </span>
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-muted py-16 text-center">
                <PackageSearch className="mb-4 h-10 w-10 text-muted-foreground" />
                <p className="mb-1 text-sm font-medium text-ink">
                  Produk tidak ditemukan
                </p>
                <p className="mb-4 max-w-xs text-sm text-muted-foreground">
                  Coba ubah kata kunci pencarian atau hapus filter kategori yang
                  aktif.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="btn-outline text-xs"
                >
                  Hapus semua filter
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <button
                  type="button"
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted disabled:opacity-40"
                >
                  Sebelumnya
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setPage(num)}
                      className={`h-8 w-8 rounded-md text-xs font-medium transition-colors ${
                        page === num
                          ? "bg-brand text-white"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {num}
                    </button>
                  ),
                )}
                <button
                  type="button"
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted disabled:opacity-40"
                >
                  Berikutnya
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA bantuan — generik, tanpa klaim promo yang tidak ada di data */}
      <section className="border-t border-border bg-ink py-12 text-white">
        <div className="container-x flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-lg font-semibold">
              Belum menemukan produk yang kamu cari?
            </h2>
            <p className="text-sm text-white/60">
              Konsultasikan kebutuhan cetak kamu langsung dengan tim kami.
            </p>
          </div>
          <Link href="/kontak" className="btn-primary shrink-0">
            Hubungi Kami
          </Link>
        </div>
      </section>
    </div>
  );
}
