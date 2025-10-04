"use client"

export function ConfusionMatrix() {
  const matrix = [
    { actual: "No Churn", predicted: "No Churn", count: 8234, color: "bg-chart-3" },
    { actual: "No Churn", predicted: "Churn", count: 892, color: "bg-chart-5" },
    { actual: "Churn", predicted: "No Churn", count: 456, color: "bg-chart-5" },
    { actual: "Churn", predicted: "Churn", count: 3418, color: "bg-chart-3" },
  ]

  const total = matrix.reduce((sum, cell) => sum + cell.count, 0)

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-2">
        <div className="col-start-2 col-span-2 grid grid-cols-2 gap-2 text-center text-sm font-medium text-muted-foreground">
          <div>Predicted: No Churn</div>
          <div>Predicted: Churn</div>
        </div>

        <div className="row-start-2 flex items-center justify-end pr-4 text-sm font-medium text-muted-foreground">
          Actual: No Churn
        </div>
        <div className="row-start-2 col-start-2">
          <div className="bg-chart-3/20 border-2 border-chart-3 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold">{matrix[0].count.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground mt-1">True Negative</div>
            <div className="text-xs text-muted-foreground">{((matrix[0].count / total) * 100).toFixed(1)}%</div>
          </div>
        </div>
        <div className="row-start-2 col-start-3">
          <div className="bg-destructive/10 border-2 border-destructive/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold">{matrix[1].count.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground mt-1">False Positive</div>
            <div className="text-xs text-muted-foreground">{((matrix[1].count / total) * 100).toFixed(1)}%</div>
          </div>
        </div>

        <div className="row-start-3 flex items-center justify-end pr-4 text-sm font-medium text-muted-foreground">
          Actual: Churn
        </div>
        <div className="row-start-3 col-start-2">
          <div className="bg-destructive/10 border-2 border-destructive/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold">{matrix[2].count.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground mt-1">False Negative</div>
            <div className="text-xs text-muted-foreground">{((matrix[2].count / total) * 100).toFixed(1)}%</div>
          </div>
        </div>
        <div className="row-start-3 col-start-3">
          <div className="bg-chart-3/20 border-2 border-chart-3 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold">{matrix[3].count.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground mt-1">True Positive</div>
            <div className="text-xs text-muted-foreground">{((matrix[3].count / total) * 100).toFixed(1)}%</div>
          </div>
        </div>
      </div>
    </div>
  )
}
