import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//1. react-router-dom 설치.
// react-router-dom은 아주 멋잇는 컴포넌트들의 모음집.
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <Router>
      {/* 2.react-router-dom 의 첫번째 컴포넌트는 Router */}
      <Switch>
        {/* 3.Switch컴포넌트는 한번에 하나의 Router만 렌더링 하기 위해 넣어줌 */}
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
