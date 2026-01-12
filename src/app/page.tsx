import styles from "./page.module.css";
import Form from "next/dist/client/app-dir/form";

export default function Home() {
  return (
    <div className={styles.page}>
        <Form action={CreateCarAction}>
            <input type="text" name={'brand'}/>
            <input type="number" name={'price'}/>
            <input type="number" name={'year'}/>
        </Form>
    </div>
  );
}
