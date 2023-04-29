import { Heading } from "@/components/Ui/Heading";
import { Kalam, Abhaya_Libre } from "next/font/google";

import css from "classnames";
import { ClipPath } from "./types/layout.type";

const kalam = Kalam({ subsets: ["latin"], weight: ["300", "400", "700"] });
const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

interface SectionLightLayoutProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  clipPath?: ClipPath;
}

export const SectionLightLayout = ({
  id,
  title,
  children,
  className,
  clipPath,
}: SectionLightLayoutProps) => {
  return (
    <section
      id={id}
      className={css(`relative py-28`, {
        [className!]: className,
        [`diagonal--${clipPath}`]: clipPath,
      })}
    >
      <div className="container mx-auto">
        <Heading
          as="h2"
          className={`${abhaya.className} text-gray-400 text-heading font-[700]`}
        >
          {title}
        </Heading>
        <div>{children}</div>
      </div>
    </section>
  );
};
