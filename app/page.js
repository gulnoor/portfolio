import "animate.css";
import typography from "@/material-theme/typography.module.css";
export default function Home() {
  const headingStyle = {
    fontWeight: "800",
    color:"var(--md-sys-color-on-surface)"
  };
  return (
    <section
      className="pageContainer"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1
        className={`${typography.displayLarge} animate__animated animate__fadeInDown`}
        style={headingStyle}
      >
        Hi,
      </h1>
      <h2 className={typography.displayLarge} style={headingStyle}>
        I&apos;m Gul Noor
      </h2>
      <h1 className={typography.displayLarge} style={headingStyle}>
        Front End Developer
      </h1>
    </section>
  );
}
