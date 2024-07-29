import Image from "next/image";
import Link from "next/link";
import TypographyH4 from "../typography/TypographyH4";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({
  image = "/",
  name = "/",
  link = "/",
}: {
  image: string;
  name: string;
  link: string;
}) => {
  return (
    <div className="service_card flex flex-col justify-center items-center border-t-4  border-primary  p-3 sm:p-5 rounded-lg shadow-lg max-w-[200px] sm:max-w-full m-auto">
      <div className="card_image relative w-full max-w-20  aspect-square mb-3 select-none">
        <Image
          src={image}
          alt={name}
          blurDataURL="/assets/loading_gif.gif"
          placeholder="blur"
          fill
          sizes="(min-width: 1700px) 232px, (min-width: 1420px) calc(20vw - 48px), (min-width: 1140px) calc(25vw - 49px), (min-width: 840px) calc(31.43vw - 29px), (min-width: 640px) calc(47.78vw - 32px), (min-width: 580px) calc(32.5vw - 25px), (min-width: 400px) calc(50vw - 30px), calc(100vw - 32px)"
          className="object-contain"
        />
      </div>
      <TypographyH4
        text={name}
        css="mb-2 line-clamp-1 text-foreground select-none text-center"
      />
      <Link
        href={link}
        className="text-sm underline flex items-center select-none"
      >
        <span>Explore more</span>
        <span>
          <ArrowRight className="text-sm w-4 h-4" />
        </span>
      </Link>
    </div>
  );
};

export default ServiceCard;
