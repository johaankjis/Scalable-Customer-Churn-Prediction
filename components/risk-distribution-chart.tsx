"use client"

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { risk: "Low (0-30%)", customers: 8234, color: "hsl(var(--chart-3))" },
  { risk: "Medium (30-60%)", customers: 3891, color: "hsl(var(--chart-4))" },
  { risk: "High (60-80%)", customers: 1923, color: "hsl(var(--chart-5))" },
  { risk: "Critical (80-100%)", customers: 924, color: "hsl(var(--destructive))" },
]

export function RiskDistributionChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis
          dataKey="risk"
          stroke="hsl(var(--muted-foreground))"
          fontSize={11}
          angle={-15}
          textAnchor="end"
          height={80}
        />
        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--popover))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "var(--radius)",
          }}
          labelStyle={{ color: "hsl(var(--foreground))" }}
        />
        <Bar dataKey="customers" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
