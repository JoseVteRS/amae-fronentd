import NextLink from "next/link";
import { useEffect, useState } from "react";
import { Link } from "react-scroll/modules";

import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
import { Logo } from "../Logo";

const items = [
  {
    name: "Sobre mí",
    href: "/#sobre-mi",
  },
  {
    name: "Galerías",
    href: "/#galeria",
  },
  {
    name: "Servicios",
    href: "/#servicios",
  },
  {
    name: "Contacto",
    href: "/#contacto",
  },
];

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const router = useRouter();

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
      className={`${styles.Navbar}  p-4 ${
        scrolling
          ? styles["Navbar__background--color"]
          : styles["Navbar__background--transparent"]
      } transition-all duration-300 ease-in z-[90]`}
    >
      <div className="">
        <div className="w-full flex items-center justify-between">
          <div>
            <Link to="/" className="text-2xl font-bold">
            <Logo />
            </Link>
          </div>

          <ul className="flex space-x-4">
            {items.map((item) => (
              <li key={item.href}>
                {router.pathname === "/" ? (
                  <Link
                    to={item.href.slice(2)}
                    smooth={false}
                    duration={300}
                    spy={true}
                    activeClass={styles.active}
                    className="hover:cursor-pointer text-lg font-semibold hover:text-gray-700 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <NextLink
                    href={item.href}
                    className="text-lg font-semibold hover:text-gray-700 transition-colors duration-200"
                  >
                    {item.name}
                  </NextLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
