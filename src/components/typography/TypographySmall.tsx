import { cn } from "@/lib/utils";

const TypographySmall = ({ text, css }: { text: string; css?: string }) => {
  return (
    <small className={cn("text-xs sm:text-sm font-medium leading-none", css)}>
      {text}
    </small>
  );
};

export default TypographySmall;
