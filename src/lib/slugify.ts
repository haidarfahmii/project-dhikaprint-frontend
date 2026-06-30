export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // hapus karakter selain huruf/angka/spasi/strip
    .replace(/[\s_]+/g, "-") // spasi jadi strip
    .replace(/-+/g, "-"); // strip ganda jadi satu
}

/**
 * Mengubah string harga dummy ("Rp 8.000", "Rp 715.000") jadi number (8000, 715000).
 * Hanya mengambil digit, mengabaikan "Rp", titik ribuan, dan spasi.
 */
export function parsePrice(priceStr: string): number {
  const digitsOnly = priceStr.replace(/[^\d]/g, "");
  return digitsOnly ? parseInt(digitsOnly, 10) : 0;
}
