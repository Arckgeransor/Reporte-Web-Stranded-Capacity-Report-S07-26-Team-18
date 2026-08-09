"use client";

import { useState } from "react";
import { buildCitation, citationStyles, type CitationStyle } from "@/lib/citation";

const styles: CitationStyle[] = ["apa", "chicago", "periodistic"];

export function CitationBlock() {
  const [style, setStyle] = useState<CitationStyle>("apa");
  const [copied, setCopied] = useState(false);

  const citation = buildCitation(style);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="my-10 rounded-sm border border-forest-200 bg-forest-50/60 p-6">
      <h2 className="mt-0 font-serif text-2xl font-semibold text-forest-900">
        Cómo citar este reporte
      </h2>
      <p className="text-sm text-forest-800/80">
        Selecciona el formato y copia la cita directamente.
      </p>

      <div className="mt-4 flex gap-2" role="tablist" aria-label="Formato de cita">
        {styles.map((s) => (
          <button
            key={s}
            type="button"
            role="tab"
            aria-selected={style === s}
            onClick={() => setStyle(s)}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
              style === s
                ? "border-forest-900 bg-forest-900 text-gold-500"
                : "border-forest-300 text-forest-800/70 hover:border-forest-600"
            }`}
          >
            {citationStyles[s].label}
          </button>
        ))}
      </div>

      <blockquote className="mt-4 border-l-4 border-gold-500 bg-white p-4 font-serif text-sm leading-relaxed text-forest-900">
        {citation}
      </blockquote>

      <button
        type="button"
        onClick={handleCopy}
        className="mt-4 rounded-sm bg-gold-500 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-widest text-forest-950 transition-colors hover:bg-gold-400"
      >
        {copied ? "Copiado ✓" : "Copiar cita"}
      </button>
    </section>
  );
}
