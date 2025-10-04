"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { feature: "Total Charges", importance: 0.234 },
  { feature: "Tenure Months", importance: 0.198 },
  { feature: "Monthly Charges", importance: 0.176 },
  { feature: "Contract Type", importance: 0.143 },
  { feature: "Internet Service", importance: 0.089 },
  { feature: "Payment Method", importance: 0.067 },
  { feature: "Tech Support", importance: 0.053 },
  { feature: "Online Security", importance: 0.04 },
]

export function TopFeaturesChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis
          type="number"
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
        />
        <YAxis type="category" dataKey="feature" stroke="hsl(var(--muted-foreground))" fontSize={12} width={120} />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--popover))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "var(--radius)",
          }}
          labelStyle={{ color: "hsl(var(--foreground))" }}
          formatter={(value: number) => `${(value * 100).toFixed(1)}%`}
        />
        <Bar dataKey="importance" fill="hsl(var(--chart-1))" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
