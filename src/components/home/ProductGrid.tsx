import { Product } from "@/types/product";
import ProductCard from "@/components/product/ProductCard";

interface ProductGridProps {
  products: Product[];
  title: string;
  subtitle?: string;
  id?: string;
}

export default function ProductGrid({
  products,
  title,
  subtitle,
  id,
}: ProductGridProps) {
  return (
    <section id={id} className="bg-[#eff5f0] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-5">
          <h2 className="text-xl font-bold text-[#1d2b23] sm:text-2xl">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-1 text-sm text-[#758278]">{subtitle}</p>
          )}
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-[#e0eae2] bg-[#fafcfa] p-6 text-center text-sm text-[#758278]">
            কোনো পণ্য পাওয়া যায়নি।
          </p>
        )}
      </div>
    </section>
  );
}