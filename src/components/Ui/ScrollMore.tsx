import { Link } from "react-scroll";
import { Icon } from "../Icons";

interface ScrollMorePrps {
  href?: string;
}

export const ScrollMore = ({ href }: ScrollMorePrps) => {
  return (
    <>
      <div className="animate-bounce  mt-5">
        {href ? (
          <Link
            to={href}
            smooth={false}
            duration={300}
            className="inline-block border-2 border-gray-700 px-3 py-5 rounded-full"
          >
            <Icon.ArrowDown />
          </Link>
        ) : (
          <div className="border-2 border-gray-700 px-3 py-5 rounded-full">
            <Icon.ArrowDown />ç
          </div>
        )}
      </div>
    </>
  );
};
