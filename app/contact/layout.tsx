import NavBar from "@/components/NavBar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="">
        {children}
      </div>
    </div>
  );
};

export default Layout;
