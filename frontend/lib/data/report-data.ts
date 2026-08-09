export type LayerIndex = {
  layer: string;
  index: number;
  share: number;
};

export type CostItem = {
  label: string;
  value: number;
};

export type ReportData = {
  headlineIndex: number;
  totalStrandedMw: number;
  estimatedCostUsd: string;
  byLayer: LayerIndex[];
  costBreakdown: CostItem[];
  historical: { year: number; index: number }[];
};

export const reportData: ReportData = {
  headlineIndex: 38.4,
  totalStrandedMw: 4120,
  estimatedCostUsd: "$18.2B",
  byLayer: [
    { layer: "Facility", index: 46.2, share: 12.4 },
    { layer: "IT", index: 41.8, share: 16.7 },
    { layer: "Workload", index: 27.1, share: 9.3 },
  ],
  costBreakdown: [
    { label: "Energía pagada sin consumir", value: 7.4 },
    { label: "Cooling sobredimensionado", value: 4.1 },
    { label: "Hardware en idle", value: 3.9 },
    { label: "Scheduling fragmentado", value: 2.8 },
  ],
  historical: [
    { year: 2020, index: 31.2 },
    { year: 2021, index: 33.8 },
    { year: 2022, index: 35.1 },
    { year: 2023, index: 36.9 },
    { year: 2024, index: 37.7 },
    { year: 2025, index: 38.4 },
  ],
};

/**
 * Capa de datos del reporte.
 *
 * Hoy devuelve datos locales placeholder. Cuando exista un backend,
 * implementar `fetchReportDataFromApi()` y conmutar aquí:
 *
 *   export async function getReportData(): Promise<ReportData> {
 *     const base = process.env.NEXT_PUBLIC_API_BASE_URL;
 *     if (!base) return reportData;
 *     return fetchReportDataFromApi(base);
 *   }
 */
export async function getReportData(): Promise<ReportData> {
  return reportData;
}

export async function fetchReportDataFromApi(
  baseUrl: string,
): Promise<ReportData> {
  const res = await fetch(`${baseUrl}/report`, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error(`Report API responded ${res.status}`);
  return res.json();
}
