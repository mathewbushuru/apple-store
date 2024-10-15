export default function ServicesSection() {
  return (
    <div>
      <p className="p-4 pb-2 text-2xl font-semibold leading-tight tracking-wide text-zinc-500 sm:px-8 sm:text-[28px] sm:leading-[1.10] xl:px-32 xl:text-3xl">
        <span className="text-foreground">The Apple Experience. </span>
        Do even more with Apple products and services.
      </p>

      <div className="scrollbar-hide flex gap-4 overflow-x-auto p-4 pb-8 sm:gap-6 sm:p-8 xl:pl-32 xl:pr-24">
        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/mlsleagues.jpeg"
            alt="Accessories"
            className="h-[450px] w-[300px] object-cover shadow-md sm:h-[500px] sm:w-[480px]"
          />
          <div className="absolute top-[5%] px-8 text-foreground xl:space-y-2">
            <p className="mb-2 text-sm uppercase text-muted-foreground">
              MLS Season Pass
            </p>
            <p className="text-xl font-semibold sm:text-3xl">
              Sign up for MLS Season Pass on Apple TV
            </p>
            <p className="max-w-xs font-light leading-tight">&nbsp;</p>
          </div>
        </div>

        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/subscriptions.jpeg"
            alt="Accessories"
            className="h-[450px] w-[300px] object-cover shadow-md sm:h-[500px] sm:w-[480px]"
          />
          <div className="absolute top-[5%] px-8 text-foreground xl:space-y-2">
            <p className="mb-2 text-sm uppercase text-muted-foreground">
              &nbsp;
            </p>
            <p className="text-xl font-semibold sm:text-3xl">
              Six Apple services. <br /> One easy subscription.
            </p>
            <p className="max-w-xs font-light leading-tight">&nbsp;</p>
          </div>
        </div>

        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/applecare.jpeg"
            alt="Accessories"
            className="h-[450px] w-[300px] object-cover shadow-md sm:h-[500px] sm:w-[480px]"
          />
          <div className="absolute top-[5%] px-8 text-foreground xl:space-y-2">
            <p className="mb-2 text-sm uppercase text-muted-foreground">
              &nbsp;
            </p>
            <p className="text-xl font-semibold sm:text-3xl">
              We've got you covered.
            </p>
            <p className="max-w-[360px] font-light leading-tight sm:text-lg">
              AppleCare+ now comes with unlimited repairs for accidental damage
              protection.
            </p>
          </div>
        </div>

        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/applepay.jpeg"
            alt="Accessories"
            className="h-[450px] w-[300px] object-cover shadow-md sm:h-[500px] sm:w-[480px]"
          />
          <div className="absolute top-[5%] px-8 text-foreground xl:space-y-2">
            <p className="mb-2 text-sm uppercase text-muted-foreground">
              &nbsp;
            </p>
            <p className="text-xl font-semibold sm:text-3xl">
              Discover all the ways to use Apple Pay.
            </p>
            <p className="max-w-xs font-light leading-tight">&nbsp;</p>
          </div>
        </div>

        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/homekit.jpeg"
            alt="Accessories"
            className="h-[450px] w-[300px] object-cover shadow-md sm:h-[500px] sm:w-[480px]"
          />
          <div className="absolute top-[5%] px-8 text-foreground xl:space-y-2">
            <p className="mb-2 text-sm uppercase text-muted-foreground">Home</p>
            <p className="text-xl font-semibold sm:text-3xl">
              See how an app can control your entire home.
            </p>
            <p className="max-w-xs font-light leading-tight">&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}
