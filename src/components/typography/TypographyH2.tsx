import { cn } from "@/lib/utils";

const TypographyH2 = ({ text, css }: { text: string; css?: string }) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight first:mt-0",
        css
      )}
      title={text}
    >
      {text}
    </h2>
  );
};

export default TypographyH2;
