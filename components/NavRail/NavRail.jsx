import Link from "next/link";
import styles from "./NavRail.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const NavRail = () => {
  return (
    <nav className={styles.navrail}>
      <ul className={styles.navrail_ul}>
        <li>
          <Link href={"/"} className={styles.navlink}>
            <Image
              src={"/assets/icons/home_FILL0_wght400_GRAD0_opsz24.svg"}
              alt="home icon"
              width={30}
              height={30}
            />
          </Link>
        </li>
        <li>
          <Link href={"/"} className={styles.navlink}>
          <Image
              src={"/assets/icons/article_FILL0_wght400_GRAD0_opsz24.svg"}
              alt="home icon"
              width={30}
              height={30}
            />
          </Link>
        </li>
        <li>
          <Link href={"/"} className={styles.navlink}>
          <Image
              src={"/assets/icons/mail_FILL0_wght400_GRAD0_opsz24.svg"}
              alt="home icon"
              width={30}
              height={30}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavRail;
