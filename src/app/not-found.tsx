import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export default function NotFound() {
  const suggestedRoutes = [
    {
      title: "Computer Science Department",
      subtitle: "Software engineering, algorithms & systems",
      href: "/departments/computer-science",
    },
    {
      title: "Web Development Specialization",
      subtitle: "Modern frontend architectures & reactive UI",
      href: "/departments/computer-science/web-development",
    },
    {
      title: "Design Department",
      subtitle: "UI/UX, visual communication & product design",
      href: "/departments/design",
    },
    {
      title: "Business Department",
      subtitle: "Finance, analytics & strategic management",
      href: "/departments/business",
    },
  ];

  return (
    <div className="flex-1 bg-white pb-20 pt-6">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 border-b border-slate-100 pb-3">
          <Breadcrumb
            items={[
              { label: "Directory", href: "/students" },
              { label: "Not Found" },
            ]}
          />
        </div>

        <div className="mx-auto max-w-xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-mono font-medium text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400 inline-block" />
            404 &middot; ROUTE NOT FOUND
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
            Student or department not found
          </h1>

          <p className="mt-2.5 text-sm text-slate-500 leading-relaxed">
            The requested directory entry or path could not be located. It may have moved
            or the identifier might be invalid.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/students"
              className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-blue-700 transition-colors"
            >
              Return to Students Directory
            </Link>

            <Link
              href="/departments"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 transition-colors"
            >
              Browse All Departments
            </Link>
          </div>

          <div className="mt-12 overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-4 py-2.5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Suggested Starting Points
              </span>
              <span className="text-[11px] text-slate-400">Internal Routes</span>
            </div>

            <div className="divide-y divide-slate-100">
              {suggestedRoutes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="flex items-center justify-between p-3.5 transition hover:bg-slate-50"
                >
                  <div>
                    <h3 className="text-xs font-semibold text-slate-800">
                      {route.title}
                    </h3>
                    <p className="text-[11px] text-slate-400">{route.subtitle}</p>
                  </div>
                  <span className="text-xs text-slate-400">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
