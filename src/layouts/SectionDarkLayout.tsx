import { Heading } from "@/components/Ui/Heading";
import { Kalam, Abhaya_Libre } from "next/font/google";
import css from "classnames";
import { ClipPath } from "./types/layout.type";

const kalam = Kalam({ subsets: ["latin"], weight: ["300", "400", "700"] });
const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

interface SectionDarkLayoutProps {
  title: string;
  id?: string;
  children: React.ReactNode;
  className?: string;
  clipPath?: ClipPath;
}

export const SectionDarkLayout = ({
  title,
  id,
  children,
  className,
  clipPath,
}: SectionDarkLayoutProps) => {
  return (
    <section
      id={id}
      className={css(
        `relative bg-slate-800 text-slate-300 py-28`,
        {
          [className!]: className,
          [`diagonal--${clipPath}`]: clipPath,
        }
      )}
    >
      <div className="container mx-auto">
        <Heading
          as="h2"
          className={`${abhaya.className} text-slate-600 text-heading font-[700]`}
        >
          {title}
        </Heading>
        <div>{children}</div>
      </div>
    </section>
  );
};
