import React, { StrictMode, Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { Layout } from "antd";
import Product from "./pages/Product";
import Tech from "./pages/Tech";
import Header from "./components/Header";
import {Footer} from "./pages/Home/homepage";
import "./App.less";
import Homepage from "./pages/Home/homepage";
import EcosystemPage from "./pages/Ecosystem/EcosystemPage";
import DaoPage from "./pages/DAO/daoPage";
import Awns from "./pages/Awns/index";
import Soda from "./pages/Soda/index";
import GamePortal from './pages/GamePortal/index'
import Clique from './pages/Clique'
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { createBrowserHistory } from 'history'
const browserHistory = createBrowserHistory()

const { Content } = Layout;

// const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

function App() {
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
                <Route component={Clique} exact path="/cliqueL3" />
              </Switch>
            </Content>
          </Router>
        </Suspense>
      </StrictMode>
    </ThemeProvider>
  );
}

export default App;
