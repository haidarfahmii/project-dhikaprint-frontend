import * as Yup from "yup";

export const orderProductSchema = Yup.object({
  bahan: Yup.string().required("Pilih bahan"),
  cetakSisi: Yup.string().required("Pilih sisi cetak"),
  jumlah: Yup.number().min(1, "Minimal 1 rim").required("Jumlah wajib diisi"),
  catatan: Yup.string().max(500, "Maksimal 500 karakter"),
});
