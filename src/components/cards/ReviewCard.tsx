import Image from "next/image";
import React from "react";
import TypographySmall from "../typography/TypographySmall";
import { cn } from "@/lib/utils";

const ReviewCard = ({
  name,
  review,
  rating,
  time,
}: {
  name: string;
  review: string;
  rating: number;
  time: string;
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start">
      <div>
        <p className="flex items-baseline">
          <span className="text-gray-600 font-bold capitalize">{name}</span>
        </p>
        <div className="flex items-center mt-1">
          <svg
            className={cn(
              "w-4 h-4 fill-current text-gray-400",
              rating >= 1 && "text-yellow-600"
            )}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <svg
            className={cn(
              "w-4 h-4 fill-current text-gray-400",
              rating >= 2 && "text-yellow-600"
            )}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <svg
            className={cn(
              "w-4 h-4 fill-current text-gray-400",
              rating >= 3 && "text-yellow-600"
            )}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <svg
            className={cn(
              "w-4 h-4 fill-current text-gray-400",
              rating >= 4 && "text-yellow-600"
            )}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <svg
            className={cn(
              "w-4 h-4 fill-current text-gray-400",
              rating >= 5 && "text-yellow-600"
            )}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        </div>

        <div className="mt-2">
          <TypographySmall text={review} css="font-normal" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
