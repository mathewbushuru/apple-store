export default function MusicSection() {
  return (
    <div>
      <p className="p-4 pb-2 text-2xl font-semibold leading-tight tracking-wide text-zinc-500 sm:px-8 sm:text-[28px] sm:leading-[1.10] xl:px-32 xl:text-3xl">
        <span className="text-foreground">Loud and clear. </span>
        Unparalleled choices for rich, high-quality sound.
      </p>

      <div className="scrollbar-hide flex gap-4 overflow-x-auto p-4 pb-8 sm:gap-6 sm:p-8 xl:pl-32 xl:pr-24">
        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/applemusic.jpeg"
            alt="Accessories"
            className="h-[450px] w-[300px] object-cover shadow-md sm:h-[500px] sm:w-[400px]"
          />
          <div className="absolute top-[5%] px-8 text-foreground xl:space-y-2">
            <p className="text-xl font-semibold sm:text-3xl">
              Get 3 Months of Apple Music free.
            </p>
            <p className="max-w-xs font-light leading-tight sm:text-lg">
              Included with the purchase of select Apple devices.
            </p>
          </div>
        </div>

        <div className="flex min-w-fit cursor-pointer flex-col items-center justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/airpods-pro-2.jpeg"
            alt="Accessories"
            className="h-[250px] w-[200px] object-cover sm:mt-8 sm:h-[230px] sm:w-[230px]"
          />
          <div className="mt-4 w-[284px] text-foreground">
            <p className="text-sm text-orange-600">Free engraving</p>
            <p className="mt-0.5 h-12 text-lg font-semibold sm:text-xl">
              AirPods Pro 2
            </p>
            <p className="mt-4 font-light">$249.00</p>
          </div>
        </div>

        <div className="flex min-w-fit cursor-pointer flex-col items-center justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/airpods-4-anc.jpeg"
            alt="Accessories"
            className="h-[250px] w-[200px] object-cover sm:mt-8 sm:h-[230px] sm:w-[230px]"
          />
          <div className="mt-4 w-[284px] text-foreground">
            <p className="text-sm text-orange-600">Free Engraving</p>
            <p className="mt-0.5 h-12 text-lg font-semibold sm:text-xl">
              AirPods 4 with Active Noise Cancellation
            </p>
            <p className="mt-4 font-light">$179.00</p>
          </div>
        </div>

        <div className="flex min-w-fit cursor-pointer flex-col items-center justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/airpods-max-midnight.jpeg"
            alt="Accessories"
            className="h-[250px] w-[200px] object-cover sm:mt-8 sm:h-[230px] sm:w-[230px]"
          />
          <div className="mt-4 w-[284px] text-foreground">
            <p className="text-sm text-orange-600">Free engraving</p>
            <p className="mt-0.5 h-12 text-lg font-semibold sm:text-xl">
              AirPods Max - Midnight
            </p>
            <p className="mt-4 font-light">$549.00</p>
          </div>
        </div>

        <div className="flex min-w-fit cursor-pointer flex-col items-center justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/homepod.jpeg"
            alt="Accessories"
            className="h-[250px] w-[200px] object-cover sm:mt-8 sm:h-[230px] sm:w-[230px]"
          />
          <div className="mt-4 w-[284px] text-foreground">
            <p className="text-sm text-orange-600">&nbsp;</p>
            <p className="mt-0.5 h-12 text-lg font-semibold sm:text-xl">
              HomePod - Midnight
            </p>
            <p className="mt-4 font-light">$299.00</p>
          </div>
        </div>

        <div className="flex min-w-fit cursor-pointer flex-col items-center justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/beats-pill.jpeg"
            alt="Accessories"
            className="h-[250px] w-[200px] object-cover sm:mt-8 sm:h-[230px] sm:w-[230px]"
          />
          <div className="mt-4 w-[284px] text-foreground">
            <p className="text-sm text-orange-600">New</p>
            <p className="mt-0.5 h-12 text-lg font-semibold sm:text-xl">
              Beats Pill - Wireless Bluetooth® Speaker
            </p>
            <p className="mt-4 font-light">$149.00</p>
          </div>
        </div>

        <div className="flex min-w-fit cursor-pointer flex-col items-center justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/homepod-mini.jpeg"
            alt="Accessories"
            className="h-[250px] w-[200px] object-cover sm:mt-8 sm:h-[230px] sm:w-[230px]"
          />
          <div className="mt-4 w-[284px] text-foreground">
            <p className="text-sm text-orange-600">&nbsp;</p>
            <p className="mt-0.5 h-12 text-lg font-semibold sm:text-xl">
              HomePod Mini - Yellow
            </p>
            <p className="mt-4 font-light">$99.00</p>
          </div>
        </div>

        <div className="flex min-w-fit cursor-pointer flex-col items-center justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/beats-solo.jpeg"
            alt="Accessories"
            className="h-[250px] w-[200px] object-cover sm:mt-8 sm:h-[230px] sm:w-[230px]"
          />
          <div className="mt-4 w-[284px] text-foreground">
            <p className="text-sm text-orange-600">New</p>
            <p className="mt-0.5 h-12 text-lg font-semibold sm:text-xl">
              Beats Solo 4 - On Ear Wireless Headphones - Cloud Pink
            </p>
            <p className="mt-4 font-light">$35.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
