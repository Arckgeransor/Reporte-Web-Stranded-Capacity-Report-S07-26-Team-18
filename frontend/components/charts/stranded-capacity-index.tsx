"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { reportData } from "@/lib/data/report-data";

const chartData = reportData.byLayer.map((row) => ({
  name: row.layer,
  "Índice SC (%)": row.index,
}));

export function StrandedCapacityIndexChart() {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#dfece4" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fill: "#255143", fontSize: 12, fontFamily: "ui-monospace, monospace" }}
            axisLine={{ stroke: "#c0d9cb" }}
            tickLine={false}
          />
          <YAxis
            unit="%"
            tick={{ fill: "#255143", fontSize: 12, fontFamily: "ui-monospace, monospace" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: "#f2f7f4" }}
            contentStyle={{
              border: "1px solid #c0d9cb",
              borderRadius: 4,
              fontFamily: "ui-monospace, monospace",
              fontSize: 12,
            }}
          />
          <Bar dataKey="Índice SC (%)" fill="#2f6450" radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
