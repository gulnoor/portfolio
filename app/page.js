import "animate.css";
import typography from "@/material-theme/typography.module.css";
import { Button } from "@mui/material";
import styles from "./page.module.css";
export default function Home() {
  const headingStyle = {

  };
  return (
    <section
      className="pageContainer animate__animated animate__bounceInRight "
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className={`${styles.wrapper} animate__animated animate__fadeInDown animate__delay-1s animate__faster`}
      >
        <h1 className={`${typography.displayLarge} ${styles.heading}`} >
          Hi,
        </h1>
        <h2 className={`${typography.displayLarge} ${styles.heading}`} style={headingStyle} >
          I&apos;m Gul Noor
        </h2>
        <h1 className={`${typography.displayLarge} ${styles.heading}`} style={headingStyle}>
          Front End Developer
        </h1>
        <Button
          sx={{
            padding: "0 32px",
            width: "fit-content",
            marginBottom: "16px",
          }}
          variant="outlined"
        >
          Contact Me
        </Button>
        <Button
          sx={{
            width: "fit-content",
            padding: "0 32px",
          }}
          variant="contained"
        >
          See My Projects
        </Button>
      </div>
    </section>
  );
}
