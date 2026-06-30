"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const heroSlides = [
  {
    id: 1,
    title: (
      <>
        {" "}
        <span className="text-brand font-bold">PRINTING</span> THAT MAKES AN
        IMPACT{" "}
      </>
    ),
    description:
      "Dari kartu nama hingga media promosi skala besar, kami membantu bisnis menghadirkan kualitas cetak yang mampu menarik perhatian dan meninggalkan kesan profesional.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    layout: "text-left",
  },
  {
    id: 2,
    title: (
      <>
        {" "}
        <span className="text-blue-600 font-bold">MARKETING</span> THAT GETS
        NOTICED{" "}
      </>
    ),
    description:
      "Promosi yang efektif dimulai dari visual yang tepat. Kami membantu bisnis meningkatkan visibilitas melalui berbagai media pemasaran yang menarik dan profesional.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    layout: "text-left",
  },
  {
    id: 3,
    title: (
      <>
        {" "}
        <span className="text-purple-600 font-bold">BRANDING</span> THAT BUILDS
        TRUST{" "}
      </>
    ),
    description:
      "Bangun identitas bisnis yang kuat dan mudah diingat melalui solusi branding yang konsisten, profesional, dan relevan dengan target pasar Anda.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    layout: "text-right",
  },
];

export default function Hero() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // Inisialisasi Plugin Autoplay menggunakan useRef
  // delay: 5000 artinya slide akan berpindah otomatis setiap 5 detik
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="w-full bg-[#f4f5f7] pt-8 pb-12 relative overflow-hidden">
      <div className="container-x relative">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{ loop: true }}
          // Masukkan plugin ke dalam Carousel
          plugins={[plugin.current]}
          // Hentikan auto-slide saat mouse diarahkan ke banner, dan mulai lagi saat mouse pergi
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => {
              const isActive = current === index;

              return (
                <CarouselItem key={slide.id}>
                  <div
                    className={`flex flex-col-reverse md:flex-row items-center justify-between min-h-[400px] gap-8 px-4 md:px-12 ${
                      slide.layout === "text-right" ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 flex flex-col items-start text-left z-10 space-y-6">
                      <h1
                        className={`text-4xl md:text-5xl lg:text-6xl font-light text-slate-800 tracking-tight transform transition-all duration-[800ms] ease-out ${
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-12"
                        }`}
                      >
                        {slide.title}
                      </h1>

                      <div
                        className={`text-slate-500 text-sm md:text-base leading-relaxed whitespace-pre-line max-w-lg transform transition-all duration-[800ms] delay-200 ease-out ${
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-12"
                        }`}
                      >
                        {slide.description}
                      </div>
                    </div>

                    {/* Image Content */}
                    <div
                      className={`w-full md:w-1/2 flex justify-center relative h-[300px] md:h-[450px] transform transition-all duration-[1000ms] delay-300 ease-out ${
                        isActive
                          ? "opacity-100 scale-100 translate-x-0"
                          : "opacity-0 scale-90 translate-x-8"
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt="Hero Image"
                        className="object-contain w-full h-full drop-shadow-xl"
                      />
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        {/* Custom Dots Pagination */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-brand w-3"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
