import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat("bn-BD").format(price);

export default function ProductCard({
  product,
}: ProductCardProps) {
  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group rounded-xl border border-[#e0eae2] bg-[#fafcfa] p-4 transition duration-200 hover:-translate-y-1 hover:border-[#a9d5b7] hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf5ed] text-2xl">
          {product.image}
        </div>

        <span
          className={`rounded-full px-2 py-1 text-xs font-semibold ${
            isUp
              ? "bg-red-50 text-red-600"
              : isDown
                ? "bg-emerald-50 text-emerald-700"
                : "bg-gray-100 text-gray-600"
          }`}
        >
          {isUp ? "▲" : isDown ? "▼" : "—"}{" "}
          {formatPrice(product.change.pct)}%
        </span>
      </div>

      <h3 className="mt-4 text-base font-bold text-[#1d2b23] group-hover:text-[#008a4b]">
        {product.nameBn}
      </h3>

      <p className="mt-1 text-xs text-[#758278]">
        {product.categoryNameBn} · প্রতি{" "}
        {product.unit === "kg"
          ? "কেজি"
          : product.unit === "litre"
            ? "লিটার"
            : product.unit === "dozen"
              ? "ডজন"
              : "টি"}
      </p>

      <div className="mt-4 flex items-end justify-between border-t border-[#e8eee9] pt-3">
        <div>
          <p className="text-xs text-[#758278]">আজকের দাম</p>
          <p className="mt-1 text-xl font-bold text-[#008a4b]">
            ৳{formatPrice(product.today)}
          </p>
        </div>

        <span className="text-sm text-[#008a4b]">বিস্তারিত →</span>
      </div>
    </Link>
  );
}