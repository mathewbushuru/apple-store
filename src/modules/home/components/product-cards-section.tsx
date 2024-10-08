export default function ProductCardsSection() {
  return (
    <div>
      <p className="p-4 pb-2 text-2xl font-semibold leading-tight tracking-wide text-zinc-500 sm:px-8 sm:text-[28px] sm:leading-[1.10] xl:px-32 xl:text-3xl">
        <span className="text-foreground">The latest. </span>
        Take a look at what's new, right now.
      </p>

      <div className="scrollbar-hide flex gap-4 overflow-x-auto p-4 pb-8 sm:p-8 sm:pb-12 xl:gap-6 xl:pl-32">
        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/iphone-16-pro.jpeg"
            alt="Iphone 16 Pro"
            className="h-[450px] w-[300px] object-cover sm:h-[500px] sm:w-[400px]"
          />
          <div className="absolute top-[10%] px-8 text-background xl:space-y-2">
            <p className="text-xl font-semibold xl:text-3xl">iPhone 16 Pro</p>
            <p className="mb-1 font-semibold">Hello Apple Intelligence.</p>
            <p className="text-sm">From $999 or $41.62/mo. for 24 mo.</p>
          </div>
        </div>

        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/watch-s10.jpeg"
            alt="Iphone 16 Pro"
            className="h-[450px] w-[300px] object-cover sm:h-[500px] sm:w-[400px]"
          />
          <div className="absolute top-[10%] px-8 text-foreground xl:space-y-2">
            <p className="text-xl font-semibold xl:text-3xl">
              Apple Watch Series 10
            </p>
            <p className="mb-1 font-semibold">Thinstant Classic.</p>
            <p className="text-sm">From $399 or $33.25/mo. for 12 mo.</p>
          </div>
        </div>

        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/iphone-16.jpeg"
            alt="Iphone 16 Pro"
            className="h-[450px] w-[300px] object-cover sm:h-[500px] sm:w-[400px]"
          />
          <div className="absolute top-[10%] px-8 text-background xl:space-y-2">
            <p className="text-xl font-semibold xl:text-3xl">iPhone 16</p>
            <p className="mb-1 font-semibold">Hello Apple Intelligence.</p>
            <p className="text-sm">From $799 or $33.29/mo. for 24 mo.</p>
          </div>
        </div>

        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/watch-ultra.jpeg"
            alt="Iphone 16 Pro"
            className="h-[450px] w-[300px] object-cover sm:h-[500px] sm:w-[400px]"
          />
          <div className="absolute top-[10%] px-8 text-background xl:space-y-2">
            <p className="text-xl font-semibold xl:text-3xl">
              Apple Watch Ultra 2
            </p>
            <p className="mb-1 font-semibold">New finish. Never quit.</p>
            <p className="text-sm">From $799 or $66.58/mo. for 12 mo.</p>
          </div>
        </div>

        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/airpods4.jpeg"
            alt="Iphone 16 Pro"
            className="h-[450px] w-[300px] object-cover sm:h-[500px] sm:w-[400px]"
          />
          <div className="absolute top-[10%] px-8 text-foreground xl:space-y-2">
            <p className="text-xl font-semibold xl:text-3xl">AirPods 4</p>
            <p className="mb-1 font-semibold">Iconic. Now supersonic.</p>
            <p className="text-sm">
              Starting at $129 <br /> with Active Noise Cancellation $179
            </p>
          </div>
        </div>

        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/airpods-pro2.jpeg"
            alt="Iphone 16 Pro"
            className="h-[450px] w-[300px] object-cover sm:h-[500px] sm:w-[400px]"
          />
          <div className="absolute top-[10%] px-8 text-background xl:space-y-2">
            <p className="text-xl font-semibold xl:text-3xl">AirPods Pro 2</p>
            <p className="mb-1 max-w-xs font-semibold">
              With an all-in-one hearing health experience coming soon.
            </p>
            <p className="text-sm">$249 or $41.50/mo. for 6 mo.</p>
          </div>
        </div>

        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/airpods-max.jpeg"
            alt="Iphone 16 Pro"
            className="h-[450px] w-[300px] object-cover sm:h-[500px] sm:w-[400px]"
          />
          <div className="absolute top-[10%] px-8 text-foreground xl:space-y-2">
            <p className="text-xl font-semibold xl:text-3xl">AirPods Max</p>
            <p className="mb-1 font-semibold">Five fresh colors. Bold sound.</p>
            <p className="text-sm">$549 or $91.50/mo. for 6 mo.</p>
          </div>
        </div>

        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/vision-pro.jpeg"
            alt="Iphone 16 Pro"
            className="h-[450px] w-[300px] object-cover sm:h-[500px] sm:w-[400px]"
          />
          <div className="text-foregound absolute top-[10%] px-8 xl:space-y-2">
            <p className="text-xl font-semibold xl:text-3xl">
              Apple Vision Pro
            </p>
            <p className="mb-1 font-semibold">Welcome to spacial computing.</p>
            <p className="text-sm">From $3499 or $291.58/mo. for 12 mo.</p>
          </div>
        </div>

        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/macbook-air.jpeg"
            alt="Iphone 16 Pro"
            className="h-[450px] w-[300px] object-cover sm:h-[500px] sm:w-[400px]"
          />
          <div className="absolute top-[10%] px-8 text-foreground xl:space-y-2">
            <p className="text-xl font-semibold xl:text-3xl">MacBook Air</p>
            <p className="mb-1 font-semibold">Designed to go places.</p>
            <p className="text-sm">From $999 or $83.25/mo. for 12 mo.</p>
          </div>
        </div>

        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/ipad-air.jpeg"
            alt="Iphone 16 Pro"
            className="h-[450px] w-[300px] object-cover sm:h-[500px] sm:w-[400px]"
          />
          <div className="absolute top-[10%] px-8 text-foreground xl:space-y-2">
            <p className="text-xl font-semibold xl:text-3xl">iPad Air</p>
            <p className="mb-1 font-semibold">Fresh air.</p>
            <p className="text-sm">From $999 or $41.62/mo. for 24 mo.</p>
          </div>
        </div>

        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/macbook-pro.jpeg"
            alt="Iphone 16 Pro"
            className="h-[450px] w-[300px] object-cover sm:h-[500px] sm:w-[400px]"
          />
          <div className="absolute top-[10%] px-8 text-foreground xl:space-y-2">
            <p className="text-xl font-semibold xl:text-3xl">Macbook Pro</p>
            <p className="mb-1 font-semibold">
              Mind-blowing.
              <br />
              Head-turning.
            </p>
            <p className="text-sm">From $1599 or $133.25/mo. for 12 mo.</p>
          </div>
        </div>

        <div className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/ipad-pro.jpeg"
            alt="Iphone 16 Pro"
            className="h-[450px] w-[300px] object-cover sm:h-[500px] sm:w-[400px]"
          />
          <div className="absolute top-[10%] px-8 text-background xl:space-y-2">
            <p className="text-xl font-semibold xl:text-3xl">iPad Pro</p>
            <p className="mb-1 font-semibold">Thinpossible.</p>
            <p className="text-sm">From $999 or $83.25/mo. for 12 mo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
