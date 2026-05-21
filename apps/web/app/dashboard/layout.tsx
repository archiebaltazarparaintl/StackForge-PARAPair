import DashboardSidebar from './components/sidebar/DashboardSidebar';
import DashboardNavbar from './components/navbar/DashboardNavbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FFFDFC] flex">
      <DashboardSidebar />

      <main className="flex-1 flex flex-col">
        <DashboardNavbar />

        <div className="flex-1 p-4 md:p-6 lg:p-8 max-w-[1600px] w-full mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}