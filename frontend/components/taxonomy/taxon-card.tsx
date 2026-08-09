import { findTaxon } from "@/lib/taxonomy";

type TaxonCardProps = {
  id: string;
};

export function TaxonCard({ id }: TaxonCardProps) {
  const taxon = findTaxon(id);

  if (!taxon) {
    return <p>Taxón no encontrado: {id}</p>;
  }

  const rows = [
    { label: "Qué se ve", value: taxon.what },
    { label: "Qué cuesta", value: taxon.cost },
    { label: "Por qué ocurre", value: taxon.why },
  ];

  return (
    <section className="my-8 rounded-sm border border-forest-200 bg-forest-50/40">
      <header className="flex items-baseline justify-between gap-4 border-b border-forest-200 px-6 py-4">
        <h3 className="m-0 font-serif text-2xl font-semibold text-forest-900">
          {taxon.name}
        </h3>
        <span className="font-mono text-xs uppercase tracking-widest text-gold-700">
          {taxon.id.replaceAll("-", " ")}
        </span>
      </header>
      <p className="px-6 pt-4 text-forest-800">{taxon.description}</p>
      <dl className="grid gap-4 px-6 py-4 sm:grid-cols-3">
        {rows.map((row) => (
          <div key={row.label}>
            <dt className="mb-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-gold-700">
              {row.label}
            </dt>
            <dd className="m-0 text-sm leading-relaxed text-forest-800/90">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
