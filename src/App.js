import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/home";
import Login from "./components/login";



function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </HashRouter>
  );
}

export default App;