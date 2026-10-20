import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { departments, getSpecialization } from "@/data/departments";
import { getStudentsBySpecialization } from "@/data/students";
import Breadcrumb from "@/components/Breadcrumb";
import StudentSpecializationCard from "@/components/StudentSpecializationCard";

interface SpecializationPageProps {
  params: Promise<{
    dept: string;
    spec: string;
  }>;
}

export async function generateStaticParams() {
  const params: { dept: string; spec: string }[] = [];
  for (const dept of departments) {
    for (const spec of dept.specializations) {
      params.push({
        dept: dept.slug,
        spec: spec.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: SpecializationPageProps): Promise<Metadata> {
  const { dept, spec } = await params;
  const match = getSpecialization(dept, spec);

  if (!match) {
    return {
      title: "Specialization Not Found | Campus Directory",
    };
  }

  return {
    title: `${match.specialization.name} | ${match.department.name} | Campus Directory`,
    description: match.specialization.description,
  };
}

export default async function SpecializationDetailPage({
  params,
}: SpecializationPageProps) {
  const { dept: deptSlug, spec: specSlug } = await params;
  const match = getSpecialization(deptSlug, specSlug);

  if (!match) {
    notFound();
  }

  const { department, specialization } = match;
  const enrolledStudents = getStudentsBySpecialization(specSlug);

  return (
    <div className="flex-1 bg-slate-50/60 pb-16 pt-6">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-4 space-y-3">
          <Breadcrumb
            items={[
              { label: "Departments", href: "/departments" },
              { label: department.name, href: `/departments/${department.slug}` },
              { label: specialization.name },
            ]}
          />

          <div className="flex items-center justify-between">
            <Link
              href={`/departments/${department.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              <span aria-hidden="true">&larr;</span> Return to {department.name} Department
            </Link>

            <Link
              href="/students"
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              View all students
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                  {specialization.name}
                </h1>
                <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs text-slate-600 font-medium">
                  Specialization under {department.name}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-3xl">
                {specialization.description}
              </p>
            </div>

            <div className="shrink-0 text-left sm:text-right">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase block">
                Department Track
              </span>
              <span className="mt-1 inline-block rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-mono font-bold text-slate-800">
                {specialization.trackCode}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 text-xs">
            <div>
              <span className="font-semibold text-slate-400 uppercase tracking-wider block text-[11px]">
                Academic Lead
              </span>
              <span className="mt-1 block font-semibold text-slate-900 text-sm">
                {specialization.academicLead}
              </span>
            </div>
            <div>
              <span className="font-semibold text-slate-400 uppercase tracking-wider block text-[11px]">
                Primary Core Lab
              </span>
              <span className="mt-1 block font-semibold text-slate-900 text-sm">
                {specialization.primaryLab}
              </span>
            </div>
            <div>
              <span className="font-semibold text-slate-400 uppercase tracking-wider block text-[11px]">
                Total Enrollment
              </span>
              <span className="mt-1 block font-semibold text-slate-900 text-sm">
                {specialization.totalEnrollment}
              </span>
            </div>
            <div>
              <span className="font-semibold text-slate-400 uppercase tracking-wider block text-[11px]">
                Curriculum Cycle
              </span>
              <span className="mt-1 block font-semibold text-slate-900 text-sm">
                {specialization.curriculumCycle}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-slate-900">
                Students in this Specialization
              </h2>
              <span className="flex h-5 w-5 items-center justify-center rounded bg-slate-200 text-xs font-semibold text-slate-700">
                {enrolledStudents.length}
              </span>
            </div>

            <div className="text-xs text-slate-500">
              Filtered by Track:{" "}
              <span className="rounded border border-slate-200 bg-white px-2 py-0.5 font-medium text-slate-700">
                {specialization.name}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {enrolledStudents.map((student) => (
              <StudentSpecializationCard
                key={student.id}
                student={student}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-2 px-1 text-xs text-slate-400">
          <span>Campus Directory &copy; Academic Informatics Core</span>
          <span className="flex items-center gap-1.5 font-mono">
            Path: /departments/{department.slug}/{specialization.slug}
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
          </span>
        </div>
      </div>
    </div>
  );
}
