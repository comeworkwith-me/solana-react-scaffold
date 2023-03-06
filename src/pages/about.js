import { Navigation } from "@/components/Navigation";
import styles from "@/styles/header.module.css"



export default function About() {
  return (
    <div>
      <Navigation />
      <h1 className={styles.header}>about</h1>
    </div>
  );
}
