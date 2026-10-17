import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
                <Link href="/" className="text-sm font-semibold text-gray-900">
                    Campus Directory
                </Link>

                <div className="flex items-center gap-5 text-sm text-gray-600">
                    <Link href="/students" className="border-b-2 border-blue-600 pb-2 text-blue-600">
                        Students
                    </Link>

                    <Link href="/departments" className="hover:text-blue-600">
                        Departments
                    </Link>

                    <Link href="/about" className="hover:text-blue-600">
                        About
                    </Link>
                </div>

                <a className="rounded-sm border border-gray-300 bg-indigo-50 px-2 py-1 text-xs text-gray-700">
                    Frontend Practice
                </a>
            </div>
        </nav>
    );
}