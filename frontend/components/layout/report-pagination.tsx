"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPrevNext } from "@/lib/report-sections";

export function ReportPagination() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop() ?? "";
  const { prev, next } = getPrevNext(slug);

  return (
    <nav
      aria-label="Navegación del reporte"
      className="mt-14 grid gap-4 border-t border-forest-100 pt-8 sm:grid-cols-2"
    >
      {prev ? (
        <Link
          href={`/report/${prev.slug}`}
          className="group flex items-center gap-3 rounded-sm border border-forest-200 p-4 transition-colors hover:border-forest-600"
        >
          <span
            aria-hidden="true"
            className="text-xl text-gold-700 transition-transform group-hover:-translate-x-1"
          >
            ←
          </span>
          <span className="flex flex-col">
            <span className="font-mono text-[10px] uppercase tracking-widest text-forest-800/50">
              Anterior
            </span>
            <span className="font-serif text-lg font-semibold text-forest-900">
              {prev.shortTitle}
            </span>
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/report/${next.slug}`}
          className="group flex items-center justify-end gap-3 rounded-sm border border-forest-200 p-4 text-right transition-colors hover:border-forest-600"
        >
          <span className="flex flex-col">
            <span className="font-mono text-[10px] uppercase tracking-widest text-forest-800/50">
              Siguiente
            </span>
            <span className="font-serif text-lg font-semibold text-forest-900">
              {next.shortTitle}
            </span>
          </span>
          <span
            aria-hidden="true"
            className="text-xl text-gold-700 transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
