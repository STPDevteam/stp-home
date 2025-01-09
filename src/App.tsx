import React, { StrictMode, Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { Layout } from "antd";
import Product from "./pages/Product";
import Tech from "./pages/Tech";
import Header from "./components/Header";
import "./App.less";
import Homepage from "./pages/Home/homepage";
import EcosystemPage from "./pages/Ecosystem/EcosystemPage";
import DaoPage from "./pages/DAO/daoPage";
import Awns from "./pages/Awns/index";
import Soda from "./pages/Soda/index";
import GamePortal from "./pages/GamePortal/index";
import Transprancy from "./pages/Transprancy/index";
import DeveloperEngine from "./pages/DeveloperEngine/index";

import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { createBrowserHistory } from "history";
import Notice from "./components/Footer/notice";
import useBreakpoint from "./hooks/useBreakpoint";

const browserHistory = createBrowserHistory();

const { Content } = Layout;

// const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

function App() {
  const isSmallScreen = useBreakpoint();
  return (
    <ThemeProvider theme={theme}>
      <StrictMode>
        <Suspense fallback={null}>
          <Router history={browserHistory}>
            <Header />
            <Content>
              <Switch>
                <Route component={Homepage} exact path="/" />
                <Route component={EcosystemPage} exact path="/ecosystem" />
                <Route component={Product} exact path="/product" />
                <Route component={Tech} exact path="/tech" />
                <Route component={DaoPage} exact path="/dao" />
                <Route component={Awns} exact path="/awns" />
                <Route component={Soda} exact path="/cliqueSocial" />
                <Route component={GamePortal} exact path="/gamePortal" />
                <Route component={Transprancy} exact path="/Transparency" />
                <Route component={DeveloperEngine} exact path="/developerEngine" />
              </Switch>
            </Content>
            {
              // isSmallScreen && <Notice />
            }
          </Router>
        </Suspense>
      </StrictMode>
    </ThemeProvider>
  );
}

export default App;
