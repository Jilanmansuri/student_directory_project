"use client";

import { useState, useMemo } from "react";
import { Student } from "@/types";
import StudentCard from "@/components/StudentCard";

interface StudentListProps {
  initialStudents: Student[];
  departments: string[];
}

export default function StudentList({
  initialStudents,
  departments,
}: StudentListProps) {
  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState("all");

  const filtered = useMemo(() => {
    return initialStudents.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.studentId.toLowerCase().includes(search.toLowerCase()) ||
        student.department.toLowerCase().includes(search.toLowerCase());

      const matchesDept =
        selectedDept === "all" ||
        student.department.toLowerCase() === selectedDept.toLowerCase();

      return matchesSearch && matchesDept;
    });
  }, [initialStudents, search, selectedDept]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-3 shadow-xs">
        <div className="relative flex-1">
          <svg
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search students"
            className="w-full rounded-lg border-0 py-2 pl-9 pr-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-2 border-t sm:border-t-0 sm:border-l border-slate-100 pt-2 sm:pt-0 sm:pl-4">
          <label htmlFor="dept-select" className="text-xs text-slate-500 shrink-0">
            Department:
          </label>
          <select
            id="dept-select"
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="all">All departments</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-200 bg-white p-12 text-center">
          <p className="text-sm font-medium text-slate-600">
            No students found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setSelectedDept("all");
            }}
            className="mt-3 text-xs font-semibold text-blue-600 hover:text-blue-700"
          >
            Reset filters
          </button>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200 pt-5 text-xs text-slate-500">
        <div>
          Showing <span className="font-medium text-slate-700">{filtered.length}</span> of{" "}
          <span className="font-medium text-slate-700">{initialStudents.length}</span> students
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-400 shadow-xs"
          >
            Previous
          </button>
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-400 shadow-xs"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
