import { Navbar } from "@/components/Common";
import { Nunito } from "next/font/google";

import style from "./MainLayout.module.scss";
import { Footer } from "@/components/Common/Footer";

const nunito = Nunito({ subsets: ["latin"] });


interface MainLayoutProps {
    children: React.ReactNode[];
}



export const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <main className={`${nunito.className} relative bg-gray-100`}>
      <Navbar />
      {children}

      <Footer />
    </main>
  );
};
