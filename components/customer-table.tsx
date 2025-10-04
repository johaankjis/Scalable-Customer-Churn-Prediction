"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Mail, Phone } from "lucide-react"

// Simulated customer data
const customers = [
  {
    id: "C001234",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    tenure: 8,
    monthlyCharges: 89.99,
    totalCharges: 719.92,
    contract: "Month-to-Month",
    churnProbability: 0.87,
    riskLevel: "critical",
  },
  {
    id: "C001235",
    name: "Michael Chen",
    email: "m.chen@email.com",
    tenure: 14,
    monthlyCharges: 104.5,
    totalCharges: 1463.0,
    contract: "Month-to-Month",
    churnProbability: 0.82,
    riskLevel: "critical",
  },
  {
    id: "C001236",
    name: "Emily Rodriguez",
    email: "emily.r@email.com",
    tenure: 22,
    monthlyCharges: 79.99,
    totalCharges: 1759.78,
    contract: "One Year",
    churnProbability: 0.71,
    riskLevel: "high",
  },
  {
    id: "C001237",
    name: "David Kim",
    email: "d.kim@email.com",
    tenure: 6,
    monthlyCharges: 94.99,
    totalCharges: 569.94,
    contract: "Month-to-Month",
    churnProbability: 0.68,
    riskLevel: "high",
  },
  {
    id: "C001238",
    name: "Jessica Martinez",
    email: "jess.m@email.com",
    tenure: 31,
    monthlyCharges: 69.99,
    totalCharges: 2169.69,
    contract: "Two Year",
    churnProbability: 0.45,
    riskLevel: "medium",
  },
  {
    id: "C001239",
    name: "Robert Taylor",
    email: "r.taylor@email.com",
    tenure: 18,
    monthlyCharges: 84.99,
    totalCharges: 1529.82,
    contract: "One Year",
    churnProbability: 0.52,
    riskLevel: "medium",
  },
  {
    id: "C001240",
    name: "Amanda White",
    email: "a.white@email.com",
    tenure: 42,
    monthlyCharges: 74.99,
    totalCharges: 3149.58,
    contract: "Two Year",
    churnProbability: 0.23,
    riskLevel: "low",
  },
  {
    id: "C001241",
    name: "James Anderson",
    email: "j.anderson@email.com",
    tenure: 55,
    monthlyCharges: 89.99,
    totalCharges: 4949.45,
    contract: "Two Year",
    churnProbability: 0.18,
    riskLevel: "low",
  },
]

function getRiskBadgeVariant(riskLevel: string) {
  switch (riskLevel) {
    case "critical":
      return "destructive"
    case "high":
      return "default"
    case "medium":
      return "secondary"
    case "low":
      return "outline"
    default:
      return "outline"
  }
}

function getRiskLabel(probability: number) {
  if (probability >= 0.8) return "Critical"
  if (probability >= 0.6) return "High"
  if (probability >= 0.3) return "Medium"
  return "Low"
}

export function CustomerTable() {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Customer</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Tenure</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Monthly</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Total</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Contract</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Churn Risk</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Risk Level</th>
              <th className="text-right p-4 text-sm font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                <td className="p-4">
                  <div>
                    <div className="font-medium">{customer.name}</div>
                    <div className="text-sm text-muted-foreground">{customer.email}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{customer.id}</div>
                  </div>
                </td>
                <td className="p-4 text-sm">{customer.tenure} months</td>
                <td className="p-4 text-sm">${customer.monthlyCharges.toFixed(2)}</td>
                <td className="p-4 text-sm">${customer.totalCharges.toFixed(2)}</td>
                <td className="p-4 text-sm">{customer.contract}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-muted rounded-full h-2 max-w-[100px]">
                      <div
                        className="bg-chart-1 h-2 rounded-full transition-all"
                        style={{ width: `${customer.churnProbability * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium">{(customer.churnProbability * 100).toFixed(0)}%</span>
                  </div>
                </td>
                <td className="p-4">
                  <Badge variant={getRiskBadgeVariant(customer.riskLevel)}>
                    {getRiskLabel(customer.churnProbability)}
                  </Badge>
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
