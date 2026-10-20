"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isStudentsActive =
    pathname === "/" || pathname.startsWith("/students");
  const isDepartmentsActive = pathname.startsWith("/departments");
  const isAboutActive = pathname.startsWith("/about");

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <div className="flex items-center gap-8">
          <Link
            href="/students"
            className="flex items-center gap-2.5 text-[15px] font-bold tracking-tight text-slate-900"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white shadow-xs">
              <svg
                className="h-4 w-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 8.55L4.54 9 12 4.95 19.46 9 12 11.55zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
              </svg>
            </span>
            <span>Campus Directory</span>
          </Link>

          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/students"
              className={`relative py-1 font-medium transition-colors ${
                isStudentsActive
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Students
              {isStudentsActive && (
                <span className="absolute -bottom-[15px] left-0 right-0 h-0.5 rounded-full bg-blue-600" />
              )}
            </Link>

            <Link
              href="/departments"
              className={`relative py-1 font-medium transition-colors ${
                isDepartmentsActive
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Departments
              {isDepartmentsActive && (
                <span className="absolute -bottom-[15px] left-0 right-0 h-0.5 rounded-full bg-blue-600" />
              )}
            </Link>

            <Link
              href="/about"
              className={`relative py-1 font-medium transition-colors ${
                isAboutActive
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              About
              {isAboutActive && (
                <span className="absolute -bottom-[15px] left-0 right-0 h-0.5 rounded-full bg-blue-600" />
              )}
            </Link>
          </nav>
        </div>

        <div className="flex items-center">
          <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
            Frontend Practice
          </span>
        </div>
      </div>
    </header>
  );
}