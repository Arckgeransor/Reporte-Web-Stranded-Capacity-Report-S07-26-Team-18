<<<<<<< HEAD
# S07-26 - Team 18

## Stranded Capacity Calculator — PhysaFlow

An interactive tool that allows data center operators to estimate, in under 3 minutes, how much capacity they are wasting and how much it costs them annually.

**Vertical:** Product Design
**Sector:** AI / Machine Learning
**Program:** No Country - Simulation S07-26

## Context

PhysaFlow needs a tool that any data center operator can use to quickly estimate their stranded capacity and its annual financial impact. The calculator is designed to work as a viral tool: the operator gets their result, shares it with a colleague, and the colleague wants to know where they stand — so they calculate their own.

## Challenge

Design the complete calculator flow — from the moment the operator lands on the page to when they share their result — with a focus on speed, clarity, and virality. The calculator has three distinct moments:

- **Moment 1 — Input:** the operator enters facility size (MW), approximate utilization, and cooling type. Three fields, no friction.
- **Moment 2 — Basic result:** instant, no email required, visible to everyone. Shows estimated stranded capacity (% and MW) and estimated annual financial loss (dollar range).
- **Moment 3 — Depth:** operators who want more — comparing scenarios, seeing the breakdown by layer, downloading the PDF — provide their email. It's not a gate, it's an exchange.

The most important piece of the design is the interactive visualization of the three layers (facility, IT, workload) showing where capacity is lost between them. This visualization should become the iconic image associated with PhysaFlow.

## Expected Deliverables

- Complete flow in Figma: input → basic result → email capture → full result → share
- Interactive visualization of the three layers — detailed design with states and animations specified
- Design of the multi-scenario comparison view
- Design of the shareable result — the image or summary the operator sends to a colleague
- Documented components ready for handoff to development
- Forest-green and gold palette, typography, and PhysaFlow design system applied

## Success Criteria

A frontend developer can take the Figma deliverables and build the calculator without needing to make design decisions. The three-layer visualization is clear, memorable, and unlike anything currently existing in the industry.

## Team

_(to be added)_
=======
## Contexto
PhysaFlow es una empresa de infraestructura de IA enfocada en un problema específico de los data centers modernos: la capacidad pagada y encendida que no produce nada porque las capas físicas y operativas del facility no se coordinan entre sí. A ese desperdicio se lo llama "stranded capacity" y nadie lo ha documentado de forma exhaustiva y pública todavía.
PhysaFlow quiere ser la voz más autorizada del mundo sobre este problema. El primer paso es un reporte público firmado por su fundador que defina el vocabulario de la industria.

## El desafío
Diseñar y desarrollar el sitio web del reporte público de PhysaFlow — una experiencia de lectura que combine autoridad académica con diseño moderno. El reporte presenta una taxonomía nombrada de las formas que toma la stranded capacity en tres capas de un data center: facility (energía y cooling), IT (infraestructura) y workload (scheduling).
El sitio no es un blog ni una landing page — es un documento de referencia de la industria que tiene que verse y sentirse como tal.

## Entregables esperados
- Sitio web navegable con estructura completa del reporte: introducción, taxonomía por capas, metodología y sección de citas
- Cada sección de la taxonomía con nombre distintivo y descripción en lenguaje de operador (qué se ve, qué cuesta, por qué ocurre)
- Gráficos y visualizaciones descargables con atribución "Source: PhysaFlow Stranded Capacity Index"
- Bloque "cómo citar este reporte" con formato académico y periodístico
- Diseño responsivo con paleta forest-green y gold de PhysaFlow
- Contenido placeholder estructurado — no se requiere investigación real, sí estructura y jerarquía visual correcta

## Stack sugerido
Next.js, Tailwind CSS, MDX para contenido del reporte.

## Criterio de éxito
Un stakeholder de PhysaFlow puede abrir el sitio, navegar el reporte completo y entender la taxonomía de stranded capacity sin necesitar explicación adicional. El diseño transmite autoridad — no parece un proyecto universitario.
>>>>>>> origin/develop
