"use client"

import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"

const data = [
  { fpr: 0, tpr: 0 },
  { fpr: 0.05, tpr: 0.42 },
  { fpr: 0.1, tpr: 0.68 },
  { fpr: 0.15, tpr: 0.79 },
  { fpr: 0.2, tpr: 0.85 },
  { fpr: 0.25, tpr: 0.89 },
  { fpr: 0.3, tpr: 0.92 },
  { fpr: 0.4, tpr: 0.95 },
  { fpr: 0.5, tpr: 0.97 },
  { fpr: 0.6, tpr: 0.98 },
  { fpr: 0.7, tpr: 0.99 },
  { fpr: 0.8, tpr: 0.995 },
  { fpr: 0.9, tpr: 0.998 },
  { fpr: 1, tpr: 1 },
]

export function RocCurve() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis
          dataKey="fpr"
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          label={{ value: "False Positive Rate", position: "insideBottom", offset: -5 }}
        />
        <YAxis
          dataKey="tpr"
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          label={{ value: "True Positive Rate", angle: -90, position: "insideLeft" }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--popover))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "var(--radius)",
          }}
          labelStyle={{ color: "hsl(var(--foreground))" }}
        />
        <ReferenceLine
          segment={[
            { x: 0, y: 0 },
            { x: 1, y: 1 },
          ]}
          stroke="hsl(var(--muted-foreground))"
          strokeDasharray="5 5"
        />
        <Line type="monotone" dataKey="tpr" stroke="hsl(var(--chart-1))" strokeWidth={3} dot={false} name="ROC Curve" />
      </LineChart>
    </ResponsiveContainer>
  )
}
