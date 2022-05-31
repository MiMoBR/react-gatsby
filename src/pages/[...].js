import React from "react";
import { Router } from "@reach/router";

import FormPage from "../routesPages/auth/form";

import PublicRoute from "../route/publicRoute";
import PageNotFound from "../pages/404";

const Public = () => {
  return (
    <Router basepath="/">
      <PublicRoute component={FormPage} path="/form" />
      <PageNotFound path="*" />
    </Router>
  );
};

export default Public;
