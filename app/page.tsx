import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MetricsGrid } from "@/components/metrics-grid"
import { ChurnTrendChart } from "@/components/churn-trend-chart"
import { RiskDistributionChart } from "@/components/risk-distribution-chart"
import { TopFeaturesChart } from "@/components/top-features-chart"
import { Navigation } from "@/components/navigation"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-balance mb-2">Customer Churn Prediction</h1>
          <p className="text-muted-foreground text-lg">
            Real-time analytics and ML-powered insights for customer retention
          </p>
        </div>

        <MetricsGrid />

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Churn Trend</CardTitle>
              <CardDescription>Monthly churn rate over the last 12 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ChurnTrendChart />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Risk Distribution</CardTitle>
              <CardDescription>Customer segmentation by churn probability</CardDescription>
            </CardHeader>
            <CardContent>
              <RiskDistributionChart />
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Top Predictive Features</CardTitle>
            <CardDescription>Feature importance from Gradient Boosted Trees model</CardDescription>
          </CardHeader>
          <CardContent>
            <TopFeaturesChart />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
