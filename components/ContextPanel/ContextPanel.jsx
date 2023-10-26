import styles from "./ContextPanel.module.scss";
const ContextPanel = ({children}) => {
  return <main className={styles.container}>
  <section className={styles.contextContainer}>
    Context Data
  </section>
    {children}
  </main>;
};

export default ContextPanel;
