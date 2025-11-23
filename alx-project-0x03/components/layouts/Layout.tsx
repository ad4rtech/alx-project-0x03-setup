import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

import { LayoutProps } from "@/interface"; // or relative path


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
