export default function SectionSkeleton() {
  return (
    <div className="w-full max-w-page mx-auto px-6 sm:px-10 lg:px-container-x py-12 space-y-8">
      <div className="space-y-4">
        <div className="h-4 w-24 bg-slate-200 animate-pulse rounded-full" />
        <div className="h-12 w-2/3 bg-slate-200 animate-pulse rounded-2xl" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="h-64 bg-slate-100 animate-pulse rounded-[32px]" />
        <div className="h-64 bg-slate-100 animate-pulse rounded-[32px]" />
        <div className="h-64 bg-slate-100 animate-pulse rounded-[32px]" />
      </div>
    </div>
  );
}
