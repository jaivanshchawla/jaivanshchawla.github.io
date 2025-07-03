import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

interface CaseStudyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  category?: string;
  image?: string;
  logo?: string;
  link?: string;
  type?: "content" | "simple-image";
}

// ContentCard Component
const ContentCard: React.FC<CaseStudyCardProps> = ({
  title,
  category,
  image,
  logo,
}) => (
  <div
    className="relative flex h-full flex-col items-start justify-between rounded-lg p-4"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 rounded-lg bg-black opacity-100" />
    <div className="relative z-10">
      {category && <div className="text-xs text-gray-200">{category}</div>}
      {title && (
        <div className="mr-2 text-lg font-bold leading-tight tracking-wide text-red-300">
          {title}
        </div>
      )}
    </div>
    {logo && <img src={logo} alt={title} className="z-10 h-9 rounded-lg" />}
  </div>
);

// SimpleImageCard
const SimpleImageCard: React.FC<CaseStudyCardProps> = ({ image }) => (
  <div
    className="relative flex w-full flex-col items-start justify-between rounded-lg p-4"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
);

// HoverRevealSlip with mobile + desktop support
const HoverRevealSlip = ({
  show,
  link,
}: {
  show: React.ReactNode;
  link?: string;
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && triggered) {
      const timeout = setTimeout(() => {
        if (link) window.location.href = link;
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [triggered, isMobile, link]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMobile) return;
    e.preventDefault();
    if (!triggered) setTriggered(true);
  };

  const common = "absolute flex w-full h-full [backface-visibility:hidden]";

  return (
    <div
      onClick={handleClick}
      className={cn(
        "group relative h-60 w-52 [perspective:1000px]",
        isMobile ? "cursor-pointer" : ""
      )}
    >
      {/* Static back cover */}
      <div className="absolute inset-0 h-full w-46 rounded-lg bg-gray-50 shadow-md" />

      {/* Rotating front card */}
      <div
        className={cn(
          "relative z-50 h-full w-48 origin-left transition-transform duration-500 ease-out [transform-style:preserve-3d]",
          isMobile
            ? triggered
              ? "[transform:rotateY(-30deg)]"
              : ""
            : "group-hover:[transform:rotateY(-30deg)]"
        )}
      >
        <div className={cn("h-full w-full rounded-lg bg-white shadow-md", common)}>
          {show}
        </div>
      </div>

      {/* Slide-out tag */}
      <div
        className={cn(
          "z-1 absolute bottom-0 right-0 flex h-48 w-14 -translate-x-10 transform items-start justify-start rounded-r-lg bg-green-600 pl-2 pt-2 text-xs font-bold text-white transition-transform duration-300 ease-in-out [backface-visibility:hidden]",
          isMobile
            ? triggered
              ? "translate-x-0 rotate-[5deg]"
              : ""
            : "group-hover:translate-x-0 group-hover:rotate-[5deg]"
        )}
      >
        <div className="-rotate-90 whitespace-nowrap pb-16 pr-9">GITHUB</div>
      </div>
    </div>
  );
};

// Main exported CaseStudyCard
export default function CaseStudyCard({
  title,
  category,
  link,
  image,
  logo,
  type,
}: CaseStudyCardProps) {
  return (
    <div className="flex gap-8">
      <HoverRevealSlip
        link={link}
        show={
          type === "content" ? (
            <ContentCard
              title={title}
              category={category}
              image={image}
              logo={logo}
            />
          ) : (
            <SimpleImageCard image={image} />
          )
        }
      />
    </div>
  );
}
