import Link from "next/link";
import { getCategories } from "@/lib/api";

export default async function Navbar() {
  const categories = await getCategories();

  return (
    <header className="border-b border-emerald-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Navbar */}
        <div className="flex min-h-20 items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-2xl">
              🛒
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight text-emerald-900">
                বাজার দর
              </h1>

              <p className="text-xs text-emerald-700">
                আজকের বাজারের হালনাগাদ দাম
              </p>
            </div>
          </Link>

          {/* Auth */}
          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="/signin"
              className="rounded-lg px-4 py-2 text-sm font-medium text-emerald-800 transition hover:bg-emerald-50"
            >
              সাইন ইন
            </Link>

            <Link
              href="/signup"
              className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              সাইন আপ
            </Link>
          </div>

          {/* Mobile Menu */}
          <button
            type="button"
            className="btn btn-ghost btn-circle sm:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>

        {/* Category Navigation */}
        <nav className="hidden border-t border-emerald-50 py-3 md:block">
          <div className="flex items-center justify-center gap-2 overflow-x-auto">
            <Link
              href="/"
              className="whitespace-nowrap rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white"
            >
              সব পণ্য
            </Link>

            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                {category.icon} {category.nameBn}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}