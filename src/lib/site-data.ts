export type MegaMenuColumn = {
  heading: string;
  links: string[];
};

export type MegaMenuItem = {
  label: string;
  image: string;
  ctaLabel: string;
  columns: MegaMenuColumn[];
};

export const megaMenu: MegaMenuItem[] = [
  {
    label: "Business Cards",
    image:
      "https://dhika4print.com/wp-content/uploads/2023/02/kartu-nama-kotak.jpg",
    ctaLabel: "Liat Semua Business Cards",
    columns: [
      { heading: "Shapes", links: ["Standard", "Rounded Corner", "Square"] },
      { heading: "Premium Cards", links: ["Glossy", "Matte"] },
      {
        heading: "Specialty Cards",
        links: ["Business Cards Sticker", "Loyalty Cards", "Sparkling"],
      },
    ],
  },
  {
    label: "Postcards & Print Advertising",
    image:
      "https://dhika4print.com/wp-content/uploads/2023/02/BROSUR-A4-min-1024x1024-2-1024x1024.jpg",
    ctaLabel: "Liat Semua Printing",
    columns: [
      {
        heading: "Postcards",
        links: ["Postcards", "Postcards Mailing Service"],
      },
      {
        heading: "Certificate",
        links: [
          "E-Certificate",
          "Sertifikat Penghargaan",
          "Sertifikat Partisipasi",
          "Sertifikat Kelulusan",
          "Sertifikat Magang",
        ],
      },
      {
        heading: "Advertising",
        links: [
          "Flyer",
          "Brosur",
          "Map",
          "Door Tag",
          "Papan Akrilik Buka-Tutup",
          "Display Meja",
          "Buku Menu",
          "Booklets",
        ],
      },
    ],
  },
  {
    label: "Sign, Banners & Poster",
    image:
      "https://dhika4print.com/wp-content/uploads/2023/02/guide-ukuran-tent-card.png",
    ctaLabel: "Liat Semua Sign & Banner",
    columns: [
      {
        heading: "Custom Banner",
        links: [
          "Banner Selongsong",
          "Banner Kain",
          "X Banner",
          "Roll Up Banner",
          "Mini X Banner",
        ],
      },
      {
        heading: "Office Sign",
        links: [
          "Canvas Sign",
          "Plat Desk Name",
          "Signage Toilet",
          "Signage Petunjuk Arah",
          "Nametag Meja",
        ],
      },
      {
        heading: "Poster",
        links: ["Posters", "Foam Board", "PVC-Free Foam Board"],
      },
    ],
  },
  {
    label: "Label, Stickers & Packaging",
    image:
      "https://dhika4print.com/wp-content/uploads/2023/02/Thank-you-card-hand.png",
    ctaLabel: "Liat Semua Label & Sticker",
    columns: [
      {
        heading: "Specialty Label",
        links: [
          "Waterproof Label",
          "Label 17-an",
          "Label Lebaran",
          "Label Fragile",
          "Label Thank You",
        ],
      },
      {
        heading: "Packaging",
        links: [
          "Paperbowl",
          "Plastik Cup PET Datar",
          "Paper Cup",
          "Paper Lunch Box",
        ],
      },
      {
        heading: "Custom Sticker",
        links: [
          "Stiker A3",
          "Sticker Satuan",
          "Sticker Bulat",
          "Sticker Kotak",
        ],
      },
    ],
  },
  {
    label: "Home & Gifts",
    image:
      "https://dhika4print.com/wp-content/uploads/2023/02/merchandise-20-1.jpg",
    ctaLabel: "Liat Semua Home & Gifts",
    columns: [
      {
        heading: "Bestseller",
        links: [
          "Holiday Card",
          "Kalender Dinding",
          "Kalender Meja",
          "Custom Mug",
          "Photo Book",
        ],
      },
      {
        heading: "Wall Arts",
        links: [
          "Custom Canvas",
          "Poster Dinding",
          "Framed Print",
          "Photo Tiles",
        ],
      },
      {
        heading: "Personalized Gift",
        links: [
          "Custom Photo Book",
          "Notebook",
          "Totebag",
          "Akrilik LED Photo",
        ],
      },
    ],
  },
  {
    label: "Invitation & Stationery",
    image:
      "https://dhika4print.com/wp-content/uploads/2023/02/thank-you-card-test.png",
    ctaLabel: "Liat Semua Invitation",
    columns: [
      {
        heading: "Stationery",
        links: [
          "Thank You Cards",
          "Note Cards",
          "Custom Envelope",
          "Notebooks",
          "Letterhead",
        ],
      },
      {
        heading: "Persiapan Pernikahan",
        links: [
          "Kartu Undangan",
          "Buku Tamu",
          "Undangan Online",
          "Kartu Terima Kasih",
        ],
      },
      {
        heading: "Ulang Tahun",
        links: [
          "Backdrop",
          "Kartu Undangan",
          "Kartu Ucapan",
          "Sticker Birthday",
        ],
      },
    ],
  },
  {
    label: "Clothing & Bags",
    image:
      "https://dhika4print.com/wp-content/uploads/2023/02/drifit-dtex-foto-50-1024x1024.jpg",
    ctaLabel: "Liat Semua Clothing & Bags",
    columns: [
      { heading: "Shirt & Tops", links: ["T-Shirt", "Polo", "Kemeja"] },
      {
        heading: "Sport",
        links: ["Dri-Fit Polo", "Dri-Fit T-Shirt", "Hoodie", "Sweatshirts"],
      },
      {
        heading: "Outerwears",
        links: ["Jacket", "Sweatshirts", "Fleece & Knits", "Vest"],
      },
    ],
  },
  {
    label: "Promotional Products",
    image:
      "https://dhika4print.com/wp-content/uploads/2023/02/dhika-handbanner-20.jpg",
    ctaLabel: "Liat Semua Promotional Products",
    columns: [
      {
        heading: "Writing & Offices",
        links: ["Pens", "Pencils", "Notebooks", "Lanyards"],
      },
      {
        heading: "Drinkware",
        links: ["Mugs", "Water Bottles", "Travel Mugs", "Tumblers"],
      },
      {
        heading: "Lifestyle",
        links: ["Keychains", "Home & Tools", "Travel Essentials"],
      },
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
