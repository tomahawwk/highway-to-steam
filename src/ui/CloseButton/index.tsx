import { CloseIcon } from "@/icons";
import { cn } from "@/lib/utils";

interface Props {
  onClick(e: React.MouseEvent): void;
}

const CloseButton = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "hover:bg-button-secondary-hover duration-default",
        "bg-button-secondary-neutral cursor-pointer",
        "w-[28px] h-[28px] rounded-full flex-center",
        "absolute right-[12px] top-[12px]",
        "md:w-[36px] md:h-[36px]"
      )}
    >
      <CloseIcon
        className={cn(
          "pointer-events-none text-dark",
          "md:w-[12px] md:h-[12px]",
          "w-[9px] h-[9px]"
        )}
      />
    </button>
  );
};

export default CloseButton;
