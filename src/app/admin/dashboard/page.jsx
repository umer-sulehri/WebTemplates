import React from 'react'
import StatsCards from "@/Components/dashboard/StatsCards";
import CompanyOverview from "@/Components/dashboard/CompanyOverview"; 
import Analytics from "@/Components/dashboard/Analytics";
import RecentActivity from "@/Components/dashboard/RecentActivity";
export default function page() {
  return (
    <div>
      <StatsCards />
      <CompanyOverview />
      <Analytics />
      <RecentActivity />
    </div>
  )
}
