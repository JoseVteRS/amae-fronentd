import { ReactNode } from "react";

import css from "classnames";




interface HeadingProps {
  as: keyof JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
}

export const Heading = ({
  as: Component,
  children,
  className,
}: HeadingProps) => {

  return (
    <Component className={css("text-center font-normal mb-10", { [className!]: className != null })}>
      {children}
    </Component>
  );
};
