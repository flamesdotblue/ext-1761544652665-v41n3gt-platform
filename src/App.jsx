import { useState } from 'react';
import Header from './components/Header.jsx';
import MockTestCard from './components/MockTestCard.jsx';
import LeaderboardPreview from './components/LeaderboardPreview.jsx';
import AnalyticsSummary from './components/AnalyticsSummary.jsx';

function App() {
  const [tests] = useState([
    {
      id: 'demo-neet',
      title: 'Demo Mock Test (NEET)',
      description: 'Always available demo test. Excluded from real rankings.',
      durationMins: 30,
      questions: 45,
      subject: 'NEET',
      badge: 'Demo',
      demo: true,
    },
    {
      id: 'jee-main-phy-01',
      title: 'JEE Main Physics - Mechanics',
      description: 'Timed MCQ: Kinematics, Laws of Motion, Work & Energy',
      durationMins: 60,
      questions: 60,
      subject: 'JEE Main',
      badge: 'Weekly',
    },
    {
      id: 'jee-adv-math-01',
      title: 'JEE Advanced Mathematics - Algebra',
      description: 'Higher difficulty: Quadratic, Complex, Progressions',
      durationMins: 90,
      questions: 54,
      subject: 'JEE Advanced',
      badge: 'Advanced',
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Header />

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">RankUp — Mock Tests, Leaderboards, Analytics</h1>
              <p className="mt-1 text-slate-600">Ace NEET & JEE with timed MCQs, live rankings, and parent-friendly insights.</p>
            </div>
            <div className="flex gap-2">
              <a href="#tests" className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition">Take a Test</a>
              <a href="#leaderboard" className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-black transition">View Leaderboard</a>
            </div>
          </div>
        </section>

        <section id="tests" className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-semibold">Available Tests</h2>
            <a href="#" className="text-sm text-blue-700 hover:underline">Browse all</a>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tests.map((t) => (
              <MockTestCard key={t.id} {...t} />
            ))}
          </div>
        </section>

        <section id="leaderboard" className="mt-10">
          <LeaderboardPreview />
        </section>

        <section id="analytics" className="mt-10">
          <AnalyticsSummary />
        </section>
      </main>

      <footer className="mt-12 border-t border-slate-200 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} RankUp. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-slate-900" href="#">Privacy</a>
            <a className="hover:text-slate-900" href="#">Terms</a>
            <a className="hover:text-slate-900" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
