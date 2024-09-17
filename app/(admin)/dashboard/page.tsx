"use client";

import { useState } from 'react';
import { StackedCards } from '@components/dashboard/Overview';
import Orders from '@components/dashboard/OrderTable';
import { TwoAreasChart } from '@components/dashboard/AreaCharts';
import { SimpleBarChart } from '@components/dashboard//BarChart';

export default function DashboardPage() {

  return (
    <div className="p-6 space-y-6">
      <StackedCards />
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <TwoAreasChart />
        <SimpleBarChart />
      </div>
      <Orders />
    </div>
  );
}
