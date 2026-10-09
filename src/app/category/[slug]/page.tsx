import { notFound } from "next/navigation";
import { getCategories, getProducts } from "@/lib/api";
import CategoryProducts from "@/components/category/CategoryProducts";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;

  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(slug),
  ]);

  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#eff5f0] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 rounded-2xl border border-[#e0eae2] bg-[#fafcfa] p-6 sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#e1f3e7] text-3xl">
              {category.icon}
            </div>

            <div>
              <h1 className="text-2xl font-bold text-[#1d2b23]">
                {category.nameBn}
              </h1>

              <p className="mt-1 text-sm text-[#758278]">
                এই ক্যাটাগরির পণ্যের আজকের বাজারদর
              </p>
            </div>
          </div>
        </div>

        <CategoryProducts products={products} />
      </div>
    </main>
  );
}