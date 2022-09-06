import * as React from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Image from "mui-image";

const drawerWidth = 240;
const navItems = [
  "Home",
  "About Us",
  "Gallery",
  "Book Now",
  "Packages",
  "Contact Us",
];
const IconsList = [<FacebookIcon />, <InstagramIcon />];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box className="setImg">
        <Image src="Capture.PNG" className="setIcowidth" />
        Stay @ Kyathanamakki
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" className="cus-header1">
        <Grid container spacing={2}>
          <Grid item lg={7} md={6}>
            {IconsList.map((item) => (
              <span className="cu-ico" key={item} sx={{ color: "#ffffff" }}>
                {item}
              </span>
            ))}
          </Grid>
          <Grid item lg={2} md={2}>
            <Box display="flex" justifyContent="flex-end">
              <WhatsAppIcon className="setSizesvg " />
              <Typography className="alignwats">9611536324</Typography>
            </Box>
          </Grid>
          <Grid item lg={3} md={4}>
            <Box display="flex" justifyContent="flex-end">
              <MailOutlineIcon className="setSizesvg" />
              <Typography className="alignemail">
                admin@Stay@Kyathanamakki.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box></Box>
      </AppBar>
      <AppBar component="nav" className="cus-header2">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box className="setImg"sx={{ flexGrow: 1, display: { md:"none",lg: "none", sm: "block" } }}>
            <Image src="Capture.PNG" className="setIcowidth" />
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={1}>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                <Box className="setImg">
                  <Image src="Capture.PNG" className="setIcowidth" />
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                className="hearext"
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                Stay@Kyathanamakki
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Box
                className="menu-data"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: "#000000" }}>
                    {item}
                  </Button>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
