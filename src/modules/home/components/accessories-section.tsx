export default function AccessoriesSection() {
  return (
    <div>
      <p className="p-4 pb-2 text-2xl font-semibold leading-tight tracking-wide text-zinc-500 sm:px-8 sm:text-[28px] sm:leading-[1.10] xl:px-32 xl:text-3xl">
        <span className="text-foreground">Accessories. </span>
        Essentials that pair perfectly with your favourite devices.
      </p>

      <div className="scrollbar-hide flex gap-4 overflow-x-auto p-4 pb-8 sm:gap-6 sm:p-8 xl:pl-32 xl:pr-24">
        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/accessories.jpeg"
            alt="Accessories"
            className="h-[450px] w-[300px] object-cover shadow-md sm:h-[500px] sm:w-[400px]"
          />
          <div className="absolute top-[5%] px-8 text-foreground xl:space-y-2">
            <p className="text-xl font-semibold sm:text-3xl">
              In with the new.
            </p>
            <p className="max-w-xs font-light leading-tight sm:text-lg">
              Your favourite accessories. Now available in bold new colours and
              innovative new features.
            </p>
          </div>
        </div>

        <div className="flex min-w-fit cursor-pointer flex-col items-center justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/iphone16-pro-clear-case.jpeg"
            alt="Accessories"
            className="h-[250px] w-[200px] object-cover sm:mt-8 sm:h-[230px] sm:w-[230px]"
          />
          <div className="mt-4 w-[284px] text-foreground">
            <p className="text-sm text-orange-600">New</p>
            <p className="mt-0.5 h-12 text-lg font-semibold sm:text-xl">
              iPhone 16 Pro Clear Case with MagSafe
            </p>
            <p className="mt-4 font-light">$49.00</p>
          </div>
        </div>

        <div className="flex min-w-fit cursor-pointer flex-col items-center justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/sport-loop.jpeg"
            alt="Accessories"
            className="h-[250px] w-[200px] object-cover sm:mt-8 sm:h-[230px] sm:w-[230px]"
          />
          <div className="mt-4 w-[284px] text-foreground">
            <p className="text-sm text-orange-600">New</p>
            <p className="mt-0.5 h-12 text-lg font-semibold sm:text-xl">
              46mm Plum Sport Loop
            </p>
            <p className="mt-4 font-light">$49.00</p>
          </div>
        </div>

        <div className="flex min-w-fit cursor-pointer flex-col items-center justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/milanese-loop.jpeg"
            alt="Accessories"
            className="h-[250px] w-[200px] object-cover sm:mt-8 sm:h-[230px] sm:w-[230px]"
          />
          <div className="mt-4 w-[284px] text-foreground">
            <p className="text-sm text-orange-600">New</p>
            <p className="mt-0.5 h-12 text-lg font-semibold sm:text-xl">
              49mm Black Titanium Milanese Loop - Medium
            </p>
            <p className="mt-4 font-light">$199.00</p>
          </div>
        </div>

        <div className="flex min-w-fit cursor-pointer flex-col items-center justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/silicone-case.jpeg"
            alt="Accessories"
            className="h-[250px] w-[200px] object-cover sm:mt-8 sm:h-[230px] sm:w-[230px]"
          />
          <div className="mt-4 w-[284px] text-foreground">
            <p className="text-sm text-orange-600">New</p>
            <p className="mt-0.5 h-12 text-lg font-semibold sm:text-xl">
              iPhone 16 Silicone Case with MagSafe - Ultramarine
            </p>
            <p className="mt-4 font-light">$49.00</p>
          </div>
        </div>

        <div className="flex min-w-fit cursor-pointer flex-col items-center justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/finewoven-wallet.jpeg"
            alt="Accessories"
            className="h-[250px] w-[200px] object-cover sm:mt-8 sm:h-[230px] sm:w-[230px]"
          />
          <div className="mt-4 w-[284px] text-foreground">
            <p className="text-sm text-orange-600">New</p>
            <p className="mt-0.5 h-12 text-lg font-semibold sm:text-xl">
              iPhone FineWoven Wallet with MagSafe - Deep Blue
            </p>
            <p className="mt-4 font-light">$59.00</p>
          </div>
        </div>

        <div className="flex min-w-fit cursor-pointer flex-col items-center justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/magsafe-charger.jpeg"
            alt="Accessories"
            className="h-[250px] w-[200px] object-cover sm:mt-8 sm:h-[230px] sm:w-[230px]"
          />
          <div className="mt-4 w-[284px] text-foreground">
            <p className="text-sm text-orange-600">New</p>
            <p className="mt-0.5 h-12 text-lg font-semibold sm:text-xl">
              MagSafe Charger (1 m)
            </p>
            <p className="mt-4 font-light">$39.00</p>
          </div>
        </div>

        <div className="flex min-w-fit cursor-pointer flex-col items-center justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/airtag-ring.jpeg"
            alt="Accessories"
            className="h-[250px] w-[200px] object-cover sm:mt-8 sm:h-[230px] sm:w-[230px]"
          />
          <div className="mt-4 w-[284px] text-foreground">
            <p className="text-sm text-orange-600">New</p>
            <p className="mt-0.5 h-12 text-lg font-semibold sm:text-xl">
              AirTag FineWoven Key Ring - Chartreuse
            </p>
            <p className="mt-4 font-light">$35.00</p>
          </div>
        </div>

        <div className="flex min-w-fit cursor-pointer flex-col items-center justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/pencil-pro.jpeg"
            alt="Accessories"
            className="h-[250px] w-[200px] object-cover sm:mt-8 sm:h-[230px] sm:w-[230px]"
          />
          <div className="mt-4 w-[284px] text-foreground">
            <p className="text-sm text-orange-600">&nbsp;</p>
            <p className="mt-0.5 h-12 text-lg font-semibold sm:text-xl">
              Apple Pencil Pro
            </p>
            <p className="mt-4 font-light">$129.00</p>
          </div>
        </div>

        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/accessories-explore.jpeg"
            alt="Accessories"
            className="h-[450px] w-[300px] object-cover shadow-md sm:h-[500px] sm:w-[400px]"
          />
          <div className="absolute top-[10%] px-8 text-foreground xl:space-y-2">
            <p className="text-xl font-semibold sm:text-3xl">
              Explore all accessories
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
