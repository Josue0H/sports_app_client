import Principal from './components/Principal';
import SearchPaises from './pages/SearchPaises';
import { Switch, BrowserRouter, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Principal}/>
        <Route path="/searchpaises/:searchCriteria" component={SearchPaises} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
