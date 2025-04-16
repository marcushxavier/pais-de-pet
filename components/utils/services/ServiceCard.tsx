"use client";
import Image, { StaticImageData } from "next/image";
import GroomingModal from "./modals/GroomingModal";
import { useState } from "react";

export interface iServiceCard {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  detailedDescriotion: string;
  subservices: string[];
  color: "tanjerina" | "cerulean" | "carot";
  className?: string;
}

export default function ServiceCard({
  image,
  color,
  description,
  detailedDescriotion,
  subservices,
  title,
  className,
}: iServiceCard) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((old) => !old);
    const body = document.body.style;
    body.overflow = body.overflow == "" ? "hidden" : "";
  };

  const cardColors = {
    tanjerina: {
      bgColor: "bg-orange-300",
      gradientColor: "from-tanjerina",
      tittleColor: `text-tanjerina`,
    },
    cerulean: {
      bgColor: "bg-cerulean",
      gradientColor: "from-cerulean",
      tittleColor: `text-cerulean`,
    },
    carot: {
      bgColor: "bg-carot",
      gradientColor: "from-carot",
      tittleColor: `text-carot`,
    },
  };
  return (
    <>
      <div
        onClick={toggle}
        className={`box-content min-w-65 min-h-50 md:min-w-62 md:min-h-45 rounded-lg overflow-hidden ${className}`}
      >
        <div className="absolute w-full h-22 bottom-0 left-0 flex flex-col gap-1.5 z-2 text-white p-1.5">
          <h2
            className={`text-lg font-bold uppercase relative ${cardColors[color].tittleColor}`}
          >
            <p className="text-lg font-bold uppercase text-white absolute top-0.5">
              {title}
            </p>
            {title}
          </h2>
          <p className="normal-case text-sm/4">{description}</p>
        </div>

        <Image src={image} alt="" fill className="object-cover" />

        <div
          className={`absolute bottom-0 left-0 w-full h-2/5 bg-linear-to-t ${cardColors[color].gradientColor} to-transparent`}
        />
      </div>
      <GroomingModal
        isOpen={isOpen}
        toggle={toggle}
        title={title}
        detailedDescription={detailedDescriotion}
        subservices={subservices}
        bgColor={cardColors[color].bgColor}
      />
    </>
  );
}
