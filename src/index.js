import "bootstrap/dist/css/bootstrap.min.css";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>;
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { client } from "./config/apollo";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
