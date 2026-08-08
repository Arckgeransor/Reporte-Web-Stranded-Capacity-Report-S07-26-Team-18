"use client";

import { useRef, type ReactNode } from "react";
import { Attribution } from "./attribution";

type DownloadableChartProps = {
  title: string;
  filename: string;
  children: ReactNode;
};

const ATTRIBUTION = "Source: PhysaFlow Stranded Capacity Index";

export function DownloadableChart({
  title,
  filename,
  children,
}: DownloadableChartProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    const svg = wrapperRef.current?.querySelector("svg");
    if (!svg) return;

    const clone = svg.cloneNode(true) as SVGSVGElement;

    const viewBox = clone.viewBox?.baseVal;
    const width = viewBox ? viewBox.width : Number(clone.getAttribute("width")) || 600;
    const height = viewBox ? viewBox.height : Number(clone.getAttribute("height")) || 300;

    clone.setAttribute("width", String(width));
    clone.setAttribute("height", String(height + 28));

    const namespace = "http://www.w3.org/2000/svg";
    const text = document.createElementNS(namespace, "text");
    text.setAttribute("x", "8");
    text.setAttribute("y", String(height + 18));
    text.setAttribute("fill", "#255143");
    text.setAttribute("font-family", "ui-monospace, monospace");
    text.setAttribute("font-size", "11");
    text.textContent = ATTRIBUTION;
    clone.appendChild(text);

    const xml = new XMLSerializer().serializeToString(clone);
    const blob = new Blob([xml], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${filename}.svg`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <figure className="my-10 rounded-sm border border-forest-200 bg-white p-4">
      <figcaption className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="font-serif text-sm font-medium text-forest-900">
          {title}
        </span>
        <button
          type="button"
          onClick={handleDownload}
          className="rounded-sm border border-forest-900 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-forest-900 transition-colors hover:bg-forest-900 hover:text-gold-500"
        >
          Descargar SVG
        </button>
      </figcaption>
      <div ref={wrapperRef}>{children}</div>
      <Attribution />
    </figure>
  );
}
