import { Heading } from "@/components/Ui/Heading";
import { Abhaya_Libre } from "next/font/google";
import Image from "next/image";
import css from "classnames";

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

interface HeaderWithImageProps {
  title: string;
  imageSrc: string;
  className?: string;
}

export const HeaderWithImage = ({ title, imageSrc }: HeaderWithImageProps) => {
  return (
    <header className={css("relative")}>
      <div className="">
        <div className="relative w-full h-[35vh]">
          <Image
            placeholder="blur"
            blurDataURL={imageSrc}
            src={imageSrc}
            alt="Mar, fotógrafa"
            style={{ objectFit: "cover", objectPosition: "center" }}
            fill
          />
        </div>
        <div className="absolute inset-0 bg-gray-100 opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center flex-col ">
          <Heading as="h1" className={`${abhaya.className} text-heading`}>
            {title}
          </Heading>
        </div>
      </div>
    </header>
  );
};
