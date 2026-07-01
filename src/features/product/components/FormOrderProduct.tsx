"use client";

import { FileUp, Minus, Plus, ShoppingBag, Upload, X } from "lucide-react";

import type { ProductDetail } from "../types";
import { formatRupiah } from "../lib/format";
import { MAX_FILE_SIZE_MB } from "../constants";
import { useFormOrderProduct } from "../hooks/useFormOrderProduct";
import { RegistrationMark } from "./ui/RegistrationMark";
import { LedgerSelect } from "./ui/LedgerSelect";

export function FormOrderProduct({ product }: { product: ProductDetail }) {
  const {
    formik,
    hargaSatuan,
    total,
    fileName,
    fileError,
    submitted,
    handleFileChange,
    removeFile,
  } = useFormOrderProduct(product);

  return (
    <section id="konfigurasi" className="container-x py-16">
      <div className="mb-10">
        <p className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand">
          <RegistrationMark className="h-3.5 w-3.5" />
          Formulir Pesanan
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Konfigurasi Pesanan Anda
        </h2>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 gap-10 lg:grid-cols-3"
      >
        {/* Kolom kiri: field-field pesanan */}
        <div className="space-y-10 lg:col-span-2">
          <div>
            <h3 className="mb-5 border-b border-border pb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              01 — Spesifikasi Cetak
            </h3>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <LedgerSelect
                label="Bahan"
                name="bahan"
                value={formik.values.bahan}
                onChange={formik.handleChange}
                options={product.bahanOptions}
              />
              <LedgerSelect
                label="Cetak Sisi"
                name="cetakSisi"
                value={formik.values.cetakSisi}
                onChange={formik.handleChange}
                options={product.cetakSisiOptions}
              />

              <div>
                <label
                  htmlFor="jumlah"
                  className="mb-1.5 block text-xs uppercase tracking-wide text-muted-foreground"
                >
                  Jumlah (Rim)
                </label>
                <div className="flex items-center border-b-2 border-border focus-within:border-brand">
                  <button
                    type="button"
                    aria-label="Kurangi jumlah"
                    onClick={() =>
                      formik.setFieldValue(
                        "jumlah",
                        Math.max(0, (formik.values.jumlah || 0) - 1),
                      )
                    }
                    className="p-2 text-muted-foreground hover:text-ink"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    id="jumlah"
                    type="number"
                    name="jumlah"
                    min={0}
                    value={formik.values.jumlah || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="0"
                    className="w-full bg-transparent px-2 py-2 text-center font-mono text-sm text-ink focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <button
                    type="button"
                    aria-label="Tambah jumlah"
                    onClick={() =>
                      formik.setFieldValue(
                        "jumlah",
                        (formik.values.jumlah || 0) + 1,
                      )
                    }
                    className="p-2 text-muted-foreground hover:text-ink"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                {formik.touched.jumlah && formik.errors.jumlah && (
                  <p className="mt-1 text-xs text-destructive">
                    {formik.errors.jumlah}
                  </p>
                )}
              </div>

              <div>
                <span className="mb-1.5 block text-xs uppercase tracking-wide text-muted-foreground">
                  Harga Satuan
                </span>
                <p className="py-2 font-mono text-sm text-ink">
                  {formatRupiah(hargaSatuan)}
                </p>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="catatan"
                  className="mb-1.5 block text-xs uppercase tracking-wide text-muted-foreground"
                >
                  Catatan (opsional)
                </label>
                <textarea
                  id="catatan"
                  name="catatan"
                  value={formik.values.catatan}
                  onChange={formik.handleChange}
                  rows={4}
                  placeholder="Tambahkan catatan untuk tim produksi..."
                  className="w-full resize-y border-b-2 border-border bg-transparent py-2 text-sm text-ink focus:border-brand focus:outline-none"
                />
                {formik.touched.catatan && formik.errors.catatan && (
                  <p className="mt-1 text-xs text-destructive">
                    {formik.errors.catatan}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-5 border-b border-border pb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              02 — Unggah Desain
            </h3>
            <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
              Format: jpg, png, tiff, pdf, ai, psd, cdr, zip, rar. Maks{" "}
              {MAX_FILE_SIZE_MB}MB. Gabungkan file dalam satu ZIP/RAR jika lebih
              dari satu.
            </p>

            <label
              htmlFor="design-upload"
              className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-muted py-10 text-center transition-colors hover:border-brand"
            >
              {fileName ? (
                <div className="flex items-center gap-3 px-4">
                  <FileUp className="h-5 w-5 text-brand" />
                  <span className="max-w-xs truncate text-sm font-medium text-ink">
                    {fileName}
                  </span>
                  <button
                    type="button"
                    aria-label="Hapus file"
                    onClick={(e) => {
                      e.preventDefault();
                      removeFile();
                    }}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <>
                  <Upload className="h-6 w-6 text-brand" />
                  <span className="text-sm font-medium text-ink">
                    Klik untuk unggah desain
                  </span>
                  <span className="rounded border border-border px-4 py-1 text-xs uppercase tracking-wide text-muted-foreground">
                    Browse File
                  </span>
                </>
              )}
              <input
                id="design-upload"
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            {fileError && (
              <p className="mt-2 text-xs text-destructive">{fileError}</p>
            )}
          </div>
        </div>

        {/* Kolom kanan: ringkasan pesanan (sticky) */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 rounded-lg border border-brand/20 bg-brand-light p-6">
            <p className="mb-4 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span>03 — Ringkasan</span>
              <RegistrationMark className="h-4 w-4 text-brand" />
            </p>

            <dl className="space-y-3 border-b border-dashed border-brand/30 pb-4 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">{product.name}</dt>
                <dd className="text-right font-mono text-ink">
                  {formik.values.bahan}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Cetak Sisi</dt>
                <dd className="text-right font-mono text-ink">
                  {formik.values.cetakSisi}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Jumlah</dt>
                <dd className="font-mono text-ink">
                  {formik.values.jumlah || 0} rim
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Harga Satuan</dt>
                <dd className="font-mono text-ink">
                  {formatRupiah(hargaSatuan)}
                </dd>
              </div>
            </dl>

            <div className="flex items-baseline justify-between py-4">
              <span className="text-sm font-medium text-ink">Total</span>
              <span className="font-mono text-xl font-semibold text-ink">
                {formatRupiah(total)}
              </span>
            </div>

            <button type="submit" className="btn-primary w-full gap-2">
              <ShoppingBag className="h-4 w-4" />
              Konfirmasi Pesanan
            </button>

            {submitted && (
              <p className="mt-3 text-center text-xs font-medium text-brand-dark">
                Pesanan diterima. Tim kami akan menghubungi Anda melalui
                WhatsApp.
              </p>
            )}

            <p className="mt-4 text-center text-[11px] leading-relaxed text-muted-foreground">
              Pembayaran & konfirmasi akhir dilakukan setelah tim kami meninjau
              file desain Anda.
            </p>
          </div>
        </div>
      </form>
    </section>
  );
}
