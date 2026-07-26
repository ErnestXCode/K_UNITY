import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ThemeProvider } from "../context/ThemeContext";

function MainLayout() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
        <Navbar />

        <main className="w-full flex-1 pt-20">
          <Outlet />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MainLayout;
