import { Metadata } from "next";
import { departments } from "@/data/departments";
import DepartmentCard from "@/components/DepartmentCard";

export const metadata: Metadata = {
  title: "Departments | Campus Directory",
  description: "Explore academic faculties, programs, and enrolled students.",
};

export default function DepartmentsPage() {
  return (
    <div className="flex-1 bg-slate-50/60 pb-16 pt-8">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Departments
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Explore academic faculties, programs, and enrolled students.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span>3 Active Academic Faculties</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white divide-y divide-slate-100 shadow-xs">
          {departments.map((department) => (
            <DepartmentCard key={department.id} department={department} />
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-2 px-1 text-xs text-slate-400">
          <span>Curriculum Year 2024–2025</span>
          <span>Updated daily via Campus Records API</span>
        </div>
      </div>
    </div>
  );
}
