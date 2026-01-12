import styles from "./page.module.css";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div className={styles.page}>
        <Menu/>
    </div>
  );
}
