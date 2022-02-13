import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
//여기서부터 App은 라우터 담당
// localhost:3000/movies/123
// HashRouter 일 경우 localhost:3000/#/이 붙음
// Switch -> 한번에 하나의 컴포넌트만 렌더링하기 위해 사용
import Home from "./routes/Home";
// /movie:id -> 리액트라우터에서 제공하는 동적 url
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
