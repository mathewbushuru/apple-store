import {
  ArrowUpRight,
  ChevronRight,
  Truck,
  Laptop,
  CreditCard,
  Smartphone,
  Smile,
} from "lucide-react";

export default function App() {
  return (
    <main>
      {/* Hero  */}
      <div>
        <div className="flex flex-col gap-4 p-4 pb-10 pt-20 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:pb-20 xl:px-32">
          <p className="pr-6 text-3xl font-semibold tracking-wide text-zinc-500 sm:max-w-screen-md sm:text-[44px] sm:leading-[1.10] xl:text-5xl">
            <span className="text-foreground">Store. </span>
            The best way to buy the products you love.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8">
                <img
                  src="/store-chat-specialist-icon.jpeg"
                  className="w-8 rounded-full"
                  alt="Chat with a store specialist"
                />
              </div>
              <div>
                <p className="font-semibold">Need shopping help?</p>
                <p className="flex items-center font-light text-blue-500 hover:cursor-pointer hover:underline">
                  Ask a Specialist <ArrowUpRight className="inline w-4" />
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="w-8">
                <svg
                  width="25"
                  height="35"
                  viewBox="0 0 25 35"
                  aria-hidden="true"
                >
                  <path d="m0 0h25v35h-25z" fill="none"></path>
                  <path d="m12.4934 4.675a10.5617 10.5617 0 0 1 4.177.8275 10.8868 10.8868 0 0 1 5.7467 5.747 10.4988 10.4988 0 0 1 .8329 4.1777 10.3219 10.3219 0 0 1 -.6421 3.5951 10.8948 10.8948 0 0 1 -1.8669 3.2062 12.8406 12.8406 0 0 1 -2.9537 2.5775c-.984.6179-1.8226 1.1843-2.4931 1.6839a9.5187 9.5187 0 0 0 -1.7742 1.6788 6.8587 6.8587 0 0 0 -1.02 1.8034 6.8213 6.8213 0 0 0 -1.0278-1.8062 9.8247 9.8247 0 0 0 -1.7708-1.6742c-.6644-.4987-1.5014-1.0658-2.485-1.6834a12.5961 12.5961 0 0 1 -2.9617-2.5777 10.99 10.99 0 0 1 -1.8636-3.2083 10.3421 10.3421 0 0 1 -.6411-3.5951 10.5153 10.5153 0 0 1 .8319-4.1772 10.9669 10.9669 0 0 1 2.3209-3.4333 10.85 10.85 0 0 1 3.4278-2.3142 10.52 10.52 0 0 1 4.1628-.8275m0-1a11.4634 11.4634 0 0 0 -4.5561.9081 11.89 11.89 0 0 0 -6.2738 6.2709 11.4566 11.4566 0 0 0 -.9135 4.5732 11.2871 11.2871 0 0 0 .703 3.9416 11.9349 11.9349 0 0 0 2.0323 3.5006 13.5349 13.5349 0 0 0 3.1956 2.7835q1.446.9079 2.42 1.6384a8.7962 8.7962 0 0 1 1.5912 1.5 5.9225 5.9225 0 0 1 .9731 1.81q.25.7236.8285.7238t.8417-.7238a5.9779 5.9779 0 0 1 .967-1.81 8.4991 8.4991 0 0 1 1.59-1.5q.98-.73 2.4268-1.6384a13.7877 13.7877 0 0 0 3.19-2.7835 11.8367 11.8367 0 0 0 2.0373-3.5006 11.263 11.263 0 0 0 .7041-3.9416 11.44 11.44 0 0 0 -.9145-4.5732 11.8867 11.8867 0 0 0 -6.2717-6.2709 11.5044 11.5044 0 0 0 -4.57-.9081zm3.8566 9.71a2.3254 2.3254 0 0 0 -1.078 1.94 2.2152 2.2152 0 0 0 1.353 2.0506 4.7326 4.7326 0 0 1 -.693 1.4443c-.429.6174-.902 1.2458-1.584 1.2458-.693 0-.858-.4079-1.661-.4079-.77 0-1.045.4189-1.672.4189-.638 0-1.078-.5733-1.584-1.29a6.3114 6.3114 0 0 1 -1.056-3.3625 2.7185 2.7185 0 0 1 2.541-3.0208c.682 0 1.232.441 1.65.441.407 0 1.023-.4631 1.782-.4631a2.3483 2.3483 0 0 1 2.002 1.0036zm-3.729-1.1135c-.055 0-.099-.0111-.143-.0111 0-.033-.011-.11-.011-.1874a2.26 2.26 0 0 1 .561-1.3781 2.19 2.19 0 0 1 1.485-.7717 1.0735 1.0735 0 0 1 .011.1984 2.3284 2.3284 0 0 1 -.528 1.4222 1.9664 1.9664 0 0 1 -1.375.7276z"></path>
                </svg>
              </div>
              <div>
                <p className="font-semibold">Visit an Apple Store</p>
                <p className="flex items-center font-light text-blue-500 hover:cursor-pointer hover:underline">
                  Find one near you <ChevronRight className="inline w-4" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="scrollbar-hide flex gap-2 overflow-x-auto p-4 pb-10 sm:gap-6 sm:px-8 sm:pb-20 xl:pl-32">
          <div className="flex min-w-fit flex-col items-center gap-4">
            <img src="/mac.png" alt="mac" className="h-20 cursor-pointer" />
            <p className="font-semibold hover:cursor-pointer hover:underline">
              Mac
            </p>
          </div>

          <div className="flex min-w-fit flex-col items-center gap-4">
            <img src="/iphone.png" alt="mac" className="h-20 cursor-pointer" />
            <p className="font-semibold hover:cursor-pointer hover:underline">
              iPhone
            </p>
          </div>

          <div className="flex min-w-fit flex-col items-center gap-4">
            <img src="/iPad.png" alt="mac" className="h-20 cursor-pointer" />
            <p className="font-semibold hover:cursor-pointer hover:underline">
              iPad
            </p>
          </div>

          <div className="flex min-w-fit flex-col items-center gap-4">
            <img src="/watch.png" alt="mac" className="h-20 cursor-pointer" />
            <p className="font-semibold hover:cursor-pointer hover:underline">
              Apple Watch
            </p>
          </div>

          <div className="flex min-w-fit flex-col items-center gap-4">
            <img
              src="/vision-pro.png"
              alt="mac"
              className="h-20 cursor-pointer"
            />
            <p className="font-semibold hover:cursor-pointer hover:underline">
              Apple Vision Pro
            </p>
          </div>

          <div className="flex min-w-fit flex-col items-center gap-4">
            <img src="/airpods.png" alt="mac" className="h-20 cursor-pointer" />
            <p className="font-semibold hover:cursor-pointer hover:underline">
              AirPods
            </p>
          </div>

          <div className="flex min-w-fit flex-col items-center gap-4">
            <img src="/airtags.png" alt="mac" className="h-20 cursor-pointer" />
            <p className="font-semibold hover:cursor-pointer hover:underline">
              AirTag
            </p>
          </div>

          <div className="flex min-w-fit flex-col items-center gap-4">
            <img src="/appletv.png" alt="mac" className="h-20 cursor-pointer" />
            <p className="font-semibold hover:cursor-pointer hover:underline">
              Apple TV 4K
            </p>
          </div>

          <div className="flex min-w-fit flex-col items-center gap-4">
            <img src="/homepod.png" alt="mac" className="h-20 cursor-pointer" />
            <p className="font-semibold hover:cursor-pointer hover:underline">
              HomePod
            </p>
          </div>

          <div className="flex min-w-fit flex-col items-center gap-4">
            <img
              src="/accessories.png"
              alt="mac"
              className="h-20 cursor-pointer"
            />
            <p className="font-semibold hover:cursor-pointer hover:underline">
              Accessories
            </p>
          </div>

          <div className="flex min-w-fit flex-col items-center gap-4">
            <img
              src="/holiday-giftcards.png"
              alt="mac"
              className="h-20 cursor-pointer"
            />
            <p className="font-semibold hover:cursor-pointer hover:underline">
              Apple Gift Card
            </p>
          </div>
        </div>
      </div>

      {/* Product cards  */}
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
              <p className="mb-1 font-semibold">
                Five fresh colors. Bold sound.
              </p>
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
              <p className="mb-1 font-semibold">
                Welcome to spacial computing.
              </p>
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

      {/* Help Section  */}
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
                Learn about latest features and how to go further with your
                apple devices.
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

      {/* Why shop with us  */}
      <div>
        <p className="p-4 pb-2 text-2xl font-semibold leading-tight tracking-wide text-zinc-500 sm:px-8 sm:text-[28px] sm:leading-[1.10] xl:px-32 xl:text-3xl">
          <span className="text-foreground">The Apple Store Difference. </span>
          Even more reasons to shop with us.
        </p>

        <div className="scrollbar-hide flex gap-4 overflow-x-auto p-4 pb-8 sm:gap-6 sm:p-8 xl:pl-32 xl:pr-24">
          <div className="min-w-72 cursor-pointer rounded-2xl bg-white p-6 pb-12 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg sm:min-w-80">
            <Truck className="mb-1 h-16 w-16 stroke-[1.2] text-lime-500 sm:mb-2" />
            <p className="text-xl font-semibold sm:text-2xl">
              Enjoy <span className="text-lime-500">two-hour delivery</span>{" "}
              from an Apple Store,{" "}
              <span className="text-lime-500">free delivery</span>, or{" "}
              <span className="text-lime-500">easy pickup.</span>
            </p>
          </div>

          <div className="min-w-72 cursor-pointer rounded-2xl bg-white p-6 pb-12 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg sm:min-w-80">
            <Laptop className="mb-1 h-16 w-16 stroke-[1.2] text-blue-500 sm:mb-2" />
            <p className="text-xl font-semibold sm:text-2xl">
              <span className="text-blue-500">
                Trade in your current device.
              </span>{" "}
              Get credit toward a new one.
            </p>
          </div>

          <div className="min-w-72 cursor-pointer rounded-2xl bg-white p-6 pb-12 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg sm:min-w-80">
            <CreditCard className="mb-1 h-16 w-16 stroke-[1.2] text-lime-500 sm:mb-2" />
            <p className="text-xl font-semibold sm:text-2xl">
              Pay in full or{" "}
              <span className="text-lime-500">pay over time.</span> Your choice.
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

      {/* Accessories  */}
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
                Your favourite accessories. Now available in bold new colours
                and innovative new features.
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

      {/* Music  */}
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

      {/* Quick Links  */}
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
    </main>
  );
}
