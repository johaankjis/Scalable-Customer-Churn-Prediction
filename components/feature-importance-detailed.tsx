"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

const features = [
  {
    name: "Total Charges",
    importance: 0.234,
    category: "Financial",
    impact: "High total charges indicate long-term customers less likely to churn",
    correlation: "negative",
    description: "Cumulative amount customer has paid over their lifetime",
  },
  {
    name: "Tenure Months",
    importance: 0.198,
    category: "Engagement",
    impact: "Longer tenure strongly correlates with customer loyalty",
    correlation: "negative",
    description: "Number of months customer has been with the company",
  },
  {
    name: "Monthly Charges",
    importance: 0.176,
    category: "Financial",
    impact: "Higher monthly charges increase churn probability",
    correlation: "positive",
    description: "Current monthly subscription amount",
  },
  {
    name: "Contract Type",
    importance: 0.143,
    category: "Contract",
    impact: "Month-to-month contracts have highest churn risk",
    correlation: "positive",
    description: "Contract duration: Month-to-Month, One Year, or Two Year",
  },
  {
    name: "Internet Service",
    importance: 0.089,
    category: "Service",
    impact: "Fiber optic users show higher churn rates",
    correlation: "positive",
    description: "Type of internet service: DSL, Fiber Optic, or None",
  },
  {
    name: "Payment Method",
    importance: 0.067,
    category: "Financial",
    impact: "Electronic check users more likely to churn",
    correlation: "positive",
    description: "How customer pays: Electronic check, Mailed check, Bank transfer, Credit card",
  },
  {
    name: "Tech Support",
    importance: 0.053,
    category: "Service",
    impact: "Customers without tech support more likely to churn",
    correlation: "negative",
    description: "Whether customer has tech support subscription",
  },
  {
    name: "Online Security",
    importance: 0.04,
    category: "Service",
    impact: "Online security subscription reduces churn risk",
    correlation: "negative",
    description: "Whether customer has online security service",
  },
]

function getCorrelationIcon(correlation: string) {
  switch (correlation) {
    case "positive":
      return <TrendingUp className="w-4 h-4 text-destructive" />
    case "negative":
      return <TrendingDown className="w-4 h-4 text-chart-3" />
    default:
      return <Minus className="w-4 h-4 text-muted-foreground" />
  }
}

function getCorrelationBadge(correlation: string) {
  switch (correlation) {
    case "positive":
      return (
        <Badge variant="destructive" className="text-xs">
          Increases Churn
        </Badge>
      )
    case "negative":
      return (
        <Badge variant="outline" className="text-xs border-chart-3 text-chart-3">
          Reduces Churn
        </Badge>
      )
    default:
      return (
        <Badge variant="outline" className="text-xs">
          Neutral
        </Badge>
      )
  }
}

export function FeatureImportanceDetailed() {
  return (
    <div className="space-y-4">
      {features.map((feature, index) => (
        <Card key={feature.name} className="p-4 hover:bg-muted/30 transition-colors">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-lg font-bold text-primary">#{index + 1}</span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{feature.name}</h3>
                    {getCorrelationIcon(feature.correlation)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{feature.description}</p>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className="text-2xl font-bold">{(feature.importance * 100).toFixed(1)}%</div>
                  {getCorrelationBadge(feature.correlation)}
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <Badge variant="secondary" className="text-xs">
                  {feature.category}
                </Badge>
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div
                    className="bg-chart-1 h-2 rounded-full transition-all"
                    style={{ width: `${feature.importance * 100}%` }}
                  />
                </div>
              </div>

              <div className="bg-muted/50 rounded-md p-3 border border-border">
                <p className="text-sm text-foreground">
                  <span className="font-medium">Impact: </span>
                  {feature.impact}
                </p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
