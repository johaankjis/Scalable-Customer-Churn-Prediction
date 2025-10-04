import { Card, CardContent } from "@/components/ui/card"
import { TrendingDown, TrendingUp, Users, DollarSign } from "lucide-react"

const metrics = [
  {
    title: "Overall Churn Rate",
    value: "18.2%",
    change: "-2.4%",
    trend: "down",
    icon: TrendingDown,
  },
  {
    title: "High Risk Customers",
    value: "2,847",
    change: "+156",
    trend: "up",
    icon: Users,
  },
  {
    title: "Predicted Revenue at Risk",
    value: "$1.2M",
    change: "+$84K",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Model Accuracy",
    value: "87.3%",
    change: "+1.2%",
    trend: "up",
    icon: TrendingUp,
  },
]

export function MetricsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        const isPositive = metric.trend === "up"

        return (
          <Card key={metric.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                <Icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold">{metric.value}</p>
                <span
                  className={`text-sm font-medium ${
                    metric.title === "Overall Churn Rate"
                      ? isPositive
                        ? "text-destructive"
                        : "text-chart-3"
                      : isPositive
                        ? "text-chart-3"
                        : "text-destructive"
                  }`}
                >
                  {metric.change}
                </span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
