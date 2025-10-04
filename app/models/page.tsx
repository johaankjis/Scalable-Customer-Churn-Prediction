import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ModelMetrics } from "@/components/model-metrics"
import { ConfusionMatrix } from "@/components/confusion-matrix"
import { RocCurve } from "@/components/roc-curve"
import { ModelComparison } from "@/components/model-comparison"
import { FeatureImportanceDetailed } from "@/components/feature-importance-detailed"
import { Badge } from "@/components/ui/badge"

export default function ModelsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-balance mb-2">Model Performance</h1>
              <p className="text-muted-foreground text-lg">ML model metrics and experiment tracking with MLflow</p>
            </div>
            <Badge variant="outline" className="text-sm">
              Production Model: GBT v2.3
            </Badge>
          </div>
        </div>

        <ModelMetrics />

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Confusion Matrix</CardTitle>
              <CardDescription>Model predictions vs actual outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <ConfusionMatrix />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>ROC Curve</CardTitle>
              <CardDescription>Receiver Operating Characteristic (AUC: 0.91)</CardDescription>
            </CardHeader>
            <CardContent>
              <RocCurve />
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Model Comparison</CardTitle>
            <CardDescription>Performance comparison across different model versions</CardDescription>
          </CardHeader>
          <CardContent>
            <ModelComparison />
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Feature Importance Analysis</CardTitle>
            <CardDescription>Detailed breakdown of features driving churn predictions</CardDescription>
          </CardHeader>
          <CardContent>
            <FeatureImportanceDetailed />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
