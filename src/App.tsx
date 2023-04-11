import React, {StrictMode, Suspense, useEffect } from 'react'
import { HashRouter, Route, Switch } from "react-router-dom";
import { Layout } from 'antd';
import Home from "./pages/Home";
import Ecosystem from "./pages/Ecosystem";
import Product from "./pages/Product";
import Tech from "./pages/Tech";
import Developers from "./pages/Developers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DAO from './pages/DAO'
import './App.less';

const { Content } = Layout;
// const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

function App() {
  return (
    <StrictMode>
      <Suspense fallback={null}>
        <HashRouter>
          <Header />
          <Content>
            <Switch>
              <Route component={Home} exact path="/" />
              <Route component={Ecosystem} exact path="/ecosystem" />
              <Route component={Product} exact path="/product" />
              <Route component={Tech} exact path="/tech" />
              <Route component={DAO} exact path="/dao"/>
              {/* <Route component={Developers} exact path="/developers" /> */}
            </Switch>
          </Content>
          <Footer/>
        </HashRouter>
      </Suspense>
    </StrictMode>
  );
}

export default App;
