"use client"

import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

const models = [
  {
    name: "Gradient Boosted Trees v2.3",
    type: "GBT",
    accuracy: 87.3,
    precision: 84.6,
    recall: 89.1,
    f1Score: 86.8,
    auc: 91.2,
    trainingTime: "12m 34s",
    isProduction: true,
  },
  {
    name: "Gradient Boosted Trees v2.2",
    type: "GBT",
    accuracy: 86.8,
    precision: 83.9,
    recall: 88.7,
    f1Score: 86.2,
    auc: 90.5,
    trainingTime: "11m 52s",
    isProduction: false,
  },
  {
    name: "Logistic Regression v1.5",
    type: "LR",
    accuracy: 79.4,
    precision: 76.2,
    recall: 81.3,
    f1Score: 78.7,
    auc: 84.6,
    trainingTime: "3m 18s",
    isProduction: false,
  },
  {
    name: "Random Forest v1.8",
    type: "RF",
    accuracy: 85.1,
    precision: 82.4,
    recall: 86.9,
    f1Score: 84.6,
    auc: 89.3,
    trainingTime: "8m 45s",
    isProduction: false,
  },
]

export function ModelComparison() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left p-4 text-sm font-medium text-muted-foreground">Model</th>
            <th className="text-center p-4 text-sm font-medium text-muted-foreground">Accuracy</th>
            <th className="text-center p-4 text-sm font-medium text-muted-foreground">Precision</th>
            <th className="text-center p-4 text-sm font-medium text-muted-foreground">Recall</th>
            <th className="text-center p-4 text-sm font-medium text-muted-foreground">F1 Score</th>
            <th className="text-center p-4 text-sm font-medium text-muted-foreground">AUC</th>
            <th className="text-center p-4 text-sm font-medium text-muted-foreground">Training Time</th>
            <th className="text-center p-4 text-sm font-medium text-muted-foreground">Status</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model) => (
            <tr key={model.name} className="border-b border-border hover:bg-muted/50 transition-colors">
              <td className="p-4">
                <div className="flex items-center gap-2">
                  {model.isProduction && <CheckCircle2 className="w-4 h-4 text-chart-3" />}
                  <div>
                    <div className="font-medium">{model.name}</div>
                    <div className="text-xs text-muted-foreground">{model.type}</div>
                  </div>
                </div>
              </td>
              <td className="p-4 text-center font-medium">{model.accuracy}%</td>
              <td className="p-4 text-center font-medium">{model.precision}%</td>
              <td className="p-4 text-center font-medium">{model.recall}%</td>
              <td className="p-4 text-center font-medium">{model.f1Score}%</td>
              <td className="p-4 text-center font-medium">{model.auc}%</td>
              <td className="p-4 text-center text-sm text-muted-foreground">{model.trainingTime}</td>
              <td className="p-4 text-center">
                {model.isProduction ? (
                  <Badge variant="default">Production</Badge>
                ) : (
                  <Badge variant="outline">Experiment</Badge>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
