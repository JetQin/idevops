"use client";

import { useState } from 'react';
import Issues from '@components/dashboard/IssueTable';

export default function IssuePage() {

  return (
    <div className="feedback-bg p-6 space-y-6">
      <Issues />
    </div>
  );
}
