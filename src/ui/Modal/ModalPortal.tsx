import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  wrapperId?: string;
}

const ModalPortal = ({ children, wrapperId = "portal-root" }: Props) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    let element = document.getElementById(wrapperId);
    let created = false;

    if (!element) {
      element = document.createElement("div");
      element.setAttribute("id", wrapperId);
      document.body.appendChild(element);
      created = true;
    }

    setWrapperElement(element);

    return () => {
      if (created && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};

export default ModalPortal;
