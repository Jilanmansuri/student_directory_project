import { Metadata } from "next";
import { students } from "@/data/students";
import StudentList from "@/components/StudentList";

export const metadata: Metadata = {
  title: "Students | Campus Directory",
  description: "Browse students and view their profiles.",
};

export default function StudentsPage() {
  const departments = Array.from(new Set(students.map((s) => s.department)));

  return (
    <div className="flex-1 bg-slate-50/60 pb-16 pt-8">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Students
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Browse students and view their profiles.
          </p>
        </div>

        <StudentList
          initialStudents={students}
          departments={departments}
        />
      </div>
    </div>
  );
}