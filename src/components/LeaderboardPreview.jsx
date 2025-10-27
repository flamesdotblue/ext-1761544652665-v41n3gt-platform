import { Trophy, Sparkles } from 'lucide-react';

const sampleRows = [
  { rank: 1, name: 'Aarav Gupta', state: 'MH', score: 292, tests: 12, avatar: '🟦' },
  { rank: 2, name: 'Isha Singh', state: 'DL', score: 289, tests: 10, avatar: '🟪' },
  { rank: 3, name: 'Kabir Nair', state: 'KA', score: 287, tests: 14, avatar: '🟩' },
  { rank: 42, name: 'You', state: 'MH', score: 250, tests: 8, avatar: '🟨', me: true },
];

function Row({ r }) {
  return (
    <div className={`grid grid-cols-12 items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm ${r.me ? 'ring-2 ring-blue-500' : ''}`}>
      <div className="col-span-2 flex items-center gap-2">
        <span className={`inline-flex h-6 w-6 items-center justify-center rounded ${r.rank <= 3 ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-800'}`}>{r.rank}</span>
        <span className="hidden sm:inline-flex"><Trophy className={`h-4 w-4 ${r.rank <= 3 ? 'text-amber-500' : 'text-slate-400'}`} /></span>
      </div>
      <div className="col-span-4 flex items-center gap-2">
        <span className="text-lg">{r.avatar}</span>
        <span className="font-medium text-slate-900 truncate">{r.name}</span>
      </div>
      <div className="col-span-2 text-slate-600">{r.state}</div>
      <div className="col-span-2 font-medium">{r.score}</div>
      <div className="col-span-2 text-right text-slate-600">{r.tests} tests</div>
    </div>
  );
}

function LeaderboardPreview() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-amber-500" />
          <h3 className="text-lg sm:text-xl font-semibold">Leaderboard (Top 10 preview)</h3>
        </div>
        <div className="flex items-center gap-2">
          <select className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-sm">
            <option>All India</option>
            <option>My State</option>
            <option>My Batch</option>
          </select>
          <select className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-sm">
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Custom</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        {sampleRows.map((r) => (
          <Row key={r.rank + r.name} r={r} />
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-slate-500">Live updates enabled. Demo data shown.</p>
        <a href="#" className="inline-flex items-center gap-2 text-sm text-blue-700 hover:underline">
          <Sparkles className="h-4 w-4" /> Full Leaderboard
        </a>
      </div>
    </div>
  );
}

export default LeaderboardPreview;
