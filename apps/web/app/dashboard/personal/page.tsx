'use client';

import {
  Heart,
  Bell,
  MessageCircle,
  Bookmark,
} from 'lucide-react';

import { useEffect, useState } from 'react';

import StatsCard from '../components/cards/StatsCard';

import { getPersonalStats } from '../services/dashboard.service';

export default function PersonalDashboardPage() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      const data = await getPersonalStats();

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
          Dashboard
        </h1>

        <p className="mt-2 text-[#5F6368]">
          Welcome back to PARAPAIR.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatsCard
          title="Matches"
          value={stats.matches}
          icon={Heart}
        />

        <StatsCard
          title="Notifications"
          value={stats.notifications}
          icon={Bell}
        />

        <StatsCard
          title="Messages"
          value={stats.messages}
          icon={MessageCircle}
        />

        <StatsCard
          title="Saved"
          value={stats.saved}
          icon={Bookmark}
        />
      </div>
    </div>
  );
}