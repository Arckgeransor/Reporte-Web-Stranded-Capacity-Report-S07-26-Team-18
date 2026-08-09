export type Taxon = {
  id: string;
  name: string;
  description: string;
  what: string;
  cost: string;
  why: string;
};

export type Layer = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  taxons: Taxon[];
};

export const layers: Layer[] = [
  {
    id: "facility",
    slug: "facility",
    name: "Capa Facility: energía y cooling",
    shortName: "Facility",
    taxons: [
      {
        id: "static-reserve",
        name: "Static Reserve",
        description:
          "Capacidad eléctrica contratada y pagada que se mantiene permanentemente reservada para un pico que rara vez ocurre.",
        what:
          "Transformadores y breakers nominales por encima de la carga máxima real; el facility nunca pasa de 60% de utilización.",
        cost:
          "Pago de demanda contratada sin retorno: estimado 12–18% de la factura eléctrica total del sitio.",
        why:
          "Los contratos se negocian contra el peor escenario de diseño, no contra la operación real del sitio.",
      },
      {
        id: "thermal-throttle-gap",
        name: "Thermal Throttle Gap",
        description:
          "Margen de temperatura que el sistema de cooling mantiene por debajo de lo necesario para proteger componentes que no lo requieren.",
        what:
          "Módulos de calor con setpoint agresivo; la sala entera se enfría para los servidores más sensibles.",
        cost:
          "Consumo energético de cooling 20–35% por encima del óptimo teórico para la carga real.",
        why:
          "Las políticas térmicas son globales y conservadoras: no distinguen entre workloads sensibles y tolerantes.",
      },
      {
        id: "cooling-deadband",
        name: "Cooling Deadband",
        description:
          "Zona muerta en la que el sistema de enfriamiento ni mantiene ni optimiza: enciende y apaga de forma ineficiente.",
        what:
          "Compresores y bombas oscilando entre on/off en horas de baja carga, con ciclos cortos y derroche.",
        cost:
          "Eficiencia del cooling (kW/T) degradada 8–15% en el rango medio de carga.",
        why:
          "El control por bandas discretas reacciona tarde y sobredimensiona cada ciclo frente a la rampa real de carga.",
      },
    ],
  },
  {
    id: "it",
    slug: "it",
    name: "Capa IT: infraestructura",
    shortName: "IT",
    taxons: [
      {
        id: "zombie-bare-metal",
        name: "Zombie Bare Metal",
        description:
          "Servidores físicos encendidos, con energía y red activas, que no ejecutan ningún workload desde hace semanas o meses.",
        what:
          "Hosts con CPU en idle, LED de poder encendido, cero conexiones activas y sin dueño claro.",
        cost:
          "Cada host zombie consume 40–60% de su potencia nominal sin producir nada medible.",
        why:
          "La orquestación marca la máquina como disponible para siempre; nadie audita qué ejecuta realmente.",
      },
      {
        id: "mothballed-blade",
        name: "Mothballed Blade",
        description:
          "Hardware provisionado y configurado para capacidad futura que nunca se activa por completo.",
        what:
          "Chassis de blades con celdas vacías o apagadas, memoria y NVMe instaladas pero inutilizadas.",
        cost:
          "Capital hundido en capacidad instalada que no contribuye al throughput y sigue consumiendo floor space y cooling.",
        why:
          "La planeación de capacidad compra por lotes para aprovechar descuentos; la adopción real llega más tarde o nunca.",
      },
      {
        id: "idle-pool",
        name: "Idle Pool",
        description:
          "Pools de cómputo mantenidos encendidos por políticas de disponibilidad que no distinguen entre reserva y uso real.",
        what:
          "Porcentaje constante del pool (10–20%) en estado 'ready' pero sin tráfico de producción ni batch.",
        cost:
          "Potencia consumida 24/7 multiplicada por el tamaño del pool, con disponibilidad que nadie usa.",
        why:
          "Los SLO de latencia se convierten en máquinas siempre encendidas en lugar de escalado elástico.",
      },
    ],
  },
  {
    id: "workload",
    slug: "workload",
    name: "Capa Workload: scheduling",
    shortName: "Workload",
    taxons: [
      {
        id: "scheduling-fragmentation",
        name: "Scheduling Fragmentation",
        description:
          "Fragmentación del espacio de scheduling: huecos pequeños que suman mucha capacidad pero no alcanzan para ninguna job.",
        what:
          "Matriz de nodos con agujeros de 1–2 GPUs dispersos que ningún workload puede usar como bloque contiguo.",
        cost:
          "Hasta 15% de la flota disponible que aparece 'libre' pero resulta inasignable para los trabajos reales.",
        why:
          "Los schedulers bin-packean por job individual sin consolidar espacio libre entre corridas.",
      },
      {
        id: "gang-quota-ghost",
        name: "Gang Quota Ghost",
        description:
          "Quotas y prioridades reservadas para equipos que no las ejecutan, generando capacidad fantasma.",
        what:
          "Colas de alta prioridad con ejecución baja; recursos retenidos por namespace que produce poco.",
        cost:
          "Recursos apartados por quota que otras cargas podrían aprovechar: pérdida neta de utilización agregada.",
        why:
          "Las quotas se asignan por organización y nunca se revierten cuando el equipo deja de consumir.",
      },
      {
        id: "tail-latency-reserve",
        name: "Tail-Latency Reserve",
        description:
          "Sobrereserva de capacidad para proteger los percentiles extremos de latencia (p99.9) en horas de cola.",
        what:
          "Flotas duplicadas para el pico de 30 minutos al día, ociosas el resto del tiempo.",
        cost:
          "Duplicación efectiva del costo de cómputo para proteger un percentil que ocurre una fracción del día.",
        why:
          "El miedo a violar SLOs impulsa aprovisionamiento contra cola, no contra la mediana real de uso.",
      },
    ],
  },
];

export const taxonsByLayer = new Map(
  layers.map((layer) => [layer.slug, layer]),
);

export function findTaxon(id: string): Taxon | undefined {
  for (const layer of layers) {
    const found = layer.taxons.find((taxon) => taxon.id === id);
    if (found) return found;
  }
  return undefined;
}
