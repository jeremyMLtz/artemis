import styles from "./page.module.css";
import { currentUser, SignInButton, SignOutButton } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  return (
    <main className={styles.main}>
      <nav className={styles.homeNav}>
        <span>Artemis Logo</span>
        {user && (
          <div className={styles.userContainer}>
            <img
              className={styles.profilePic}
              src={user.profileImageUrl}
              alt='User Profile Picture'
            />
            <a
              className={styles.dashboardButton}
              href='/app/dashboard'
              rel='noopener norefferer'>
              Dashboard
            </a>
            <SignOutButton>
              <button className={styles.signOut}>Sign Out</button>
            </SignOutButton>
          </div>
        )}
        {!user && (
          <SignInButton>
            <button className={styles.signIn}>Sign In</button>
          </SignInButton>
        )}
      </nav>
      <header className={styles.homeHeader}>
        <h1>
          On the hunt? Track your applications with <span>Artemis</span>
        </h1>
      </header>
    </main>
  );
}
