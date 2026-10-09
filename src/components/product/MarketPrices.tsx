import type { MarketPrice } from "@/types/product";

interface MarketPricesProps {
  markets: MarketPrice[];
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat("bn-BD").format(price);

export default function MarketPrices({ markets }: MarketPricesProps) {
  if (markets.length === 0) {
    return (
      <p className="text-sm text-gray-500">
        বাজারভিত্তিক দাম এখন পাওয়া যাচ্ছে না।
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-[#e0eae2] bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-[#eaf5ed] text-[#345441]">
          <tr>
            <th className="px-4 py-3 font-semibold">বাজার</th>
            <th className="px-4 py-3 font-semibold">বিভাগ</th>
            <th className="px-4 py-3 font-semibold">সর্বনিম্ন</th>
            <th className="px-4 py-3 font-semibold">সর্বোচ্চ</th>
          </tr>
        </thead>

        <tbody>
          {markets.map((market, index) => (
            <tr
              key={`${market.market}-${index}`}
              className="border-t border-[#e8eee9]"
            >
              <td className="px-4 py-3 font-medium text-gray-800">
                {market.market}
              </td>
              <td className="px-4 py-3 text-gray-600">
                {market.division}
              </td>
              <td className="px-4 py-3 font-semibold text-emerald-700">
                ৳{formatPrice(market.min)}
              </td>
              <td className="px-4 py-3 font-semibold text-gray-800">
                ৳{formatPrice(market.max)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}