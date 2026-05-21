'use client';

import {
  Users,
  Briefcase,
  Flag,
  Activity,
} from 'lucide-react';

import { useEffect, useState } from 'react';

import StatsCard from '../../packages/ui/cards/StatsCard';

import { getAdminStats } from '../services/dashboard.service';

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      const data = await getAdminStats();

      setStats(data);
    };

    load();
  }, []);

  if (!stats) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatsCard
            title="Users"
            value={stats.users}
            icon={Users}
        />

        <StatsCard
            title="Businesses"
            value={stats.businesses}
            icon={Briefcase}
        />

        <StatsCard
            title="Reports"
            value={stats.reports}
            icon={Flag}
        />

        <StatsCard
            title="Activity"
            value={stats.activity}
            icon={Activity}
        />
        </div>
  );
}
