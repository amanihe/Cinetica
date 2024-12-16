"use client";

import { Suspense } from "react";
import DiscoverContent from "@/app/dashboard/discover/components/DiscoverContent";

export default function DiscoverPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DiscoverContent />
    </Suspense>
  );
}
