const fs = require("fs");
const html = fs.readFileSync("legacy/full-portfolio.html", "utf8");
const blockRe =
  /<div class="portfolio-item[^"]*" data-category="([^"]+)">([\s\S]*?)<\/div>\s*<\/div>/g;
const items = [];
let m;
while ((m = blockRe.exec(html))) {
  const category = m[1];
  const block = m[2];
  const img = block.match(/src="([^"]+)"/);
  const alt = block.match(/alt="([^"]+)"/);
  const title = block.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
  const desc = block.match(/<p class="text-sm text-gray-600">([\s\S]*?)<\/p>/);
  const ordered = block.match(
    /Ordered by <span class="font-medium text-gray-800">([\s\S]*?)<\/span>/
  );
  items.push({
    category,
    image: img?.[1] || "",
    imageAlt: alt?.[1] || "",
    title: title?.[1]?.trim() || "",
    description: desc?.[1]?.trim() || "",
    orderedBy: ordered?.[1]?.trim() || "",
  });
}
fs.writeFileSync(
  "scripts/portfolio-extracted.json",
  JSON.stringify(items, null, 2)
);
console.log("extracted", items.length);
