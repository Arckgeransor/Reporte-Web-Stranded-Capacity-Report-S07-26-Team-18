import { ReportPagination } from "@/components/layout/report-pagination";

export default function ReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <article className="prose prose-report max-w-none lg:prose-lg">
        {children}
      </article>
      <ReportPagination />
    </div>
  );
}
