export type SectionKind = "front" | "layer" | "reference";

export type ReportSection = {
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  kind: SectionKind;
  order: number;
  group?: string;
  description: string;
};

export const reportSections: ReportSection[] = [
  {
    slug: "resumen",
    path: "01-resumen",
    title: "Resumen",
    shortTitle: "Resumen",
    kind: "front",
    order: 1,
    description:
      "Qué es la stranded capacity, por qué nadie la ha documentado y el objetivo de este reporte.",
  },
  {
    slug: "facility",
    path: "layers/10-facility",
    title: "Capa Facility: energía y cooling",
    shortTitle: "Facility",
    kind: "layer",
    order: 2,
    group: "La taxonomía",
    description:
      "Energía contratada sin consumir, cooling sobredimensionado y reservas de infraestructura física.",
  },
  {
    slug: "it",
    path: "layers/11-it",
    title: "Capa IT: infraestructura",
    shortTitle: "IT",
    kind: "layer",
    order: 3,
    group: "La taxonomía",
    description:
      "Servidores encendidos que no ejecutan trabajo útil y hardware provisionado sin uso.",
  },
  {
    slug: "workload",
    path: "layers/12-workload",
    title: "Capa Workload: scheduling",
    shortTitle: "Workload",
    kind: "layer",
    order: 4,
    group: "La taxonomía",
    description:
      "Planificación de cargas que deja ciclos sin asignar y reservas que nunca se consumen.",
  },
  {
    slug: "metodologia",
    path: "02-metodologia",
    title: "Metodología",
    shortTitle: "Metodología",
    kind: "front",
    order: 5,
    description:
      "Cómo se define, mide y clasifica la capacidad ociosa en tres capas del data center.",
  },
  {
    slug: "citas",
    path: "90-citas",
    title: "Citas",
    shortTitle: "Citas",
    kind: "reference",
    order: 6,
    description:
      "Cómo citar este reporte en formato académico y periodístico.",
  },
];

export const sectionsBySlug = new Map(
  reportSections.map((section) => [section.slug, section]),
);

export function getPrevNext(slug: string): {
  prev?: ReportSection;
  next?: ReportSection;
} {
  const index = reportSections.findIndex((section) => section.slug === slug);
  return {
    prev: reportSections[index - 1],
    next: reportSections[index + 1],
  };
}
