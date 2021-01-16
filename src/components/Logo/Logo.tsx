import { Paths } from "invariable";
import Link from "next/link";

import styles from "./Logo.module.scss";

const Logo = () => (
  <Link href={Paths.home}>
    <a className={styles.logo}>
      Example<span className={styles.bright}>Art</span>
    </a>
  </Link>
);

export default Logo;
