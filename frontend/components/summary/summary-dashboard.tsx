import Link from "next/link";
import { reportSections } from "@/lib/report-sections";
import { reportData } from "@/lib/data/report-data";

const groups: { label: string; slug: string }[] = [
  { label: "El reporte", slug: "resumen" },
  { label: "La taxonomía", slug: "facility" },
  { label: "Documento", slug: "citas" },
];

export function SummaryDashboard() {
  const stats = [
    { value: `${reportData.headlineIndex}%`, label: "Índice SC agregado" },
    { value: `${reportData.totalStrandedMw} MW`, label: "Capacidad stranded" },
    { value: reportData.estimatedCostUsd, label: "Costo anual estimado" },
  ];

  return (
    <div className="not-prose mx-auto max-w-6xl px-6">
      <section className="border-b border-forest-100 py-20 sm:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold-700">
          PhysaFlow · Reporte público · 2026
        </p>
        <h1 className="mt-6 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-forest-900 sm:text-6xl">
          The Stranded Capacity Report
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-forest-800/80">
          Una taxonomía nombrada de la capacidad pagada y encendida que no
          produce nada: en facility, IT y workload. Firmado por el fundador de
          PhysaFlow.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/report/resumen"
            className="rounded-sm bg-forest-900 px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-gold-500 transition-colors hover:bg-forest-800"
          >
            Leer el reporte
          </Link>
          <Link
            href="/report/citas"
            className="rounded-sm border border-forest-300 px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-forest-900 transition-colors hover:border-forest-900"
          >
            Cómo citar
          </Link>
        </div>

        <dl className="mt-16 grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-gold-500 pl-4">
              <dt className="text-sm text-forest-800/70">{stat.label}</dt>
              <dd className="font-serif text-3xl font-semibold text-forest-900">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mb-10 flex items-baseline justify-between gap-4">
          <h2 className="font-serif text-3xl font-semibold text-forest-900">
            Estructura del reporte
          </h2>
          <p className="font-mono text-xs uppercase tracking-widest text-forest-800/50">
            {reportSections.length} secciones
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {groups.map((group) => {
            const section = reportSections.find((s) => s.slug === group.slug);
            if (!section) return null;
            return (
              <Link
                key={group.label}
                href={`/report/${group.slug}`}
                className="group flex flex-col justify-between rounded-sm border border-forest-200 bg-white p-6 transition-colors hover:border-forest-600"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-gold-700">
                    {group.label}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-forest-900 group-hover:underline">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-forest-800/80">
                    {section.description}
                  </p>
                </div>
                <p className="mt-6 font-mono text-xs uppercase tracking-widest text-forest-800/60">
                  Leer →
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
