import { Layout, theme } from "antd";
import AppFooter from "./appfooter";
import AppHeader from "./appheader";
import "./layout.scss";
const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout className="k-layout">
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
          }}
        >
          <AppHeader />
        </Header>
        <Content>{children}</Content>
        <Footer className="k-parentfooter">
          <AppFooter />
        </Footer>
      </Layout>
    </>
  );
};

export default AppLayout;
