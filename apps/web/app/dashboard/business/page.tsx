'use client';

import {
  Briefcase,
  Users,
  Eye,
  DollarSign,
} from 'lucide-react';

import { useEffect, useState } from 'react';

import StatsCard from '../components/cards/StatsCard';

import { getBusinessStats } from '../services/dashboard.service';

export default function BusinessDashboardPage() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      const data = await getBusinessStats();

      setStats(data);
    };

    load();
  }, []);

  if (!stats) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-black tracking-tight text-[#171717]">
          Business Dashboard
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatsCard
          title="Listings"
          value={stats.listings}
          icon={Briefcase}
        />

        <StatsCard
          title="Applicants"
          value={stats.applicants}
          icon={Users}
        />

        <StatsCard
          title="Views"
          value={stats.views}
          icon={Eye}
        />

        <StatsCard
}
