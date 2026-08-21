const zones = [
  { label: "Zona A", interactive: 44, batch: 28, reserved: 18 },
  { label: "Zona B", interactive: 30, batch: 42, reserved: 12 },
  { label: "Zona C", interactive: 20, batch: 24, reserved: 34 },
  { label: "Zona D", interactive: 34, batch: 18, reserved: 26 },
];

const series = [
  { key: "interactive", label: "Interactiva", color: "#2f6450" },
  { key: "batch", label: "Batch", color: "#c9a227" },
  { key: "reserved", label: "Reservada", color: "#8fb6a0" },
] as const;

export function DemandTowersByZoneChart() {
  return (
    <svg viewBox="0 0 720 360" role="img" aria-label="Torres de demanda divididas por zonas">
      <rect width="720" height="360" rx="4" fill="#ffffff" />
      <text x="24" y="34" fill="#153d32" fontFamily="Georgia, serif" fontSize="22" fontWeight="600">
        Torres de demanda por zona
      </text>
      <text x="24" y="58" fill="#46695d" fontFamily="ui-monospace, monospace" fontSize="12">
        Distribución relativa de presión de workload por dominio operativo
      </text>

      <g transform="translate(70 82)">
        {[0, 25, 50, 75, 100].map((tick) => (
          <g key={tick} transform={`translate(0 ${220 - tick * 2.2})`}>
            <line x1="0" x2="570" stroke="#dfece4" strokeDasharray="3 3" />
            <text x="-34" y="4" fill="#46695d" fontFamily="ui-monospace, monospace" fontSize="10">
              {tick}
            </text>
          </g>
        ))}

        {zones.map((zone, zoneIndex) => {
          let y = 220;
          return (
            <g key={zone.label} transform={`translate(${zoneIndex * 138 + 24} 0)`}>
              {series.map((item) => {
                const value = zone[item.key];
                const height = value * 2.2;
                y -= height;
                return (
                  <rect
                    key={item.key}
                    x="0"
                    y={y}
                    width="72"
                    height={height}
                    fill={item.color}
                    rx="2"
                  />
                );
              })}
              <text x="36" y="248" textAnchor="middle" fill="#255143" fontFamily="ui-monospace, monospace" fontSize="12">
                {zone.label}
              </text>
            </g>
          );
        })}
      </g>

      <g transform="translate(94 328)">
        {series.map((item, index) => (
          <g key={item.key} transform={`translate(${index * 170} 0)`}>
            <rect width="12" height="12" rx="2" fill={item.color} />
            <text x="20" y="11" fill="#255143" fontFamily="ui-monospace, monospace" fontSize="11">
              {item.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
