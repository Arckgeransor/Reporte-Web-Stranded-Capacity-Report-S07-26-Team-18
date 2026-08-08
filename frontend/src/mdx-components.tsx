import type { MDXComponents } from "mdx/types";
import { TaxonCard } from "@/components/taxonomy/taxon-card";
import { CitationBlock } from "@/components/citation/citation-block";
import { DownloadableChart } from "@/components/charts/downloadable-chart";
import { StrandedCapacityIndexChart } from "@/components/charts/stranded-capacity-index";
import { CostBreakdownChart } from "@/components/charts/cost-breakdown";
import { Attribution } from "@/components/charts/attribution";

const components: MDXComponents = {
  TaxonCard,
  CitationBlock,
  DownloadableChart,
  StrandedCapacityIndexChart,
  CostBreakdownChart,
  Attribution,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
