import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#f5faf7] py-8 sm:py-12">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
        <div>
          <p className="mb-3 text-sm font-semibold text-emerald-600">
            সর্বশেষ বাজার আপডেট
          </p>

          <h1 className="max-w-2xl text-3xl font-bold leading-tight text-emerald-950 sm:text-4xl lg:text-5xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম, দুধ ও মসলার
            আজকের সম্ভাব্য বাজারদর এক জায়গায় দেখুন।
          </p>

          <Link
            href="#সব-পণ্য"
            className="mt-6 inline-flex rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            সব পণ্য দেখুন
          </Link>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="flex h-52 w-52 items-center justify-center rounded-full bg-emerald-100 text-8xl shadow-sm sm:h-64 sm:w-64 sm:text-9xl">
            🧺
          </div>
        </div>
      </div>
    </section>
  );
}