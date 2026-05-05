"use client";

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const data = [
  { name: 'Week 1', sales: 4000, users: 2400 },
  { name: 'Week 2', sales: 3000, users: 1398 },
  { name: 'Week 3', sales: 5000, users: 3800 },
  { name: 'Week 4', sales: 4780, users: 3908 },
];

export default function Overview() {
  return (
    <div className="p-8 lg:p-12 space-y-10">
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Total Sales", value: "৳ 45,200", trend: "+12%" },
          { title: "Active Users", value: "1,240", trend: "+5%" },
          { title: "New Orders", value: "84", trend: "-2%" },
          { title: "Pending Task", value: "05", trend: "Stable" },
        ].map((card, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem]">
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">{card.title}</p>
            <h3 className="text-3xl font-bold text-white italic tracking-tighter">{card.value}</h3>
            <span className="text-emerald-500 text-[9px] font-bold mt-2 inline-block">{card.trend} from last month</span>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] h-[400px]">
          <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-8 opacity-40">Sales Performance</h4>
          <ResponsiveContainer width="100%" height="90%">
            <AreaChart data={data}>
              <XAxis dataKey="name" hide />
              <Tooltip contentStyle={{backgroundColor: '#0f121a', border: 'none', borderRadius: '15px'}} />
              <Area type="monotone" dataKey="sales" stroke="#10b981" fill="#10b98120" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] h-[400px]">
          <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-8 opacity-40">User Growth</h4>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={data}>
              <XAxis dataKey="name" hide />
              <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#0f121a', border: 'none'}} />
              <Bar dataKey="users" fill="#3b82f6" radius={[10, 10, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}