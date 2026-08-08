const fs = require("fs");
const html = fs.readFileSync("legacy/full-reviews.html", "utf8");
const articleRe = /<article class="bg-white rounded-lg p-4 shadow-md">([\s\S]*?)<\/article>/g;
const reviews = [];
let m;
let i = 0;
while ((m = articleRe.exec(html))) {
  i += 1;
  const b = m[1];
  const avatar = b.match(/src="(https:\/\/i\.pravatar[^"]+)"/)?.[1] || "";
  const username = b.match(/<p class="font-medium">([^<]+)<\/p>/)?.[1] || "";
  const flag = b.match(/flagcdn\.com\/[^"]+/)?.[0]
    ? `https://${b.match(/flagcdn\.com\/[^"]+/)?.[0]}`
    : "";
  const timeAgo = b.match(/<p class="text-xs text-gray-500">([^<]+)<\/p>/)?.[1] || "";
  const text =
    b.match(/<p class="mt-3 text-gray-700">([\s\S]*?)<\/p>/)?.[1]?.trim() || "";
  const gigImage =
    b.match(
      /src="(https:\/\/res\.cloudinary\.com\/[^"]+)"[^>]*alt="gig"/
    )?.[1] ||
    b.match(/alt="gig"[^>]*src="([^"]+)"/)?.[1] ||
    b.match(
      /src="(https:\/\/res\.cloudinary\.com\/[^"]+)"[\s\S]{0,80}class="gig-thumb"/
    )?.[1] ||
    "";
  const meta =
    b.match(/<div class="text-xs text-gray-500">([^<]*(?:\$|days)[^<]*)<\/div>/)?.[1]?.trim() ||
    "";
  const replyBlock = b.match(
    /Seller's Response<\/div>\s*<div class="mt-1">([\s\S]*?)<\/div>/
  );
  const parts = meta.split("•").map((s) => s.trim());
  reviews.push({
    id: `fr${i}`,
    username,
    avatar,
    flag,
    timeAgo,
    rating: 5,
    text,
    priceRange: parts[0] || undefined,
    duration: parts[1] || undefined,
    serviceType: parts[2] || undefined,
    gigImage: gigImage || undefined,
    reply: replyBlock?.[1]?.trim(),
    showHelpful: !replyBlock,
  });
}

// Also pull additionalReviews from JS
const js = fs.readFileSync("legacy/js/full-reviews.js", "utf8");
const arrMatch = js.match(/const additionalReviews = (\[[\s\S]*?\]);/);
let additional = [];
if (arrMatch) {
  // eslint-disable-next-line no-eval
  additional = eval(arrMatch[1]);
}
const mappedAdditional = additional.map((r, idx) => {
  const parts = (r.gigDetails || "").split("•").map((s) => s.trim());
  return {
    id: `add${idx + 1}`,
    username: r.username,
    avatar: r.avatar,
    flag: r.flag,
    country: r.country,
    timeAgo: r.timeAgo,
    rating: r.rating,
    text: r.review,
    priceRange: parts[0],
    duration: parts[1],
    serviceType: parts[2],
    gigImage: r.gigImage,
    reply: r.hasResponse ? r.response : undefined,
    showHelpful: !r.hasResponse,
  };
});

const out = `import type { Review } from "./reviews-data";

export const fullReviews: Review[] = ${JSON.stringify(
  [...reviews, ...mappedAdditional],
  null,
  2
)};
`;
fs.writeFileSync("app/lib/full-reviews-data.ts", out);
console.log("html reviews", reviews.length, "additional", mappedAdditional.length);
