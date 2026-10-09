import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-[#eff5f0] px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-[#e0eae2] bg-[#fafcfa] p-8 text-center">
        <p className="text-6xl font-extrabold text-emerald-700">404</p>

        <h1 className="mt-4 text-2xl font-bold text-[#1d2b23]">
          পেজটি পাওয়া যায়নি
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          আপনি যে পেজটি খুঁজছেন, সেটি নেই অথবা ঠিকানাটি ভুল।
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
}