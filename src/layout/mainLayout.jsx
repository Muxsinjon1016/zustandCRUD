import React from "react";
import { Layout, Menu, theme } from "antd";
import { Outlet, Link } from "react-router-dom";
import { layoutData } from "./layoutData";

const { Header, Content, Footer, Sider } = Layout;
const items = layoutData.map(({ key, label, icon, path }) => ({
  key,
  icon: React.createElement(icon),
  label: <Link to={path}>{label}</Link>,
}));

export const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG, colorPrimary },
  } = theme.useToken();

  return (
    <Layout className="h-screen">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical mt-4 mb-8">
          <img
            className="w-12 mx-auto h-auto"
            src="logo.png"
            alt="logo"
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#001529",
            color: "#fff",
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            className="p-6 h-[100%] border-2 border-blue-700"
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Todo List ©{new Date().getFullYear()} Created by Muxsinjon
        </Footer>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
