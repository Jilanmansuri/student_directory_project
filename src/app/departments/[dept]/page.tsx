import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { departments, getDepartmentBySlug } from "@/data/departments";
import { getStudentsByDepartment } from "@/data/students";
import Breadcrumb from "@/components/Breadcrumb";
import StudentCard from "@/components/StudentCard";

interface DepartmentPageProps {
  params: Promise<{
    dept: string;
  }>;
}

export async function generateStaticParams() {
  return departments.map((dept) => ({
    dept: dept.slug,
  }));
}

export async function generateMetadata({
  params,
}: DepartmentPageProps): Promise<Metadata> {
  const { dept } = await params;
  const department = getDepartmentBySlug(dept);

  if (!department) {
    return {
      title: "Department Not Found | Campus Directory",
    };
  }

  return {
    title: `${department.name} | Campus Directory`,
    description: department.description,
  };
}

export default async function DepartmentDetailPage({
  params,
}: DepartmentPageProps) {
  const { dept } = await params;
  const department = getDepartmentBySlug(dept);

  if (!department) {
    notFound();
  }

  const deptStudents = getStudentsByDepartment(department.slug);

  return (
    <div className="flex-1 bg-slate-50/60 pb-16 pt-6">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-4 space-y-3">
          <Breadcrumb
            items={[
              { label: "Departments", href: "/departments" },
              { label: department.name },
            ]}
          />

          <Link
            href="/departments"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            <span aria-hidden="true">&larr;</span> Back to all departments
          </Link>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                {department.name}
              </h1>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-3xl">
                {department.description}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3 text-xs text-slate-500">
              <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-medium">
                {department.specializationsCount} Tracks
              </span>
              <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-medium">
                {department.enrolledStudentsCount} Students
              </span>
            </div>
          </div>

          <div className="pt-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Department Tracks & Specializations
            </h2>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {department.specializations.map((spec) => (
                <Link
                  key={spec.slug}
                  href={`/departments/${department.slug}/${spec.slug}`}
                  className="group rounded-lg border border-slate-200 p-4 transition hover:border-blue-400 hover:shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-blue-600">
                      {spec.trackCode}
                    </span>
                    <span className="text-xs text-blue-600 group-hover:translate-x-0.5 transition-transform">
                      &rarr;
                    </span>
                  </div>
                  <h3 className="mt-1 text-sm font-semibold text-slate-900 group-hover:text-blue-600">
                    {spec.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                    {spec.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100 pt-2">
                    <span>{spec.academicLead}</span>
                    <span>{spec.totalEnrollment}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">
              Enrolled Students in {department.name}
            </h2>
            <span className="text-xs text-slate-500">
              Showing {deptStudents.length} students
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {deptStudents.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
