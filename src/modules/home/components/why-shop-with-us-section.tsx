import { Truck, Laptop, CreditCard, Smartphone, Smile } from "lucide-react";

export default function WhyShopWithUsSection() {
  return (
    <div>
      <p className="p-4 pb-2 text-2xl font-semibold leading-tight tracking-wide text-zinc-500 sm:px-8 sm:text-[28px] sm:leading-[1.10] xl:px-32 xl:text-3xl">
        <span className="text-foreground">The Apple Store Difference. </span>
        Even more reasons to shop with us.
      </p>

      <div className="scrollbar-hide flex gap-4 overflow-x-auto p-4 pb-8 sm:gap-6 sm:p-8 xl:pl-32 xl:pr-24">
        <div className="min-w-72 cursor-pointer rounded-2xl bg-white p-6 pb-12 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg sm:min-w-80">
          <Truck className="mb-1 h-16 w-16 stroke-[1.2] text-lime-500 sm:mb-2" />
          <p className="text-xl font-semibold sm:text-2xl">
            Enjoy <span className="text-lime-500">two-hour delivery</span> from
            an Apple Store, <span className="text-lime-500">free delivery</span>
            , or <span className="text-lime-500">easy pickup.</span>
          </p>
        </div>

        <div className="min-w-72 cursor-pointer rounded-2xl bg-white p-6 pb-12 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg sm:min-w-80">
          <Laptop className="mb-1 h-16 w-16 stroke-[1.2] text-blue-500 sm:mb-2" />
          <p className="text-xl font-semibold sm:text-2xl">
            <span className="text-blue-500">Trade in your current device.</span>{" "}
            Get credit toward a new one.
          </p>
        </div>

        <div className="min-w-72 cursor-pointer rounded-2xl bg-white p-6 pb-12 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg sm:min-w-80">
          <CreditCard className="mb-1 h-16 w-16 stroke-[1.2] text-lime-500 sm:mb-2" />
          <p className="text-xl font-semibold sm:text-2xl">
            Pay in full or <span className="text-lime-500">pay over time.</span>{" "}
            Your choice.
          </p>
        </div>

        <div className="min-w-72 cursor-pointer rounded-2xl bg-white p-6 pb-12 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg sm:min-w-80">
          <Smartphone className="mb-1 h-16 w-16 stroke-[1.2] text-blue-500 sm:mb-2" />
          <p className="text-xl font-semibold sm:text-2xl">
            Get a <span className="text-blue-500">personalized shopping</span>{" "}
            experience in the
            <span className="text-blue-500"> Apple Store App.</span>
          </p>
        </div>

        <div className="min-w-72 cursor-pointer rounded-2xl bg-white p-6 pb-8 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg sm:min-w-80">
          <Smile className="mb-1 h-16 w-16 stroke-[1.2] text-purple-500 sm:mb-2" />
          <p className="text-xl font-semibold sm:text-2xl">
            Make them yours.{" "}
            <span className="text-purple-500">
              Engrave a mix of emoji, names, and numbers for free.
            </span>
          </p>
        </div>

        <div className="min-w-72 cursor-pointer rounded-2xl bg-white p-6 pb-12 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg sm:min-w-80">
          <svg
            className="h-16 w-16 fill-amber-500"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Apple</title>
            <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
          </svg>
          <p className="mt-1 text-xl font-semibold sm:mt-2 sm:text-2xl">
            <span className="text-amber-500">Customize</span> your Mac and
            create your own style of Apple Watch.
          </p>
        </div>
      </div>
    </div>
  );
}
