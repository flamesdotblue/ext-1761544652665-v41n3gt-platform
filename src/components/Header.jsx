import { Trophy, BarChart3, Shield, User } from 'lucide-react';

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
          <Trophy className="h-5 w-5 text-blue-600" />
          <span>RankUp</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
          <a className="hover:text-slate-950" href="#tests">Tests</a>
          <a className="hover:text-slate-950" href="#leaderboard">Leaderboard</a>
          <a className="hover:text-slate-950" href="#analytics">Analytics</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#" className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50">
            <Shield className="h-4 w-4 text-emerald-600" />
            <span>Proctor Safe</span>
          </a>
          <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-1.5 text-sm text-white hover:bg-black">
            <User className="h-4 w-4" />
            <span>Sign In</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
