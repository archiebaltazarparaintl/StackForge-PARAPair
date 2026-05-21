'use client';

import DashboardSidebar from './components/sidebar/DashboardSidebar';

import DashboardNavbar from './components/navbar/DashboardNavbar';

import MobileBottomNav from './components/mobile/MobileBottomNav';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FFFDFC]">
      <div className="flex">
        {/* DESKTOP SIDEBAR */}
        <DashboardSidebar />

        {/* CONTENT */}
        <main className="flex-1 min-h-screen flex flex-col">
          <DashboardNavbar />

          <div className="flex-1 px-4 pb-28 pt-4 sm:px-6 lg:px-8 lg:pb-8">
            <div className="max-w-[1600px] mx-auto">
              {children}
            </div>
          </div>
        </main>
      </div>

      {/* MOBILE NAV */}
      <MobileBottomNav />
    </div>
  );
}