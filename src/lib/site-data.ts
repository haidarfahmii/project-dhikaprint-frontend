export type MegaMenuItem = {
  label: string;
  /**
   * Path/URL gambar promo untuk banner di mega menu.
   * TODO: ganti dengan asset asli, saat ini masih placeholder.
   */
  image: string;
  ctaLabel: string;
  products: string[];
};

export const megaMenu: MegaMenuItem[] = [
  {
    label: "UV Flatbed",
    image: "/images/mega-menu/uv-flatbed.jpg",
    ctaLabel: "Liat Semua UV Flatbed",
    products: ["Laser Print (per menit)", "Print UV (per cm)"],
  },
  {
    label: "Paket Banner",
    image: "/images/mega-menu/paket-banner.jpg",
    ctaLabel: "Liat Semua Paket Banner",
    products: [
      "UV Stiker + Foamboard",
      "X Banner - Flexi China 280gr",
      "X Banner - Flexi Korea 440gr",
      "X Banner - Albatros",
      "Roll Banner 160 x 60 FK440gr",
      "Roll Banner 160 x 60 Albatros",
      "Roll Banner 200 x 80 FK440gr",
      "Roll Banner 200 x 80 Albatros",
      "Mini X Banner AC260 + Lam",
      "Tripod Banner (Foamboard)",
      "Tripod Banner (Impraboard)",
    ],
  },
  {
    label: "Indoor UV Hires",
    image: "/images/mega-menu/indoor-uv-hires.jpg",
    ctaLabel: "Liat Semua Indoor UV Hires",
    products: [
      "Albatros",
      "Photo Paper",
      "Stiker Vinyl White",
      "Stiker Vinyl Transparant",
      "Canvas Paper",
      "UV Duratrans",
    ],
  },
  {
    label: "Latex",
    image: "/images/mega-menu/latex.jpg",
    ctaLabel: "Liat Semua Latex",
    products: [
      "HVS (80gr)",
      "Art Paper (150gr)",
      "Art Cartoon (260)",
      "Bahan Sendiri (Roll)",
    ],
  },
  {
    label: "Plakat",
    image: "/images/mega-menu/plakat.jpg",
    ctaLabel: "Liat Semua Plakat",
    products: ["Plakat Kayu", "Plakat Akrilik (2cm)", "Plakat Jepit"],
  },
  {
    label: "E-Toll",
    image: "/images/mega-menu/e-toll.jpg",
    ctaLabel: "Liat Semua E-Toll",
    products: ["E-Toll Emoney", "E-Toll (Bahan Sendiri)"],
  },
  {
    label: "ID Card",
    image: "/images/mega-menu/id-card.jpg",
    ctaLabel: "Liat Semua ID Card",
    products: ["ID Card (PVC)", "ID Card (Bahan Sendiri)"],
  },
  {
    label: "Kartu Nama",
    image: "/images/mega-menu/kartu-nama.jpg",
    ctaLabel: "Liat Semua Kartu Nama",
    products: [
      "Art Cartoon (260)",
      "Art Cartoon (260) + Glossy",
      "Art Cartoon (260) + Doff",
      "Fancy Paper BW",
      "Fancy Paper Concorde",
      "Fancy Paper Jasmine",
      "Fancy Paper Linen",
    ],
  },
  {
    label: "Brosur",
    image: "/images/mega-menu/brosur.jpg",
    ctaLabel: "Liat Semua Brosur",
    products: ["A6", "A5", "1/3 A4", "A4"],
  },
  {
    label: "Finishing A3+",
    image: "/images/mega-menu/finishing-a3-plus.jpg",
    ctaLabel: "Liat Semua Finishing A3+",
    products: [
      "Laminasi Glossy",
      "Laminasi Doff",
      "Staples",
      "Spiral",
      "Spiral Jumbo",
      "Soft Cover",
      "Soft Cover Jumbo",
      "Hard Cover",
      "Hard Cover Jumbo",
      "Block Note",
      "Potong Kertas",
      "Cut Kisscut Standard",
      "Cut Kisscut Special",
      "Cut Diecut",
    ],
  },
  {
    label: "Sticker A3+",
    image: "/images/mega-menu/sticker-a3-plus.jpg",
    ctaLabel: "Liat Semua Sticker A3+",
    products: [
      "Stiker Chromo",
      "Stiker Vinyl",
      "Stiker Transparant",
      "Stiker Silver",
      "Stiker Hologram",
      "Stiker Craft",
      "Stiker HVS",
    ],
  },
  {
    label: "Print A3+",
    image: "/images/mega-menu/print-a3-plus.jpg",
    ctaLabel: "Liat Semua Print A3+",
    products: [
      "HVS (80gr, 100gr)",
      "Art Paper (120gr, 150gr)",
      "Mate Paper (150gr)",
      "Art Cartoon (210gr, 260gr)",
      "Art Cartoon (310gr)",
      "Fancy Paper BW",
      "Fancy Paper Concorde",
      "Fancy Paper Jasmine",
      "Fancy Paper Linen",
      "Canvas Paper",
      "Photo Paper A4",
    ],
  },
  {
    label: "Merchandise",
    image: "/images/mega-menu/merchandise.jpg",
    ctaLabel: "Liat Semua Merchandise",
    products: [
      "Tumbler (Bahan Sendiri)",
      "Tumbler",
      "Tumbler Suhu",
      "Pin 58 mm",
      "Pin 44 mm",
    ],
  },
  {
    label: "Outdoor",
    image: "/images/mega-menu/outdoor.jpg",
    ctaLabel: "Liat Semua Outdoor",
    products: [
      "Flexi China 280gr",
      "Flexi Korea 440gr",
      "Backlite",
      "One Way Vision",
    ],
  },
];

