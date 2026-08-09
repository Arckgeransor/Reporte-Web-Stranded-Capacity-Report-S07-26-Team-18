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

const chartData = reportData.costBreakdown.map((row) => ({
  name: row.label,
  "US$B": row.value,
}));

export function CostBreakdownChart() {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 8, right: 16, left: 8, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#dfece4" horizontal={false} />
          <XAxis
            type="number"
            unit="B"
            tick={{ fill: "#255143", fontSize: 12, fontFamily: "ui-monospace, monospace" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={180}
            tick={{ fill: "#255143", fontSize: 11, fontFamily: "ui-monospace, monospace" }}
            axisLine={{ stroke: "#c0d9cb" }}
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
          <Bar dataKey="US$B" fill="#c9a227" radius={[0, 2, 2, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
