import { Card, CardContent } from "@/components/ui/card"
import { Target, TrendingUp, Zap, Award } from "lucide-react"

const metrics = [
  {
    title: "Accuracy",
    value: "87.3%",
    description: "Overall prediction accuracy",
    icon: Target,
  },
  {
    title: "Precision",
    value: "84.6%",
    description: "True positive rate",
    icon: TrendingUp,
  },
  {
    title: "Recall",
    value: "89.1%",
    description: "Sensitivity to churn",
    icon: Zap,
  },
  {
    title: "F1 Score",
    value: "86.8%",
    description: "Harmonic mean",
    icon: Award,
  },
]

export function ModelMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon

        return (
          <Card key={metric.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <p className="text-3xl font-bold mb-1">{metric.value}</p>
              <p className="text-sm font-medium text-foreground mb-1">{metric.title}</p>
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
