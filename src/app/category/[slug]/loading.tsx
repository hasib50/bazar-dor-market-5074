import LoadingSkeleton from "@/components/ui/LoadingSkeleton";

export default function CategoryLoading() {
  return (
    <main className="min-h-screen bg-[#eff5f0] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <LoadingSkeleton />
      </div>
    </main>
  );
}