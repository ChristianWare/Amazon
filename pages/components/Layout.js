import React from "react";
import Head from "next/head";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Amazon</title>
      </Head>
      <AppBar position='static'>
        <Toolbar>
          <Typography>Amazon</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All Rights Reserved</Typography>
      </footer>
    </div>
  );
}
