"use client";
import Link from "next/link";
import styles from "./NavRail.module.scss";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeProvider";
import styled from "@emotion/styled";

const StyledIcon = styled.img`
  width: 50%;
  filter: invert(80%) sepia(9%) saturate(214%) hue-rotate(0deg) brightness(103%)
    contrast(81%);
`;
const NavRail = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className={styles.navrail}>
      <ul className={styles.navrail_ul}>
        <li className={styles.nav_li}>
          <Link href={"/"} className={styles.navlink}>
            <Image
              src={"/assets/icons/home_FILL0_wght400_GRAD0_opsz24.svg"}
              alt="home icon"
              width={26}
              height={26}
              className={`${styles.navicon}`}
            />
          </Link>
        </li>
        <li className={styles.nav_li}>
          <Link href={"/about-me"} className={styles.navlink}>
            <Image
              src={"/assets/icons/article_FILL0_wght400_GRAD0_opsz24.svg"}
              alt="about me icon"
              width={26}
              height={26}
              className={`${styles.navicon}`}
            />
          </Link>
        </li>
        <li className={styles.nav_li}>
          <Link href={"/contact"} className={styles.navlink}>
            <Image
              src={"/assets/icons/mail_FILL0_wght400_GRAD0_opsz24.svg"}
              alt="contact icon"
              width={26}
              height={26}
              className={`${styles.navicon}`}
            />
          </Link>
        </li>
        {/* <li className={`${styles.nav_li} ${styles.toggle}`}>
          <div className={styles.navlink} onClick={toggleTheme}>
            {theme === "light" ? (
              <Image
                width={26}
                height={26}
                alt="lightmode icon"
                className={`${styles.navicon}`}
                src={"/assets/icons/dark_mode_FILL0_wght400_GRAD0_opsz24.svg"}
              ></Image>
            ) : (
              <Image
                width={26}
                height={26}
                alt="darkmode icon"
                className={`${styles.navicon}`}
                src={"/assets/icons/light_mode_FILL0_wght400_GRAD0_opsz24.svg"}
              ></Image>
            )}
          </div>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavRail;
