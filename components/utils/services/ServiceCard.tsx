import Image, { StaticImageData } from "next/image";

export interface iServiceCard {
  image: StaticImageData;
  tittle: string;
  description: string;
  color: "tanjerina" | "cerulean" | "carot";
}

export default function ServiceCard({ image, color, description, tittle }: iServiceCard) {
  const cardColors = {
    tanjerina: {
      gradientColor: "from-tanjerina",
      tittleColor: `text-tanjerina`,
    },
    cerulean: {
      gradientColor: "from-cerulean",
      tittleColor: `text-cerulean`,
    },
    carot: {
      gradientColor: "from-carot",
      tittleColor: `text-carot`,
    },
  };
  return (
    <div className="relative min-w-[17rem] min-h-40 rounded-lg overflow-hidden">
      <div className="absolute w-full h-22 bottom-0 left-0 flex flex-col gap-1.5 z-10 text-white p-1.5">
        <h2
          className={`text-lg font-bold uppercase relative ${cardColors[color].tittleColor}`}
        >
          <p className="text-lg font-bold uppercase text-white absolute top-1.5">
            {tittle}
          </p>
          {tittle}
        </h2>
        <p className="normal-case text-sm/4">{description}</p>
      </div>

      <Image src={image} alt="" fill className="object-cover" />

      <div
        className={`absolute bottom-0 left-0 w-full h-2/5 bg-linear-to-t ${cardColors[color].gradientColor} to-transparent`}
      />
    </div>
  );
}
