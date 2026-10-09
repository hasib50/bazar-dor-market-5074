import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#eff5f0] px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 rounded-2xl border border-[#e0eae2] bg-[#fafcfa] px-5 py-7 shadow-sm sm:px-8 md:grid-cols-[1.5fr_0.7fr] md:px-10 md:py-8">
        <div>
          <span className="inline-flex rounded-full bg-[#e1f3e7] px-3 py-1 text-xs font-medium text-[#008a4b]">
            সর্বশেষ বাজার আপডেট
          </span>

          <h1 className="mt-3 max-w-xl text-2xl font-bold leading-tight tracking-tight text-[#1d2b23] sm:text-3xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-3 max-w-lg text-sm leading-6 text-[#66756b]">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
            বাজারের সর্বশেষ তথ্য এক জায়গায় দেখুন।
          </p>

          <Link
            href="#সব-পণ্য"
            className="mt-5 inline-flex items-center justify-center rounded-md bg-[#008a4b] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#007541]"
          >
            সব পণ্য দেখুন
          </Link>
        </div>

        <div className="relative mx-auto h-44 w-full max-w-64 sm:h-52 md:h-56">
          <Image
            src="/images/bazar-hero.png"
            alt="বাজারের তাজা পণ্য"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 256px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}