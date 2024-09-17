"use client";

import { useState } from 'react';
import { StackedCards } from '@components/dashboard/Overview';
import Tasks from '@components/dashboard/TaskTable';

export default function TasksPage() {

  return (
    <div className="feedback-bg p-6 space-y-6">
      <Tasks />
    </div>
  );
}
