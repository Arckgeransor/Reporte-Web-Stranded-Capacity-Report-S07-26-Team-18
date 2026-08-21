import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { reportSections, sectionsBySlug } from "@/lib/report-sections";
import { SummaryDashboard } from "@/components/summary/summary-dashboard";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const section = sectionsBySlug.get(slug);
  if (!section) return {};
  return {
    title: section.title,
    description: section.description,
  };
}

export default async function ReportPage({ params }: PageProps) {
  const { slug } = await params;
  const section = sectionsBySlug.get(slug);
  if (!section) return notFound();

  const { default: Content } = await import(
    `@/content/report/${section.path}.mdx`
  );

 return (
  <>
    {section.slug === "resumen" ? (
      <SummaryDashboard>
        <Content />
      </SummaryDashboard>
    ) : (
      <Content />
    )}
  </>
);
}

export function generateStaticParams() {
  return reportSections.map((section) => ({ slug: section.slug }));
}

export const dynamicParams = false;
