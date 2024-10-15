import { cn } from "@/lib/utils";

export default function ProductCardsSection() {
  return (
    <div>
      <p className="p-4 pb-2 text-2xl font-semibold leading-tight tracking-wide text-zinc-500 sm:px-8 sm:text-[28px] sm:leading-[1.10] xl:px-32 xl:text-3xl">
        <span className="text-foreground">The latest. </span>
        Take a look at what's new, right now.
      </p>

      <div className="scrollbar-hide flex gap-4 overflow-x-auto p-4 pb-8 sm:p-8 sm:pb-12 xl:gap-6 xl:pl-32">
        {productCardsInfoArr.map((productCard) => (
          <div
            className="relative min-w-fit cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            key={productCard.name}
          >
            <img
              src={productCard.imgSrc}
              alt={productCard.name}
              className="h-[450px] w-[300px] object-cover sm:h-[500px] sm:w-[400px]"
            />
            <div
              className={cn(
                "absolute top-[10%] px-8 xl:space-y-2",
                productCard.hasDarkBackground
                  ? "text-background"
                  : "text-foreground",
              )}
            >
              <p className="text-xl font-semibold xl:text-3xl">
                {productCard.name}
              </p>
              <p className="mb-1 font-semibold">{productCard.tagLineNode}</p>
              <p className="text-sm">{productCard.priceTextNode}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const productCardsInfoArr = [
  {
    name: "iPhone 16 Pro",
    tagLineNode: "Hello Apple Intelligence.",
    priceTextNode: "From $999 or $41.62/mo. for 24 mo.",
    imgSrc: "/iphone-16-pro.jpeg",
    hasDarkBackground: true,
  },
  {
    name: "Apple Watch Series 10",
    tagLineNode: "Thinstant Classic.",
    priceTextNode: "From $399 or $33.25/mo. for 12 mo.",
    imgSrc: "/watch-s10.jpeg",
    hasDarkBackground: false,
  },
  {
    name: "iPhone 16",
    tagLineNode: "Hello Apple Intelligence.",
    priceTextNode: "From $799 or $33.29/mo. for 24 mo.",
    imgSrc: "/iphone-16.jpeg",
    hasDarkBackground: true,
  },
  {
    name: "Apple Watch Ultra 2",
    tagLineNode: "New finish. Never quit.",
    priceTextNode: "From $799 or $66.58/mo. for 12 mo.",
    imgSrc: "/watch-ultra.jpeg",
    hasDarkBackground: true,
  },
  {
    name: "AirPods 4",
    tagLineNode: "Iconic. Now supersonic.",
    priceTextNode: (
      <>
        Starting at $129 <br /> with Active Noise Cancellation $179
      </>
    ),
    imgSrc: "/airpods4.jpeg",
    hasDarkBackground: false,
  },
  {
    name: "AirPods Pro 2",
    tagLineNode: "With an all-in-one hearing health experience coming soon.",
    priceTextNode: "$249 or $41.50/mo. for 6 mo.",
    imgSrc: "/airpods-pro2.jpeg",
    hasDarkBackground: true,
  },
  {
    name: "AirPods Max",
    tagLineNode: "Five fresh colors. Bold sound.",
    priceTextNode: "$549 or $91.50/mo. for 6 mo.",
    imgSrc: "/airpods-max.jpeg",
    hasDarkBackground: false,
  },
  {
    name: "Apple Vision Pro",
    tagLineNode: "Welcome to spacial computing",
    priceTextNode: "From $3499 or $291.58/mo. for 12 mo.",
    imgSrc: "/vision-pro.jpeg",
    hasDarkBackground: false,
  },
  {
    name: "MacBook Air",
    tagLineNode: "Designed to go places.",
    priceTextNode: "From $999 or $83.25/mo. for 12 mo.",
    imgSrc: "/macbook-air.jpeg",
    hasDarkBackground: false,
  },
  {
    name: "iPad Air",
    tagLineNode: "Fresh air.",
    priceTextNode: "From $999 or $41.62/mo. for 24 mo.",
    imgSrc: "/ipad-air.jpeg",
    hasDarkBackground: false,
  },
  {
    name: "Macbook Pro",
    tagLineNode: (
      <>
        Mind-blowing.
        <br />
        Head-turning.
      </>
    ),
    priceTextNode: "From $1599 or $133.25/mo. for 12 mo.",
    imgSrc: "/macbook-pro.jpeg",
    hasDarkBackground: false,
  },
  {
    name: "iPad Pro",
    tagLineNode: "Thinpossible.",
    priceTextNode: "From $999 or $83.25/mo. for 12 mo.",
    imgSrc: "/ipad-pro.jpeg",
    hasDarkBackground: true,
  },
];
