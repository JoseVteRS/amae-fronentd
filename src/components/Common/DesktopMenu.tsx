import NextLink from "next/link";
import { useRouter } from "next/router";
import { Link } from "react-scroll";
import styles from "./Navbar/Navbar.module.scss";

interface DesktopMenuProps {
    links: { label: string; href: string }[];
  }

export const DesktopMenu = ({links}: DesktopMenuProps) => {
    const router = useRouter();
  return (
    <ul className="flex space-x-4">
    {links.map((item) => (
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
            {item.label}
          </Link>
        ) : (
          <NextLink
            href={item.href}
            className="text-lg font-semibold hover:text-gray-700 transition-colors duration-200"
          >
            {item.label}
          </NextLink>
        )}
      </li>
    ))}
  </ul>
  )
}
