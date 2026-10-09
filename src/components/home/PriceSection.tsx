import { getProducts } from "@/lib/api";
import ProductGrid from "@/components/home/ProductGrid";

export default async function PriceSection() {
  const products = await getProducts();

  const risers = [...products]
    .filter((product) => product.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const fallers = [...products]
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <>
      <ProductGrid
        title="আজ দাম বেড়েছে ▲"
        subtitle="যেসব পণ্যের দাম আজ বেড়েছে"
        products={risers}
      />

      <ProductGrid
        title="আজ দাম কমেছে ▼"
        subtitle="যেসব পণ্যের দাম আজ কমেছে"
        products={fallers}
      />

      <ProductGrid
        id="সব-পণ্য"
        title="সব পণ্য"
        subtitle="নিত্যপ্রয়োজনীয় পণ্যের আজকের বাজারদর"
        products={products}
      />
    </>
  );
}