"use client";

import { Share2 } from "lucide-react";
import { getFullUrl } from "@/lib/config";
import { trackPinterestShare } from "@/lib/analytics";

interface PinterestShareProps {
  guideTitle: string;
  guideSlug: string;
  pinterestDescription?: string;
}

export default function PinterestShareButton({
  guideTitle,
  guideSlug,
  pinterestDescription,
}: PinterestShareProps) {
  const destinationUrl = getFullUrl(`/guides/${guideSlug}`);
  const descriptionText =
    pinterestDescription ||
    `${guideTitle} — Smart buying guide & setup ideas for students by Codovate Finds.`;

  const pinterestShareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
    destinationUrl
  )}&description=${encodeURIComponent(descriptionText)}`;

  const handleShare = () => {
    trackPinterestShare(guideTitle, guideSlug);
    window.open(pinterestShareUrl, "_blank", "width=750,height=600,scrollbars=yes");
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
      aria-label="Save or share guide on Pinterest"
    >
      <Share2 className="w-4 h-4" />
      <span>Pin to Pinterest</span>
    </button>
  );
}
