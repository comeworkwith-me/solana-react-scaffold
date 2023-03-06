import { Navigation } from "@/components/Navigation";
import styles from "@/styles/header.module.css"

export default function Contact() {
  return (
    <div>
      <Navigation />
      <h1 className={styles.header}>contact</h1>;
    </div>
  );
}
