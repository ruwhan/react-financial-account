import { Layout } from "antd";
import Navbar from "./Navbar";
import { ReactNode } from "react";

const AppLayout = ({ children }: { children: JSX.Element | ReactNode | string }) => {
  return (
    <Layout>
      <Navbar />
      {children}
    </Layout>
  );
}

export default AppLayout;
