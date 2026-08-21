import Link from "next/link";

export function SummaryDashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose mx-auto max-w-6xl px-6">
      <section className="border-b border-forest-100 py-20 sm:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold-700">
          PhysaFlow · Reporte público · 2026
        </p>
        <h1 className="mt-6 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-forest-900 sm:text-6xl">
          Reporte de Stranded Capacity 
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-forest-800/80">
          Un reporte web sobre la capacidad instalada que no llega a convertirse en cómputo productivo cuando Facility,
           IT y Workload no operan como un sistema.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/report/resumen#estructura-reporte"
            className="font-instrument text-center text-base font-semibold leading-6 text-forest-800 underline underline-offset-4 hover:text-forest-900"
          >
            Explorar el reporte ↓
          </Link>
        </div>
      </section>
      {children}
    </div>
  );
}
