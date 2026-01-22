import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const PrimaryButton = ({ onClick, title, className, ...props }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-button-primary-neutral text-white cursor-pointer",
        "duration-default hover:bg-button-primary-hover",
        "px-[24px] leading-none py-[12px] rounded-md",
        className
      )}
      {...props}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
