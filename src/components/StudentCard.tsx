import Link from "next/link";
import { Student } from "@/types";

interface StudentCardProps {
  student: Student;
}

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 border-blue-200",
  purple: "bg-purple-100 text-purple-700 border-purple-200",
  orange: "bg-orange-100 text-orange-700 border-orange-200",
  rose: "bg-rose-100 text-rose-700 border-rose-200",
  indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
};

export default function StudentCard({ student }: StudentCardProps) {
  const avatarClass = colorMap[student.avatarColor] || colorMap.blue;

  return (
    <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition hover:border-slate-300 hover:shadow-sm">
      <div>
        <div className="flex items-center justify-between">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg border text-xs font-semibold ${avatarClass}`}
          >
            {student.initials}
          </div>
          <span className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-mono text-slate-600">
            {student.studentId}
          </span>
        </div>

        <div className="mt-4">
          <h3 className="text-base font-semibold text-slate-900">
            {student.name}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="rounded border border-blue-200 bg-blue-50/80 px-2 py-0.5 text-xs font-medium text-blue-700">
              {student.department}
            </span>
            <span className="text-xs text-slate-500">
              {student.yearNumber ? `${student.yearNumber}${getOrdinalSuffix(student.yearNumber)} Year` : student.studyYear}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-slate-100 pt-3">
        <Link
          href={`/students/${student.id}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
        >
          View profile
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

function getOrdinalSuffix(n: number): string {
  if (n === 1) return "st";
  if (n === 2) return "nd";
  if (n === 3) return "rd";
  return "th";
}
