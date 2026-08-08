"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/report/resumen", label: "Resumen" },
  { href: "/report/facility", label: "Facility" },
  { href: "/report/it", label: "IT" },
  { href: "/report/workload", label: "Workload" },
  { href: "/report/metodologia", label: "Metodología" },
  { href: "/report/citas", label: "Citas" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-forest-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <div className="flex shrink-0 items-center gap-2.5">
          <span className="grid size-7 place-items-center rounded-full bg-forest-900 font-serif text-sm font-bold text-gold-500">
            P
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold tracking-tight text-forest-900">
              PhysaFlow
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-forest-800/60">
              Reporte de stranded capacity
            </span>
          </span>
        </div>
        <nav
          aria-label="Secciones del reporte"
          className="flex items-center gap-6 overflow-x-auto text-sm whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`border-b-2 pb-0.5 transition-colors hover:text-forest-900 ${
                  isActive
                    ? "border-[#00603A] text-[#00603A]"
                    : "border-transparent text-forest-800/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
