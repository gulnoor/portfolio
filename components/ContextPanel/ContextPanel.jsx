"use client";
import { useContext } from "react";
import styles from "./ContextPanel.module.scss";
import { ThemeContext } from "@/context/themeProvider";
import { usePathname } from "next/navigation";
import Image from "next/image";
import displayPicture from "./A8265B34-D098-4026-8C25-AED54DFDBCBE.jpeg";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import lemon from "./Asset 20@4x.png";
import typography from "@/material-theme/typography.module.css";
import play from "@/public/assets/icons/play_arrow_FILL1_wght400_GRAD0_opsz24.svg";

// import required modules
import { EffectCards } from "swiper/modules";
import { Button } from "@mui/material";
const PanelContent = ({ path }) => {
  switch (path) {
    case "/":
      return (
        <section className={`${styles.contextContainer}`}>
          <h1
            className={typography.displaySmall}
            style={{ margin: "24px", textAlign: "center" }}
          >
            My Projects
          </h1>
          <div className={styles.MusicPlayer}>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <a target="_blank"
                  href="https://tailwind--polite-salmiakki-cafa96.netlify.app/"
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Image src={lemon} alt="lemon" className={styles.lemon} />
                </a>
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
            <Button
              variant="contained"
              sx={{
                width: "52px",
                height: "52px",
                margin: "0 auto",
              }}
            >
              {" "}
              <Image src={play} />
            </Button>
          </div>

          {/* <Image
            src={displayPicture}
            alt="profile picture"
            className={`${styles.dp} animate__animated animate__rotateIn`}
          /> */}
        </section>
      );

    default:
      break;
  }
};
const ContextPanel = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const path = usePathname();

  return (
    <main
      className={`${styles.container} animate__animated animate__bounceInRight`}
    >
      <PanelContent path={path} />

      {children}
    </main>
  );
};

export default ContextPanel;
