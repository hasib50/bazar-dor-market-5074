import { getProducts } from "@/lib/api";

export default async function PriceTicker() {
  const products = await getProducts();

  const tickerItems = [...products, ...products];

  return (
    <div className="overflow-hidden border-b border-emerald-100 bg-emerald-50">
      <div className="flex w-max animate-[marquee_35s_linear_infinite]">
        {tickerItems.map((product, index) => {
          const isUp = product.change.dir === "up";
          const isDown = product.change.dir === "down";

          return (
            <div
              key={`${product.id}-${index}`}
              className="flex items-center gap-2 whitespace-nowrap border-r border-emerald-100 px-5 py-2 text-xs"
            >
              <span>
                {product.image} {product.nameBn}
              </span>

              <span className="font-semibold text-emerald-900">
                {product.today} টাকা/{product.unit}
              </span>

              <span
                className={
                  isUp
                    ? "font-semibold text-red-500"
                    : isDown
                      ? "font-semibold text-emerald-600"
                      : "font-semibold text-gray-500"
                }
              >
                {isUp ? "▲" : isDown ? "▼" : "—"}{" "}
                {product.change.pct}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}