import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
ReactDOM.render(
  <>
    <CssBaseline />
    <Header />
    <Container maxWidth="sm" style={{ marginTop: "1rem" }}>
      <App />
    </Container>
  </>,

  document.getElementById("root")
);
