import styles from "./page.module.css";
import { currentUser, SignInButton } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  return (
    <main className={styles.main}>
      {user && <span>{`Hey ${user.firstName}`}</span>}
      {!user && <SignInButton />}
    </main>
  );
}
