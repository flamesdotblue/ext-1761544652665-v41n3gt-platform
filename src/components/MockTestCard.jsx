import { Clock, FileQuestion, Play, Shield } from 'lucide-react';

function Badge({ label }) {
  return (
    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">
      {label}
    </span>
  );
}

function MockTestCard({ id, title, description, durationMins, questions, subject, badge, demo }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-slate-900">{title}</h3>
            {badge ? <Badge label={badge} /> : null}
            {demo ? <span className="text-[10px] rounded bg-amber-50 px-1.5 py-0.5 text-amber-700 ring-1 ring-amber-200">Demo</span> : null}
          </div>
          <p className="mt-1 text-sm text-slate-600">{description}</p>
        </div>
        <Shield className={`h-4 w-4 ${demo ? 'text-slate-300' : 'text-emerald-600'}`} />
      </div>

      <div className="mt-3 flex items-center gap-4 text-xs text-slate-600">
        <div className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{durationMins} mins</div>
        <div className="inline-flex items-center gap-1"><FileQuestion className="h-3.5 w-3.5" />{questions} Qs</div>
        <div className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-indigo-500" />{subject}</div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-1.5 text-white text-sm hover:bg-blue-700">
          <Play className="h-4 w-4" />
          Start Test
        </button>
        <a href="#" className="text-sm text-blue-700 hover:underline">View details</a>
      </div>
    </div>
  );
}

export default MockTestCard;
