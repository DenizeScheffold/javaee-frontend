import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { useRouter } from "next/router";

export default function Navbar({ children }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <nav className={styles.navlinks}>
        <Link href="/" className={styles.link_styles} passHref>
          <div className={styles.home_nav}>
            HOME
            <a
              className={
                router.asPath === "/" ? styles.underline : styles.link_styles
              }
            >
           HOME
            </a>
          </div>
        </Link>

        <Link href="/weather" className={styles.link_styles} passHref>
          <div className={styles.weather_nav}>
          Weather
            <a
              className={
                router.asPath === "/weather" ? styles.underline : styles.link_styles
              }
            >
           Weather
            </a>
          </div>
        </Link>

        <Link href="/profile" className={styles.link_styles} passHref>
          <div className={styles.profile_nav}>
          Profile
            <a
              className={
                router.asPath === "/profile"
                  ? styles.underline
                  : styles.link_styles
              }
            >
              Profile
            </a>
          </div>
        </Link>
      </nav>

      <div>{children}</div>
    </div>
  );
}
