import { FC } from "react";
import Seo from "./Seo";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Seo />
      <main className="h-screen flex justify-center items-center">
        {children}
      </main>
    </>
  );
};

export default Layout;
