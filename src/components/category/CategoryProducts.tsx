"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/types/product";
import ProductCard from "@/components/product/ProductCard";

interface CategoryProductsProps {
  products: Product[];
}

type SortOption = "default" | "low-high" | "high-low";

export default function CategoryProducts({
  products,
}: CategoryProductsProps) {
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const sortedProducts = useMemo(() => {
    const result = [...products];

    if (sortBy === "low-high") {
      result.sort((a, b) => a.today - b.today);
    } else if (sortBy === "high-low") {
      result.sort((a, b) => b.today - a.today);
    }

    return result;
  }, [products, sortBy]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-500">
          মোট {sortedProducts.length}টি পণ্য
        </p>

        <label className="flex items-center gap-3 text-sm">
          <span className="whitespace-nowrap text-gray-600">
            দাম অনুযায়ী সাজান
          </span>

          <select
            value={sortBy}
            onChange={(event) =>
              setSortBy(event.target.value as SortOption)
            }
            className="select select-bordered select-sm w-full bg-white sm:w-48"
          >
            <option value="default">ডিফল্ট</option>
            <option value="low-high">কম দাম থেকে বেশি</option>
            <option value="high-low">বেশি দাম থেকে কম</option>
          </select>
        </label>
      </div>

      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-[#e0eae2] bg-white p-10 text-center">
          <p className="font-semibold text-gray-700">
            এই ক্যাটাগরিতে কোনো পণ্য নেই।
          </p>
        </div>
      )}
    </div>
  );
}