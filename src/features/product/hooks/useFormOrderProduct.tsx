"use client";

import { useMemo, useState } from "react";
import { useFormik } from "formik";

import type { OrderFormValues, ProductDetail } from "@/features/product/types";
import { orderProductSchema } from "@/features/product/schema/orderProductSchema";
import {
  ACCEPTED_EXTENSIONS,
  MAX_FILE_SIZE_MB,
} from "@/features/product/constants";

export function useFormOrderProduct(product: ProductDetail) {
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const startingPrice = useMemo(
    () => Math.min(...product.bahanOptions.map((o) => o.pricePerUnit)),
    [product.bahanOptions],
  );

  const formik = useFormik<OrderFormValues>({
    initialValues: {
      bahan: product.bahanOptions[0]?.label ?? "",
      cetakSisi: product.cetakSisiOptions[0]?.label ?? "",
      jumlah: 0,
      catatan: "",
    },
    validationSchema: orderProductSchema,
    onSubmit: (values) => {
      // TODO: hubungkan ke endpoint order sesungguhnya, mis. POST /api/orders
      console.log("Order submitted:", { ...values, fileName });
      setSubmitted(true);
    },
  });

  const hargaSatuan = useMemo(() => {
    const bahanPrice =
      product.bahanOptions.find((o) => o.label === formik.values.bahan)
        ?.pricePerUnit ?? 0;
    const cetakPrice =
      product.cetakSisiOptions.find((o) => o.label === formik.values.cetakSisi)
        ?.pricePerUnit ?? 0;
    return bahanPrice + cetakPrice;
  }, [formik.values.bahan, formik.values.cetakSisi, product]);

  const total = hargaSatuan * (formik.values.jumlah || 0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
    if (!ACCEPTED_EXTENSIONS.includes(ext)) {
      setFileError(`Format .${ext} tidak didukung.`);
      setFileName(null);
      return;
    }
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setFileError(`Ukuran file maksimal ${MAX_FILE_SIZE_MB}MB.`);
      setFileName(null);
      return;
    }

    setFileError(null);
    setFileName(file.name);
  };

  const removeFile = () => {
    setFileName(null);
    setFileError(null);
  };

  return {
    formik,
    startingPrice,
    hargaSatuan,
    total,
    fileName,
    fileError,
    submitted,
    handleFileChange,
    removeFile,
  };
}
