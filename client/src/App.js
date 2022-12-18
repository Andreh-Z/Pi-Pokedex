import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./Components/Landing";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
