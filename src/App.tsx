import React, { StrictMode, Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import Product from "./pages/Product";
import Tech from "./pages/Tech";
import Header from "./components/Header";
import {Footer} from "./pages/Home/homepage";
import "./App.less";
import Homepage from "./pages/Home/homepage";
import EcosystemPage from "./pages/Ecosystem/EcosystemPage";
import DaoPage from "./pages/DAO/daoPage";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

const { Content } = Layout;

// const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StrictMode>
        <Suspense fallback={null}>
          <HashRouter>
            <Header />
            <Content>
              <Switch>
                <Route component={Homepage} exact path="/" />
                <Route component={EcosystemPage} exact path="/ecosystem" />
                <Route component={Product} exact path="/product" />
                <Route component={Tech} exact path="/tech" />
                <Route component={DaoPage} exact path="/dao" />
                {/* <Route component={Developers} exact path="/developers" /> */}
              </Switch>
            </Content>
            <Footer />
          </HashRouter>
        </Suspense>
      </StrictMode>
    </ThemeProvider>
  );
}

export default App;
