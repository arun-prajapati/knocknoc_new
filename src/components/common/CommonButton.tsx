import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import { Loader, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const CommonButton = ({
  text,
  icon,
  type = "button",
  action,
  disabled = false,
  loading = false,
  css,
  variant = "default",
}: {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  type?: "button" | "submit";
  css?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  action?: () => void;
}) => {
  return (
    <Button
      variant={variant}
      type={type}
      onClick={action}
      disabled={disabled || loading}
      className={cn("px-6 flex gap-2", css)}
    >
      {loading ? (
        <span>
          <Loader className="animate-spin" />
        </span>
      ) : (
        <>
          {icon && <span className="icon">{icon}</span>}
          <span className="text">{text}</span>
        </>
      )}
    </Button>
  );
};

export default CommonButton;
