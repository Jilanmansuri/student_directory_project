import Link from "next/link";
import { Student } from "@/types";

interface StudentSpecializationCardProps {
  student: Student;
}

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 border-blue-200",
  purple: "bg-purple-100 text-purple-700 border-purple-200",
  orange: "bg-orange-100 text-orange-700 border-orange-200",
  rose: "bg-rose-100 text-rose-700 border-rose-200",
  indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
};

export default function StudentSpecializationCard({
  student,
}: StudentSpecializationCardProps) {
  const avatarClass = colorMap[student.avatarColor] || colorMap.blue;

  return (
    <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition hover:border-slate-300 hover:shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg border text-xs font-semibold ${avatarClass}`}
          >
            {student.initials}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">
              {student.name}
            </h4>
            <p className="text-xs font-mono text-slate-500">
              {student.studentId}
            </p>
          </div>
        </div>

        <span className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-600 font-medium">
          Year {student.yearNumber}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
        <span className="text-slate-600 font-medium">{student.trackFocus}</span>
        <Link
          href={`/students/${student.id}`}
          className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 transition-colors"
        >
          View profile
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
