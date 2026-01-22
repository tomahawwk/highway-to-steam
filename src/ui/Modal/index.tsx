import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ModalPortal from "./ModalPortal";
import { CloseButton } from "..";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setIsMounted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isMounted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMounted]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isMounted) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMounted, onClose]);

  const handleCloseClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isMounted) return null;

  return (
    <ModalPortal>
      <div className="inset-0 fixed flex-center max-md:px-sm">
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={handleCloseClick}
        />
        <div
          className={cn(
            "rounded-md relative duration-default ease-in-out",
            "max-w-[700px] w-full z-10 overflow-hidden",
            "border-2 border-purple rounded-md bg-white",
            isVisible
              ? "opacity-100 translate-y-[0px]"
              : "opacity-0 translate-y-[10px]"
          )}
        >
          <CloseButton onClick={handleCloseClick} />
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};

export default Modal;
