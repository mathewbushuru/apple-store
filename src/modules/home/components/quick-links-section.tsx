import { ArrowUpRight } from "lucide-react";

export default function QuickLinksSection() {
  return (
    <div className="pb-4 xl:pb-8">
      <p className="p-4 pb-2 text-2xl font-semibold leading-tight tracking-wide text-zinc-500 sm:px-8 sm:text-[28px] sm:leading-[1.10] xl:px-32 xl:text-3xl">
        <span className="text-foreground">Quick Links</span>
      </p>

      <div className="scrollbar-hide flex gap-4 overflow-x-auto p-4 pb-8 sm:gap-6 sm:p-8 xl:pl-32 xl:pr-24">
        <div className="group flex min-w-fit cursor-pointer items-center gap-1 rounded-3xl border border-foreground px-4 py-2 text-sm font-light hover:bg-foreground hover:text-background">
          <span className="group-hover:underline">Order Status</span>
          <ArrowUpRight className="h-4 w-4" />
        </div>

        <div className="group flex min-w-fit cursor-pointer items-center gap-1 rounded-3xl border border-foreground px-4 py-2 text-sm font-light hover:bg-foreground hover:text-background">
          <span className="group-hover:underline">Shopping Help</span>
          <ArrowUpRight className="h-4 w-4" />
        </div>

        <div className="group flex min-w-fit cursor-pointer items-center gap-1 rounded-3xl border border-foreground px-4 py-2 text-sm font-light hover:bg-foreground hover:text-background">
          <span className="group-hover:underline">Returns</span>
          <ArrowUpRight className="h-4 w-4" />
        </div>

        <div className="group flex min-w-fit cursor-pointer items-center gap-1 rounded-3xl border border-foreground px-4 py-2 text-sm font-light hover:bg-foreground hover:text-background">
          <span className="group-hover:underline">Your Saves</span>
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
