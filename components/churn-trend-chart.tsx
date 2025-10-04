"use client"

import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", churnRate: 22.1, predicted: 21.8 },
  { month: "Feb", churnRate: 21.5, predicted: 21.2 },
  { month: "Mar", churnRate: 20.8, predicted: 20.5 },
  { month: "Apr", churnRate: 19.9, predicted: 19.7 },
  { month: "May", churnRate: 19.2, predicted: 19.0 },
  { month: "Jun", churnRate: 18.7, predicted: 18.5 },
  { month: "Jul", churnRate: 18.5, predicted: 18.3 },
  { month: "Aug", churnRate: 18.9, predicted: 18.7 },
  { month: "Sep", churnRate: 18.4, predicted: 18.2 },
  { month: "Oct", churnRate: 18.2, predicted: 18.0 },
  { month: "Nov", churnRate: 17.8, predicted: 17.9 },
  { month: "Dec", churnRate: 18.2, predicted: 18.1 },
]

export function ChurnTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(value) => `${value}%`} />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--popover))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "var(--radius)",
          }}
          labelStyle={{ color: "hsl(var(--foreground))" }}
        />
        <Line
          type="monotone"
          dataKey="churnRate"
          stroke="hsl(var(--chart-1))"
          strokeWidth={2}
          name="Actual Churn Rate"
          dot={{ fill: "hsl(var(--chart-1))", r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="predicted"
          stroke="hsl(var(--chart-2))"
          strokeWidth={2}
          strokeDasharray="5 5"
          name="Predicted"
          dot={{ fill: "hsl(var(--chart-2))", r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
