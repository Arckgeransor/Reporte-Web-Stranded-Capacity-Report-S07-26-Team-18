import Link from "next/link";
import { reportSections } from "@/lib/report-sections";

const groups = [
  {
    label: "El reporte",
    sections: reportSections.filter(
      (s) => s.kind === "front" || s.kind === "reference",
    ),
  },
  {
    label: "La taxonomía",
    sections: reportSections.filter((s) => s.kind === "layer"),
  },
];

export function Footer() {
  return (
    <footer className="bg-[#003D2B]">
      <div className="mx-auto w-full max-w-[1176px] px-6 pb-[30px] pt-16">
        <div className="grid grid-cols-1 gap-x-16 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex max-w-xs flex-col gap-4">
            <p className="font-serif text-2xl font-semibold tracking-tight text-gold-500">
              PhysaFlow
            </p>
            <p className="font-instrument text-sm leading-[21px] text-white/75">
              Un documento público de referencia para entender la stranded
              capacity entre Facility, IT y Workload.
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.label} className="flex flex-col gap-5">
              <h2 className="font-plex text-xs font-medium uppercase leading-none tracking-[0.84px] text-white">
                {group.label}
              </h2>
              <ul className="flex flex-col gap-3">
                {group.sections.map((section) => (
                  <li key={section.slug}>
                    <Link
                      href={`/report/${section.slug}`}
                      className="font-instrument text-sm leading-[21px] text-white/75 transition-colors hover:text-gold-500"
                    >
                      {section.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[#AABCB3] bg-[#003D2B]">
        <div className="mx-auto w-full max-w-[1176px] px-6 py-4">
          <p className="font-plex text-[11px] font-medium uppercase leading-none tracking-[0.55px] text-[#AABCB3]">
            Reporte de Stranded Capacity · PhysaFlow
          </p>
        </div>
      </div>
    </footer>
  );
}
