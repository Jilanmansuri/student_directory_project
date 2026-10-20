import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getStudentById, students } from "@/data/students";
import Breadcrumb from "@/components/Breadcrumb";

interface StudentPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return students.map((student) => ({
    id: student.id,
  }));
}

export async function generateMetadata({
  params,
}: StudentPageProps): Promise<Metadata> {
  const { id } = await params;
  const student = getStudentById(id);

  if (!student) {
    return {
      title: "Student Not Found | Campus Directory",
    };
  }

  return {
    title: `${student.name} | Campus Directory`,
    description: `Profile and academic records for ${student.name}`,
  };
}

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 border-blue-200",
  purple: "bg-purple-100 text-purple-700 border-purple-200",
  orange: "bg-orange-100 text-orange-700 border-orange-200",
  rose: "bg-rose-100 text-rose-700 border-rose-200",
  indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
};

export default async function StudentDetailPage({ params }: StudentPageProps) {
  const { id } = await params;
  const student = getStudentById(id);

  if (!student) {
    notFound();
  }

  const avatarClass = colorMap[student.avatarColor] || colorMap.blue;

  return (
    <div className="flex-1 bg-slate-50/60 pb-16 pt-6">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-4 space-y-3">
          <Breadcrumb
            items={[
              { label: "Students", href: "/students" },
              { label: student.name },
            ]}
          />
          <Link
            href="/students"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            <span aria-hidden="true">&larr;</span> Back to students
          </Link>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-xs">
          <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border text-base font-bold ${avatarClass}`}
            >
              {student.initials}
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                {student.name}
              </h1>
              <div className="mt-1.5 flex items-center gap-2">
                <span className="rounded border border-slate-200 bg-white px-2 py-0.5 text-xs font-mono text-slate-600">
                  {student.studentId}
                </span>
                <span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
                  {student.status}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-b border-slate-100 py-6">
            <div>
              <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                Department
              </span>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                {student.department}
              </p>
            </div>
            <div>
              <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                Study Year
              </span>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                {student.studyYear}
              </p>
            </div>
            <div>
              <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                Email
              </span>
              <p className="mt-1 text-sm text-blue-600 font-medium">
                <a
                  href={`mailto:${student.email}`}
                  className="hover:underline truncate block"
                >
                  {student.email}
                </a>
              </p>
            </div>
            <div>
              <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                Enrolled
              </span>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                {student.enrolled}
              </p>
            </div>
          </div>

          <div className="border-b border-slate-100 py-6">
            <h2 className="text-base font-bold text-slate-900">About</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {student.about}
            </p>
          </div>

          <div className="pt-6">
            <h2 className="text-base font-bold text-slate-900">
              Academic Details
            </h2>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Department</span>
                <span className="font-medium text-slate-900">
                  {student.department}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Current Academic Standing</span>
                <span className="font-medium text-slate-900">
                  {student.academicStanding}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                Enrolled Subjects
              </h3>

              <div className="mt-2.5 overflow-hidden rounded-lg border border-slate-200 bg-white">
                <div className="divide-y divide-slate-100">
                  {student.enrolledSubjects.map((subject) => (
                    <div
                      key={subject.code}
                      className="flex items-center justify-between px-4 py-3 text-xs sm:text-sm"
                    >
                      <span className="font-medium text-slate-800">
                        <span className="font-semibold text-slate-900">
                          {subject.code}:
                        </span>{" "}
                        {subject.title}
                      </span>
                      <span className="shrink-0 text-slate-500">
                        {subject.credits}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between px-1 text-xs text-slate-400">
          <span>System Record ID: {student.systemRecordId}</span>
          <span>Last validated: {student.lastValidated}</span>
        </div>
      </div>
    </div>
  );
}