export const favoriteImages = [
  "https://dhika4print.com/wp-content/uploads/2023/06/sparkling-20.jpg",
  "https://dhika4print.com/wp-content/uploads/2023/04/akrilik-led-768x768.jpg",
  "https://dhika4print.com/wp-content/uploads/2023/04/pilih-template-768x768.png",
  "https://dhika4print.com/wp-content/uploads/2023/04/kalender-dhika.jpg",
  "https://dhika4print.com/wp-content/uploads/2023/04/Poster-A4-768x768.png",
  "https://dhika4print.com/wp-content/uploads/2023/05/layouting-picture.jpg",
  "https://dhika4print.com/wp-content/uploads/2023/04/Lawn-Sign-PSD-Mockup-768x558.jpg",
];

export const caseStudies = [
  {
    name: "Wakacao",
    image: "https://dhika4print.com/wp-content/uploads/2023/02/wakacao-min.png",
  },
  {
    name: "Moms",
    image: "https://dhika4print.com/wp-content/uploads/2023/02/moms-min.png",
  },
  {
    name: "Katsyu",
    image: "https://dhika4print.com/wp-content/uploads/2023/02/katsyu-min.png",
  },
  {
    name: "Segar",
    image: "https://dhika4print.com/wp-content/uploads/2023/02/segar-min.png",
  },
  {
    name: "UJ",
    image: "https://dhika4print.com/wp-content/uploads/2023/02/uj-min.png",
  },
];

export const recentBlog = [
  {
    title: "Desain Stiker Nastar Untuk Lebaran, Template Gratis Dhika4Print",
    date: "April 5, 2023",
    href: "https://dhika4print.com/desain-stiker-nastar-untuk-lebaran-template-gratis-cetak/",
  },
  {
    title: "Layanan Digital Printing di Cibubur, Tips Memilih Tempat Cetak",
    date: "April 4, 2023",
    href: "https://dhika4print.com/layanan-digital-printing-di-cibubur-tips-memilih-tempat-cetak/",
  },
  {
    title: "Cetak Stiker Terdekat : Kenali Jenis-Jenis Stiker & Kegunaanya",
    date: "April 3, 2023",
    href: "https://dhika4print.com/cetak-stiker-terdekat-dan-jenis-stiker/",
  },
];

export const footerMenu = [
  "Business Card",
  "Postcard",
  "Sign & Banner",
  "Label & Sticker",
  "Home & Gift",
  "Invitation",
  "Clothing & Bags",
  "Design & Logos",
];

export const footerProgram = ["Dhika x Masif Agency", "We're Hiring"];
