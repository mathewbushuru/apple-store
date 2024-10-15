export default function HelpSection() {
  return (
    <div>
      <p className="p-4 pb-2 text-2xl font-semibold leading-tight tracking-wide text-zinc-500 sm:px-8 sm:text-[28px] sm:leading-[1.10] xl:px-32 xl:text-3xl">
        <span className="text-foreground">Help is here. </span>
        Whenever and however you need it.
      </p>

      <div className="scrollbar-hide flex gap-4 overflow-x-auto p-4 pb-8 sm:gap-6 sm:p-8 xl:pl-32 xl:pr-24">
        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/specialist.jpeg"
            alt="Iphone 16 Pro"
            className="h-[450px] w-[300px] object-cover shadow-md sm:h-[500px] sm:w-[520px]"
          />
          <div className="absolute top-[5%] px-8 text-foreground xl:space-y-2">
            <p className="mb-2 text-sm uppercase text-muted-foreground">
              Apple Specialist
            </p>
            <p className="text-xl font-semibold sm:text-3xl">
              Shop one on one with a Specialist. Online or in a store.{" "}
            </p>
          </div>
        </div>

        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/specialist-video.jpeg"
            alt="Iphone 16 Pro"
            className="h-[450px] w-[300px] object-cover shadow-md sm:h-[500px] sm:w-[520px]"
          />
          <div className="absolute top-[5%] px-8 text-foreground xl:space-y-2">
            <p className="mb-2 text-sm uppercase text-muted-foreground">
              &nbsp;
            </p>
            <p className="text-xl font-semibold sm:text-3xl">
              Shop with a Specialist over video.
            </p>
            <p className="max-w-xs font-light leading-tight sm:text-lg">
              Choose your next device in a guided, one-way video session.
            </p>
          </div>
        </div>

        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/store-session.jpeg"
            alt="Iphone 16 Pro"
            className="h-[450px] w-[300px] object-cover shadow-md sm:h-[500px] sm:w-[520px]"
          />
          <div className="absolute top-[5%] px-8 text-foreground xl:space-y-2">
            <p className="mb-2 text-sm uppercase text-muted-foreground">
              Today at Apple
            </p>
            <p className="text-xl font-semibold sm:text-3xl">
              Join free sessions at your Apple Store.
            </p>
            <p className="font-light leading-tight sm:text-lg">
              Learn about latest features and how to go further with your apple
              devices.
            </p>
          </div>
        </div>

        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/personal-setup.jpeg"
            alt="Iphone 16 Pro"
            className="h-[450px] w-[300px] object-cover sm:h-[500px] sm:w-[520px]"
          />
          <div className="absolute top-[5%] px-8 text-foreground xl:space-y-2">
            <p className="mb-2 text-sm uppercase text-muted-foreground">
              &nbsp;
            </p>
            <p className="text-xl font-semibold sm:text-3xl">
              Get to know your new device with Personal Setup.
            </p>
            <p className="font-light leading-tight sm:text-lg">
              Let us guide you through setup, data transfer, and the latest
              features in an online session.
            </p>
          </div>
        </div>

        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/genius-bar.jpeg"
            alt="Iphone 16 Pro"
            className="h-[450px] w-[300px] object-cover shadow-md sm:h-[500px] sm:w-[520px]"
          />
          <div className="absolute top-[5%] px-8 text-foreground xl:space-y-2">
            <p className="mb-2 text-sm uppercase text-muted-foreground">
              &nbsp;
            </p>
            <p className="max-w-sm text-xl font-semibold sm:text-3xl">
              Get expert service and support at the Genius Bar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
