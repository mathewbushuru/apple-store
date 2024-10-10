import { ArrowUpRight, ChevronRight } from "lucide-react";

import InfoLinkItem from "@/components/info-link-item";

export default function HeroSection() {
  return (
    <section>
      <div className="flex flex-col gap-4 p-4 pb-10 pt-20 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:pb-20 xl:px-32">
        <p className="pr-6 text-3xl font-semibold tracking-wide text-zinc-500 sm:max-w-screen-md sm:text-[44px] sm:leading-[1.10] xl:text-5xl">
          <span className="text-foreground">Store. </span>
          The best way to buy the products you love.
        </p>

        <div className="space-y-4">
          <InfoLinkItem
            icon={
              <img
                src="/store-chat-specialist-icon.jpeg"
                className="w-8 rounded-full"
                alt="Chat with a store specialist"
              />
            }
            description="Need shopping help?"
            linkTextNode={
              <>
                Ask a Specialist <ArrowUpRight className="inline w-4" />
              </>
            }
            linkUrl="/contact"
          />

          <InfoLinkItem
            icon={
              <svg
                width="25"
                height="35"
                viewBox="0 0 25 35"
                aria-hidden="true"
              >
                <path d="m0 0h25v35h-25z" fill="none"></path>
                <path d="m12.4934 4.675a10.5617 10.5617 0 0 1 4.177.8275 10.8868 10.8868 0 0 1 5.7467 5.747 10.4988 10.4988 0 0 1 .8329 4.1777 10.3219 10.3219 0 0 1 -.6421 3.5951 10.8948 10.8948 0 0 1 -1.8669 3.2062 12.8406 12.8406 0 0 1 -2.9537 2.5775c-.984.6179-1.8226 1.1843-2.4931 1.6839a9.5187 9.5187 0 0 0 -1.7742 1.6788 6.8587 6.8587 0 0 0 -1.02 1.8034 6.8213 6.8213 0 0 0 -1.0278-1.8062 9.8247 9.8247 0 0 0 -1.7708-1.6742c-.6644-.4987-1.5014-1.0658-2.485-1.6834a12.5961 12.5961 0 0 1 -2.9617-2.5777 10.99 10.99 0 0 1 -1.8636-3.2083 10.3421 10.3421 0 0 1 -.6411-3.5951 10.5153 10.5153 0 0 1 .8319-4.1772 10.9669 10.9669 0 0 1 2.3209-3.4333 10.85 10.85 0 0 1 3.4278-2.3142 10.52 10.52 0 0 1 4.1628-.8275m0-1a11.4634 11.4634 0 0 0 -4.5561.9081 11.89 11.89 0 0 0 -6.2738 6.2709 11.4566 11.4566 0 0 0 -.9135 4.5732 11.2871 11.2871 0 0 0 .703 3.9416 11.9349 11.9349 0 0 0 2.0323 3.5006 13.5349 13.5349 0 0 0 3.1956 2.7835q1.446.9079 2.42 1.6384a8.7962 8.7962 0 0 1 1.5912 1.5 5.9225 5.9225 0 0 1 .9731 1.81q.25.7236.8285.7238t.8417-.7238a5.9779 5.9779 0 0 1 .967-1.81 8.4991 8.4991 0 0 1 1.59-1.5q.98-.73 2.4268-1.6384a13.7877 13.7877 0 0 0 3.19-2.7835 11.8367 11.8367 0 0 0 2.0373-3.5006 11.263 11.263 0 0 0 .7041-3.9416 11.44 11.44 0 0 0 -.9145-4.5732 11.8867 11.8867 0 0 0 -6.2717-6.2709 11.5044 11.5044 0 0 0 -4.57-.9081zm3.8566 9.71a2.3254 2.3254 0 0 0 -1.078 1.94 2.2152 2.2152 0 0 0 1.353 2.0506 4.7326 4.7326 0 0 1 -.693 1.4443c-.429.6174-.902 1.2458-1.584 1.2458-.693 0-.858-.4079-1.661-.4079-.77 0-1.045.4189-1.672.4189-.638 0-1.078-.5733-1.584-1.29a6.3114 6.3114 0 0 1 -1.056-3.3625 2.7185 2.7185 0 0 1 2.541-3.0208c.682 0 1.232.441 1.65.441.407 0 1.023-.4631 1.782-.4631a2.3483 2.3483 0 0 1 2.002 1.0036zm-3.729-1.1135c-.055 0-.099-.0111-.143-.0111 0-.033-.011-.11-.011-.1874a2.26 2.26 0 0 1 .561-1.3781 2.19 2.19 0 0 1 1.485-.7717 1.0735 1.0735 0 0 1 .011.1984 2.3284 2.3284 0 0 1 -.528 1.4222 1.9664 1.9664 0 0 1 -1.375.7276z"></path>
              </svg>
            }
            description="Visit an Apple Store"
            linkTextNode={
              <>
                Find one near you <ChevronRight className="inline w-4" />
              </>
            }
            linkUrl="/"
          />
        </div>
      </div>

      <div className="scrollbar-hide flex gap-2 overflow-x-auto p-4 pb-10 sm:gap-6 sm:px-8 sm:pb-20 xl:pl-32">
        {productsArr.map((product) => (
          <div
            key={product.name}
            className="flex min-w-fit flex-col items-center gap-4"
          >
            <img
              src={product.imgSrc}
              alt={product.name}
              className="h-20 cursor-pointer"
            />
            <p className="font-semibold hover:cursor-pointer hover:underline">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const productsArr = [
  {
    name: "Mac",
    imgSrc: "/mac.png",
    link: "/",
  },
  {
    name: "iPhone",
    imgSrc: "/iphone.png",
    link: "/",
  },
  {
    name: "iPad",
    imgSrc: "/iPad.png",
    link: "/",
  },
  {
    name: "Apple Watch",
    imgSrc: "/watch.png",
    link: "/",
  },
  {
    name: "Apple Vision Pro",
    imgSrc: "/vision-pro.png",
    link: "/",
  },
  {
    name: "AirPods",
    imgSrc: "/airpods.png",
    link: "/",
  },
  {
    name: "AirTags",
    imgSrc: "/airtags.png",
    link: "/",
  },
  {
    name: "Apple TV 4K",
    imgSrc: "/appletv.png",
    link: "/",
  },
  {
    name: "HomePod",
    imgSrc: "/homepod.png",
    link: "/",
  },
  {
    name: "Accessories",
    imgSrc: "/accessories.png",
    link: "/",
  },
  {
    name: "Apple Gift Card",
    imgSrc: "/holiday-giftcards.png",
    link: "/",
  },
];
