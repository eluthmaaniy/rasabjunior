import { coverVideoId } from "@/app/lib/data";

export default function CoverVideo() {
  return (
    <div className="relative h-48 w-full overflow-hidden bg-gray-200 md:h-64">
      <iframe
        src={`https://www.youtube.com/embed/${coverVideoId}?controls=1&rel=0&modestbranding=1`}
        className="absolute left-0 top-0 h-full w-full border-none"
        allow="encrypted-media; fullscreen; accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
        allowFullScreen
        title="Cover Video"
      />
    </div>
  );
}
