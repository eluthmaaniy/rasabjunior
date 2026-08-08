import FeaturedReviewCard from "@/app/components/FeaturedReviewCard";
import PageShell from "@/app/components/PageShell";
import ReviewCard from "@/app/components/ReviewCard";
import {
  featuredReviews,
  qualityMetrics,
  rating,
  reviewCount,
  reviews,
  starBreakdown,
} from "@/app/lib/data";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <PageShell>
      <section className="mt-8 md:flex md:gap-8">
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold text-heading md:text-2xl">
            {reviewCount} Reviews
          </h2>

          <div className="mt-4 flex items-center gap-4">
            <div>
              <div className="text-3xl font-bold text-heading">{rating}</div>
              <div className="mt-1 text-sm text-black">
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
              </div>
            </div>

            <div className="ml-2 text-sm text-gray-600">
              {starBreakdown.map((item) => (
                <div
                  key={item.label}
                  className="mt-2 flex items-center gap-2 first:mt-0"
                >
                  <span className="w-20">{item.label}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded bg-gray-200">
                    <div
                      className="h-2 bg-accent"
                      style={{ width: `${item.widthPercent}%` }}
                    />
                  </div>
                  <span>({item.count})</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 space-y-2 text-sm">
            {qualityMetrics.map((metric) => (
              <div key={metric.label} className="flex justify-between">
                <span>{metric.label}</span>
                <span className="text-black">
                  <i className="ri-star-fill" /> {metric.score}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 md:mt-0 md:w-1/2">
          <h3 className="mb-3 text-lg font-semibold text-heading">
            Featured Reviews
          </h3>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {featuredReviews.map((review) => (
              <div
                key={review.id}
                className="min-w-[85%] shrink-0 snap-center sm:min-w-[320px]"
              >
                <FeaturedReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="mb-4 text-lg font-semibold text-heading">
          Recent Reviews
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/full-reviews"
            className="inline-block rounded bg-accent px-5 py-2 text-white transition hover:bg-hover"
          >
            Show more reviews
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
