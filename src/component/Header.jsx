import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  CssBaseline,
  IconButton,
} from "@mui/material";

import React from "react";

const Header = () => {
  const navItems = ["Home", "About", "Contact"];
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component={"nav"}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            BLOGS WORLD
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
