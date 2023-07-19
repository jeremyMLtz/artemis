"use client";
import { usePathname } from "next/navigation";

const AppNavBar = () => {
  const pathname = usePathname();
  return (
    <nav>
      <a
        className={pathname === "/app/dashboard" ? "active" : ""}
        href='/app/dashboard'>
        Dashboard
      </a>
      <a
        className={pathname === "/app/applications" ? "active" : ""}
        href='/app/applications'>
        Applications
      </a>
    </nav>
  );
};

export default AppNavBar;
