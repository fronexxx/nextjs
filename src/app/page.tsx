import styles from "./page.module.css";
import Form from "next/dist/client/app-dir/form";
import {getMeals, saveMeal} from "@/server-actions/serverActions";

export default async function Home() {
    const mealsArray = await getMeals();
  return (
    <div className={styles.page}>
      <Form action={saveMeal}>
          <input type="text" name={'title'}/>
          <button>send</button>

          <div>
              {
                  mealsArray.map(meal => <div key={meal.id}>{meal.title}</div>)
              }
          </div>
      </Form>
    </div>
  );
}
