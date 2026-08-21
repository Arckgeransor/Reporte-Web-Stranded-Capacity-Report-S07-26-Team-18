import { ReportPagination } from "@/components/layout/report-pagination";

export default function ReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-[1485px] px-6 py-10 sm:px-8 lg:px-12">
      <article className="prose prose-report max-w-none lg:prose-lg">
        {children}
      </article>
      <ReportPagination />
    </div>
  );
}
