import { marketingSteps } from "../constants";

export function HowToOrderSteps() {
  return (
    <section className="bg-ink py-16 text-white">
      <div className="container-x">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-brand">
          Alur Pemesanan
        </p>
        <h2 className="mb-12 text-2xl font-semibold tracking-tight sm:text-3xl">
          3 Langkah Mudah Order Cetak
        </h2>

        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/15 sm:block" />
          {marketingSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                <div className="mb-6 flex items-center gap-3 bg-ink pr-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md border border-white/20 font-mono text-sm text-brand">
                    {step.number}
                  </span>
                  <Icon className="h-5 w-5 text-white/60" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="max-w-xs text-sm leading-relaxed text-white/60">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
