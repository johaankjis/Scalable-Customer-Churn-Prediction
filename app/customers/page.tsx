import { Navigation } from "@/components/navigation"
import { CustomerTable } from "@/components/customer-table"
import { CustomerFilters } from "@/components/customer-filters"

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-balance mb-2">Customer Risk Management</h1>
          <p className="text-muted-foreground text-lg">Monitor and manage customers at risk of churning</p>
        </div>

        <CustomerFilters />
        <CustomerTable />
      </main>
    </div>
  )
}
