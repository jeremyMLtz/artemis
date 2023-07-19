import AppNavBar from "../components/AppNavBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <AppNavBar />
      {children}
    </main>
  );
}
