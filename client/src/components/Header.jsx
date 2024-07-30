import React from "react";
import { AppBar, Toolbar } from "@mui/material";

const Header = () => {
  return (
    <>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <img src="/images/logo.png" alt="logo" style={{ width: 100 }} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
