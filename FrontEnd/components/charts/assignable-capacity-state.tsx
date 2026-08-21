const states = [
  { label: "Asignada", value: 54, color: "#2f6450" },
  { label: "Reservada", value: 19, color: "#c9a227" },
  { label: "Fragmentada", value: 16, color: "#8fb6a0" },
  { label: "Inasignable", value: 11, color: "#d86f45" },
];

export function AssignableCapacityStateChart() {
  let offset = 0;

  return (
    <svg viewBox="0 0 720 320" role="img" aria-label="Estado de la capacidad asignable">
      <rect width="720" height="320" rx="4" fill="#ffffff" />
      <text x="24" y="34" fill="#153d32" fontFamily="Georgia, serif" fontSize="22" fontWeight="600">
        Estado de la capacidad asignable
      </text>
      <text x="24" y="58" fill="#46695d" fontFamily="ui-monospace, monospace" fontSize="12">
        Lectura operacional de un pool de cómputo antes del scheduling final
      </text>

      <g transform="translate(24 98)">
        <rect width="672" height="44" rx="3" fill="#f2f7f4" />
        {states.map((state) => {
          const width = (state.value / 100) * 672;
          const x = offset;
          offset += width;
          return (
            <g key={state.label}>
              <rect x={x} y="0" width={width} height="44" fill={state.color} />
              {width > 72 && (
                <text
                  x={x + 12}
                  y="28"
                  fill={state.label === "Reservada" ? "#153d32" : "#ffffff"}
                  fontFamily="ui-monospace, monospace"
                  fontSize="12"
                  fontWeight="700"
                >
                  {state.value}%
                </text>
              )}
            </g>
          );
        })}
      </g>

      <g transform="translate(24 180)">
        {states.map((state, index) => (
          <g key={state.label} transform={`translate(${index * 168} 0)`}>
            <rect width="144" height="82" rx="4" fill="#f7faf8" stroke="#c0d9cb" />
            <rect x="14" y="16" width="12" height="12" rx="2" fill={state.color} />
            <text x="34" y="27" fill="#255143" fontFamily="ui-monospace, monospace" fontSize="11">
              {state.label}
            </text>
            <text x="14" y="58" fill="#153d32" fontFamily="Georgia, serif" fontSize="26" fontWeight="600">
              {state.value}%
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
