import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <Box component="main" sx={{ p: 3 }}>
        {children}
      </Box>
      <Footer /> */}
    </>
  );
};

export default Layout;
