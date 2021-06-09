import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { SvgDoc } from "@/pages/svgDoc";
import * as life from "@/redux/reducer/state_logic_reducer";
import "@/styles/main.scss";
// import { TestComponents } from "@/pages/testComponents";
// import { TestListEmotion } from "@/test-components/test-list";
// import { CxTest5 } from "@/test-components/test-emotion5";
import { TopFormFloating } from "@/components/top-form-floating";
// import { CxTest } from "@/test-components/test-emotion";
// import { TestFontAwesome } from "@/test-components/test-font";

/*

import { TestReactSelect } from "@/test-components/test-react-select";
import { TestSelectCustStyles } from "@/test-components/test-react-select2";

import "@/css/fa_font_local.css";
import "@/css/all_signs.css";
*/

/* Провести начальную инициализацию жизни  */
store.dispatch(life.initState({ sizex: 30, sizey: 30 }));
store.dispatch(life.randomSeed({ seedPercent: 0.3 }));
store.dispatch(life.caclNeighbors(null));

export const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Начало</Link>
          </li>
          <li>
            <Link to="/svg">SVG</Link>
          </li>
          <li>
            <Link to="/test2">Test FA</Link>
          </li>
          <li>
            <Link to="/test3">Test react select</Link>
          </li>
          <li>
            <Link to="/top-form-floating">Form floating</Link>
          </li>
          {/*
          <li>
            <Link to="/gamespace">Поле для игры тестовое</Link>
          </li>

          <li>
            <Link to="/test">Test components</Link>
          </li>*/}
        </ul>
      </nav>
      <Switch>
        <Route exact path="/svg">
          <SvgDoc />
        </Route>{" "}
        <Route exact path="/test2">
          {/*<TestFontAwesome />*/}
        </Route>
        <Route exact path="/test3">
          {/*<TestReactSelect />*/}
          {/* react select с custom render */}
          {/*<TestSelectCustStyles />*/}
          {/*<TestListEmotion />*/}
          {/*<CxTest5 />*/}
        </Route>
        <Route exact path="/top-form-floating">
          <TopFormFloating />
        </Route>
        <Route path="*">
          <div>
            <h1>Нажмите кнопку SVG</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  </Provider>
);
