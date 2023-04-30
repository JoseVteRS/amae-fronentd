import { useEffect, useState } from "react";
import { Link } from "react-scroll/modules";
import styles from "./Navbar.module.scss";

import { Logo } from "../Logo";
import { menuLinks } from "@/utils/menuLinks";
import { DesktopMenu } from "../DesktopMenu";
import { MobileMenu } from "../MobileMenu";
import { useResponsive, useResponsiveMenu } from "@/components/hooks";

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const menu = useResponsiveMenu(
    <MobileMenu links={menuLinks} />,
    <DesktopMenu links={menuLinks} />,
    "md"
  );

  const isMobile = useResponsive("md");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolling(currentScrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
    className={``}
  >
    <div className="">
      <div className="w-full flex items-center justify-between">
        <div>
          <Link to="/" className="text-2xl font-bold">
            <Logo />
          </Link>
        </div>

        {isMobile ? (
          <MobileMenu links={menuLinks} />
        ) : (
          <DesktopMenu links={menuLinks} />
        )}
      </div>
    </div>
  </nav>
    // <nav
    //   className={`${styles.Navbar}  p-4 ${
    //     scrolling
    //       ? styles["Navbar__background--color"]
    //       : styles["Navbar__background--transparent"]
    //   } transition-all duration-300 ease-in z-[90]`}
    // >
    //   <div className="">
    //     <div className="w-full flex items-center justify-between">
    //       <div>
    //         <Link to="/" className="text-2xl font-bold">
    //           <Logo />
    //         </Link>
    //       </div>

    //       {isMobile ? (
    //         <MobileMenu links={menuLinks} />
    //       ) : (
    //         <DesktopMenu links={menuLinks} />
    //       )}
    //     </div>
    //   </div>
    // </nav>
  );
};
