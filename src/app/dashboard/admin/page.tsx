"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';
import { FaUsers, FaBoxOpen, FaShoppingCart, FaChartLine } from 'react-icons/fa';

const data = [
  { name: 'Jan', sales: 4000, users: 2400 },
  { name: 'Feb', sales: 3000, users: 1398 },
  { name: 'Mar', sales: 2000, users: 9800 },
  { name: 'Apr', sales: 2780, users: 3908 },
];

export default function AdminDashboard() {
  return (
    <div className="p-8 space-y-10">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: "Total Revenue", val: "$45,231", icon: <FaChartLine />, color: "text-emerald-500" },
          { title: "Subscriptions", val: "+2350", icon: <FaUsers />, color: "text-blue-500" },
          { title: "Sales", val: "+12,234", icon: <FaShoppingCart />, color: "text-purple-500" },
          { title: "Inventory", val: "421", icon: <FaBoxOpen />, color: "text-orange-500" },
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-sm">
            <div className={`text-2xl mb-4 ${stat.color}`}>{stat.icon}</div>
            <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest">{stat.title}</p>
            <h3 className="text-2xl font-bold text-white mt-1">{stat.val}</h3>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] h-[400px]">
          <h4 className="text-white text-xs font-black uppercase tracking-widest mb-8">Sales Overview (Monthly)</h4>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#374151" fontSize={10} fontWeight="bold" />
              <Tooltip contentStyle={{ backgroundColor: '#0b0e14', border: 'none', borderRadius: '12px', fontSize: '10px' }} />
              <Bar dataKey="sales" fill="#10b981" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] h-[400px]">
          <h4 className="text-white text-xs font-black uppercase tracking-widest mb-8">User Growth Trend</h4>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
              <XAxis dataKey="name" stroke="#374151" fontSize={10} fontWeight="bold" />
              <Tooltip contentStyle={{ backgroundColor: '#0b0e14', border: 'none', borderRadius: '12px', fontSize: '10px' }} />
              <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={4} dot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Data Table Section */}
      <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 overflow-hidden">
        <div className="flex justify-between items-center mb-8">
          <h4 className="text-white text-xs font-black uppercase tracking-widest">Recent Transactions</h4>
          <div className="flex gap-4">
             <input type="text" placeholder="Search orders..." className="bg-black/40 border border-white/5 px-4 py-2 rounded-xl text-[10px] text-white outline-none focus:border-emerald-500/50" />
          </div>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="text-[10px] font-black text-gray-600 uppercase border-b border-white/5 pb-4">
              <th className="px-4 py-4">Transaction ID</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4">Date</th>
              <th className="px-4 py-4">Amount</th>
            </tr>
          </thead>
          <tbody className="text-[11px] text-gray-400">
            {[1, 2, 3].map((row) => (
              <tr key={row} className="border-b border-white/5 hover:bg-white/5 transition-all group">
                <td className="px-4 py-4 font-bold text-white">#TXN-8842{row}</td>
                <td className="px-4 py-4"><span className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-[9px] font-black">SUCCESS</span></td>
                <td className="px-4 py-4 uppercase">May 05, 2026</td>
                <td className="px-4 py-4 font-black text-white">$240.00</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination Placeholder */}
        <div className="mt-8 flex justify-end gap-2">
            <button className="px-4 py-2 bg-white/5 text-[10px] font-black text-gray-500 rounded-lg">Prev</button>
            <button className="px-4 py-2 bg-emerald-500 text-[10px] font-black text-white rounded-lg">Next</button>
        </div>
      </div>
    </div>
  );
}