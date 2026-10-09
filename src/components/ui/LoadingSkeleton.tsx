export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-32 rounded-2xl bg-[#e0eae2]" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl border border-[#e0eae2] bg-white p-4"
          >
            <div className="h-12 w-12 rounded-xl bg-[#e0eae2]" />
            <div className="mt-4 h-4 w-2/3 rounded bg-[#e0eae2]" />
            <div className="mt-3 h-3 w-1/2 rounded bg-[#e0eae2]" />
            <div className="mt-6 h-7 w-1/3 rounded bg-[#e0eae2]" />
          </div>
        ))}
      </div>
    </div>
  );
}