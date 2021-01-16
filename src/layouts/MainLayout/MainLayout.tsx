import { FC, useRef, useState } from "react";

import Link from "next/link";
import { Logo } from "components";
import { BasketIcon } from "assets";
import classNames from "classnames";
import useClickOutside from "hooks/useClickOutside";
import styles from "./MainLayout.module.scss";
import { NAV_LST } from "./MainLayout.constants";

const MainLayout: FC = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const button = useRef<HTMLButtonElement>();
  const navRef = useClickOutside<HTMLElement, HTMLButtonElement>(() => setMenuOpen(false), button);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const burgerIconClasses = classNames(styles.burgerIcon, {
    [styles.burgerIconActive]: isMenuOpen,
  });

  const navListClasses = classNames(styles.navList, {
    [styles.navListActive]: isMenuOpen,
  });

  const navListContentClasses = classNames(styles.navListContent, {
    [styles.navListContentActive]: isMenuOpen,
  });

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrap}>
          <div className={styles.content}>
            <Logo />
            <div className={styles.nav}>
              <button
                ref={button}
                type="button"
                role="menu"
                className={styles.burger}
                onClick={toggleMenu}
              >
                <span className={burgerIconClasses} />
              </button>
              <div className={navListClasses}>
                <nav ref={navRef} className={navListContentClasses}>
                  {NAV_LST.map((item) => (
                    <Link key={item.link} href={item.link}>
                      <a className={styles.link}>{item.title}</a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            <BasketIcon className={styles.basket} />
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
