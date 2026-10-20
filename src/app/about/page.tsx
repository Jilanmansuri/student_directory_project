import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About | Campus Directory",
  description: "About the Campus Directory academic records and student registry platform.",
};

export default function AboutPage() {
  const highlights = [
    {
      title: "Student Profiles",
      description:
        "Comprehensive directory profiles including enrollment dates, academic standing, credit breakdown, and faculty contacts.",
    },
    {
      title: "Department Catalogs",
      description:
        "Curated academic departments covering Computer Science, Design, and Business with active research tracking.",
    },
    {
      title: "Specialized Tracks",
      description:
        "Specialized degree pathways with dedicated lab facilities, academic leadership, and cohort rosters.",
    },
  ];

  return (
    <div className="flex-1 bg-slate-50/60 pb-16 pt-6">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-6">
          <Breadcrumb
            items={[
              { label: "Campus Directory", href: "/students" },
              { label: "About" },
            ]}
          />
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-xs">
          <div className="border-b border-slate-100 pb-6">
            <span className="rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
              Campus Informatics Platform
            </span>
            <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
              About Campus Directory
            </h1>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Campus Directory is a modern academic registry designed to connect students,
              departments, and specialized study programs. Built with high-performance
              modular components, the platform delivers instantaneous access to student
              profiles, curriculum cycles, and department tracks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-b border-slate-100">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-100 bg-slate-50/60 p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <h2 className="text-base font-bold text-slate-900">
              System & Architecture
            </h2>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="rounded-lg border border-slate-100 p-3">
                <span className="text-slate-400 block font-medium">Framework</span>
                <span className="mt-1 block font-semibold text-slate-800">Next.js 16</span>
              </div>
              <div className="rounded-lg border border-slate-100 p-3">
                <span className="text-slate-400 block font-medium">Runtime</span>
                <span className="mt-1 block font-semibold text-slate-800">React 19</span>
              </div>
              <div className="rounded-lg border border-slate-100 p-3">
                <span className="text-slate-400 block font-medium">Type Safety</span>
                <span className="mt-1 block font-semibold text-slate-800">TypeScript 5</span>
              </div>
              <div className="rounded-lg border border-slate-100 p-3">
                <span className="text-slate-400 block font-medium">Design System</span>
                <span className="mt-1 block font-semibold text-slate-800">Tailwind CSS</span>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
              <span className="text-xs text-slate-500">
                Ready to explore active campus enrollees?
              </span>
              <Link
                href="/students"
                className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-blue-700 transition-colors"
              >
                Explore Students Directory &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}