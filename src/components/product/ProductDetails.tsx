import type { Product } from "@/types/product";
import MarketPrices from "@/components/product/MarketPrices";

interface ProductDetailsProps {
  product: Product;
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat("bn-BD").format(price);

const getUnit = (unit: Product["unit"]) => {
  switch (unit) {
    case "kg":
      return "কেজি";
    case "litre":
      return "লিটার";
    case "dozen":
      return "ডজন";
    case "piece":
      return "টি";
  }
};

export default function ProductDetails({
  product,
}: ProductDetailsProps) {
  const difference = product.today - product.yesterday;
  const averageMarketPrice =
    product.markets.length > 0
      ? product.markets.reduce(
          (total, market) => total + (market.min + market.max) / 2,
          0,
        ) / product.markets.length
      : null;

  return (
    <main className="min-h-screen bg-[#eff5f0] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <section className="rounded-2xl border border-[#e0eae2] bg-[#fafcfa] p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-[#eaf5ed] text-6xl">
              {product.image}
            </div>

            <div>
              <p className="text-sm font-medium text-emerald-700">
                {product.categoryIcon} {product.categoryNameBn}
              </p>

              <h1 className="mt-2 text-2xl font-bold text-[#1d2b23] sm:text-3xl">
                {product.nameBn}
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                প্রতি {getUnit(product.unit)}
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-[#eaf5ed] p-5">
              <p className="text-sm text-gray-600">আজকের দাম</p>
              <p className="mt-2 text-2xl font-bold text-emerald-700">
                ৳{formatPrice(product.today)}
              </p>
            </div>

            <div className="rounded-xl border border-[#e0eae2] bg-white p-5">
              <p className="text-sm text-gray-600">গতকালের দাম</p>
              <p className="mt-2 text-2xl font-bold text-gray-800">
                ৳{formatPrice(product.yesterday)}
              </p>
            </div>

            <div className="rounded-xl border border-[#e0eae2] bg-white p-5">
              <p className="text-sm text-gray-600">দামের পরিবর্তন</p>
              <p
                className={`mt-2 text-2xl font-bold ${
                  difference > 0
                    ? "text-red-600"
                    : difference < 0
                      ? "text-emerald-700"
                      : "text-gray-600"
                }`}
              >
                {difference > 0 ? "+" : difference < 0 ? "−" : ""}
                ৳{formatPrice(Math.abs(difference))}
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#e0eae2] bg-white p-5">
              <p className="text-sm text-gray-500">গত সপ্তাহের দাম</p>
              <p className="mt-2 text-lg font-bold text-gray-800">
                ৳{formatPrice(product.lastWeek)}
              </p>
            </div>

            <div className="rounded-xl border border-[#e0eae2] bg-white p-5">
              <p className="text-sm text-gray-500">গত মাসের দাম</p>
              <p className="mt-2 text-lg font-bold text-gray-800">
                ৳{formatPrice(product.lastMonth)}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#1d2b23]">
            বাজারভিত্তিক দাম
          </h2>
          <p className="mb-4 mt-1 text-sm text-gray-500">
            বিভিন্ন বাজারে সর্বনিম্ন ও সর্বোচ্চ দাম
          </p>

          <MarketPrices markets={product.markets} />
        </section>

        {averageMarketPrice !== null && (
          <p className="mt-4 text-sm text-gray-600">
            বাজারগুলোর গড় সর্বনিম্ন-সর্বোচ্চ দামের মধ্যবিন্দু:{" "}
            <strong>৳{formatPrice(Math.round(averageMarketPrice))}</strong>
          </p>
        )}

        <p className="mt-6 text-xs leading-5 text-gray-500">
          বাজারদর পরিবর্তনশীল। কেনাকাটার আগে স্থানীয় বাজারে দাম যাচাই করুন।
        </p>
      </div>
    </main>
  );
}