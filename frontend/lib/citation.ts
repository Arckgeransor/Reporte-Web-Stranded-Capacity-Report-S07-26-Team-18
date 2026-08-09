export type CitationStyle = "apa" | "chicago" | "periodistic";

export type CitationRecord = {
  author: string;
  title: string;
  year: string;
  url: string;
  accessed: string;
  publisher: string;
};

export const reportCitation: CitationRecord = {
  author: "PhysaFlow",
  title:
    "The PhysaFlow Stranded Capacity Report: A Taxonomy of Wasted Compute, Power, and Scheduling",
  year: "2026",
  url: "https://physaflow.com/report",
  accessed: "July 31, 2026",
  publisher: "PhysaFlow Research",
};

export const citationStyles: Record<
  CitationStyle,
  { label: string; format: (c: CitationRecord) => string }
> = {
  apa: {
    label: "APA",
    format: (c) =>
      `${c.author}. (${c.year}). *${c.title}*. ${c.publisher}. ${c.url}`,
  },
  chicago: {
    label: "Chicago",
    format: (c) =>
      `${c.author}. ${c.year}. "${c.title}." ${c.publisher}. Accessed ${c.accessed}. ${c.url}.`,
  },
  periodistic: {
    label: "Periodístico",
    format: (c) =>
      `"${c.title}." ${c.publisher}, ${c.year}. ${c.url}.`,
  },
};

export function buildCitation(
  style: CitationStyle,
  record: CitationRecord = reportCitation,
): string {
  return citationStyles[style].format(record);
}
