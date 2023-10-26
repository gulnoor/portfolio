import { useContext } from "react";
import styles from "./ContextPanel.module.scss";
import { ThemeContext } from "@/context/themeProvider";
const ContextPanel = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`${styles.container} animate__animated animate__bounceInRight`}

    >
      <section className={`${styles.contextContainer}`}>Context Data</section>
      {children}
    </main>
  );
};

export default ContextPanel;
