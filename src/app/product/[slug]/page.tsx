import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/api";
import ProductDetails from "@/components/product/ProductDetails";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}