import Link from "next/link";
import type { LinkProps } from "next/link";
import css from "classnames";

interface ButtonLinkProps extends LinkProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export const ButtonPrimary = ({
  onClick,
  className,
  children,
  ...linkProps
}: ButtonLinkProps) => {
  return (
    <Link className={css("", { [className!]: className })} {...linkProps}>
      {children}
    </Link>
  );
};
