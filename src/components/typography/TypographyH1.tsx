import { cn } from "@/lib/utils";

const TypographyH1 = ({ text, css }: { text: string; css?: string }) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl lg:text-5xl font-semibold tracking-tight ",
        css
      )}
      title={text}
    >
      {text}
    </h1>
  );
};

export default TypographyH1;
