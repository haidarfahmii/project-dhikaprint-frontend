export type ProductOption = {
  label: string;
  pricePerUnit: number;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductDetail = {
  name: string;
  category?: string;
  breadcrumb: string;
  image?: string;
  images?: string[];
  description?: string;
  features: string[];
  specs?: ProductSpec[];
  bahanOptions: ProductOption[];
  cetakSisiOptions: ProductOption[];
};

export type OrderFormValues = {
  bahan: string;
  cetakSisi: string;
  jumlah: number;
  catatan: string;
};
