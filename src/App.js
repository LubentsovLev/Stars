import logo from "./logo.svg";
import "./App.css";

import Planet from "./components/planet/planet";
import { Provider, useDispatch, useSelector } from "react-redux";

import { HashRouter, Route, Switch, withRouter } from "react-router-dom";
import store from "./redux/redux_store";
import Header from "./components/header/header";
import Main from "./components/main/main";
import PlanetsContainer from "./components/planetsContainer/planetsContainer";
import PlanetsImg from "./components/plImg/planetsImg";
import StickyFooter from "./components/common/M_footer";

function App() {
  return (
    <div className="App">
      <header className="">
        <Header />
      </header>
      <div className="app_main">
        <Switch>
          {/* <Route
            exact
            path="/"
            render={() => <Redirect to={"/BooksContainer"} />}
          /> */}

          <Route path="/PlanetsImg" render={() => <PlanetsImg />} />
          <Route path="/Planets" render={() => <PlanetsContainer />} />
          <Route path="/" render={() => <Main />} />
          <Route exact path="*" render={() => <div>404 NOT FOUND</div>} />
        </Switch>
      </div>
      <StickyFooter />
    </div>
  );
}
let WrappedApp = withRouter(App);
const MainApp = (props) => {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}></BrowserRouter>
    // <HashRouter></HashRouter>
    <HashRouter>
      <Provider store={store}>
        <WrappedApp />
      </Provider>
    </HashRouter>
  );
};

export default MainApp;
