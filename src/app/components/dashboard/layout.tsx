import Navbar from "../Navbar";
import Sidebar from "./Sidebar";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#05070a]">
      {/* Sidebar - Fixed on the left */}
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Navbar - Sticky on top */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}