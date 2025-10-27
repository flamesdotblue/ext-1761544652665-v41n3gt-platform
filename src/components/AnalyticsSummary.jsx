import { BarChart3 } from 'lucide-react';

function Stat({ label, value, trend }) {
  const trendColor = trend > 0 ? 'text-emerald-600' : trend < 0 ? 'text-rose-600' : 'text-slate-600';
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-sm text-slate-600">{label}</p>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
      <p className={`mt-1 text-xs ${trendColor}`}>{trend > 0 ? '+' : ''}{trend}% this week</p>
    </div>
  );
}

function AnalyticsSummary() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <BarChart3 className="h-5 w-5 text-indigo-600" />
        <h3 className="text-lg sm:text-xl font-semibold">Your Analytics Snapshot</h3>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Accuracy" value="78%" trend={3.2} />
        <Stat label="Percentile" value="92.4" trend={1.1} />
        <Stat label="Avg. Time/Q" value="54s" trend={-2.0} />
        <Stat label="Tests Taken" value="8" trend={14.0} />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="text-sm font-medium">Subject-wise Accuracy</p>
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between text-sm"><span>Physics</span><span className="font-medium">74%</span></div>
            <div className="h-2 rounded bg-slate-100"><div className="h-2 rounded bg-indigo-500" style={{ width: '74%' }} /></div>
            <div className="flex items-center justify-between text-sm"><span>Chemistry</span><span className="font-medium">81%</span></div>
            <div className="h-2 rounded bg-slate-100"><div className="h-2 rounded bg-indigo-500" style={{ width: '81%' }} /></div>
            <div className="flex items-center justify-between text-sm"><span>Mathematics/Biology</span><span className="font-medium">79%</span></div>
            <div className="h-2 rounded bg-slate-100"><div className="h-2 rounded bg-indigo-500" style={{ width: '79%' }} /></div>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="text-sm font-medium">Strengths & Weaknesses</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center justify-between"><span>Strength: Kinematics</span><span className="rounded bg-emerald-50 px-2 py-0.5 text-emerald-700 ring-1 ring-emerald-200">High</span></li>
            <li className="flex items-center justify-between"><span>Focus: Organic Reactions</span><span className="rounded bg-amber-50 px-2 py-0.5 text-amber-700 ring-1 ring-amber-200">Medium</span></li>
            <li className="flex items-center justify-between"><span>Weak: Complex Numbers</span><span className="rounded bg-rose-50 px-2 py-0.5 text-rose-700 ring-1 ring-rose-200">Low</span></li>
          </ul>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end">
        <a href="#" className="text-sm text-blue-700 hover:underline">Open full Analytics Dashboard</a>
      </div>
    </div>
  );
}

export default AnalyticsSummary;
