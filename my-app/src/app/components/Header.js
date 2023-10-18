import Link from "next/link";
import styles from "../../app/styles/navbar.module.css";
import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
        <Image src="/logo.png" height={50} width={150} alt="This is header logo image"/>
        </Link>
        <Nav/>
      </div>
    </header>
  );
};

export default Header;
