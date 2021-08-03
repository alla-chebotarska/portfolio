import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import { Link as Scrolling } from "react-scroll";
import { Box } from "@material-ui/core";

function createData(title: string, href: string) {
  return { title, href };
}

const navigationList = [
  createData("Portfolio", "portfolio"),
  createData("About", "about"),
];

export default function Navigation() {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <Box display={{ xs: "none", sm: "block" }}>
          {navigationList.map((item) => (
            <Scrolling
              key={item.title}
              color="textPrimary"
              to={item.href}
              spy={true}
              smooth={true}
            >
              <Link>{item.title}</Link>
            </Scrolling>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
