const fs = require("fs");
const items = require("./portfolio-extracted.json");
const mapped = items.map((x, i) => ({ id: String(i + 1), ...x }));
const out = `export type FullPortfolioItem = {
  id: string;
  category: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  orderedBy: string;
};

export const fullPortfolioItems: FullPortfolioItem[] = ${JSON.stringify(
  mapped,
  null,
  2
)};
`;
fs.writeFileSync("app/lib/full-portfolio-data.ts", out);
console.log("wrote", mapped.length);
