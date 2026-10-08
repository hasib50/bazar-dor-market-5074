import { Product } from "@/types/product";
import { Category } from "@/types/category";

const BASE_URL =
  "https://api.abcz.workers.dev/api/bazardor";

export async function getProducts(
  category?: string
): Promise<Product[]> {
  const url = category
    ? `${BASE_URL}/products?category=${category}`
    : `${BASE_URL}/products`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function getProduct(
  id: number
): Promise<Product> {
  const response = await fetch(
    `${BASE_URL}/products/${id}`
  );

  if (!response.ok) {
    throw new Error("Product not found");
  }

  return response.json();
}

export async function getProductBySlug(
  slug: string
): Promise<Product | undefined> {
  const products = await getProducts();

  return products.find(
    (product) => product.slug === slug
  );
}

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(
    `${BASE_URL}/categories`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}

export async function getCategory(
  slug: string
): Promise<Category> {
  const response = await fetch(
    `${BASE_URL}/categories/${slug}`
  );

  if (!response.ok) {
    throw new Error("Category not found");
  }

  return response.json();
}