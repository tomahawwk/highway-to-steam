import { cn } from "@/lib/utils";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
}

const Link = ({ to, children, className, ...rest }: Props) => {
  return (
    <a
      href={to}
      className={cn(
        "uppercase text-gray-300 text-sm font-bold tracking-wide",
        "duration-default hover:text-gray-500",
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Link;
