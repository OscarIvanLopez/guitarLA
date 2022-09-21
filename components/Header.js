import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div></div>
        <nav className={styles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/store">Store</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
