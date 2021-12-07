import Principal from './pages/Principal';
import SearchPaises from './pages/SearchPaises';
import Team from './pages/Team';
import SearchLigas from './pages/SearchLigas';
import SearchEquipos from './pages/SearchEquipos';
import SearchEquiposNombre from './pages/SearchEquiposNombre';
import SearchLigasPorPais from './pages/SearchLigasPorPais';
import { Switch, BrowserRouter, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Principal}/>
        <Route exact path='/searchcountries' component={SearchPaises}/>
        <Route path="/searchligas/:searchCriteria" component={SearchLigas} />
        <Route path="/searchligasporpais/:searchCriteria" component={SearchLigasPorPais} />
        <Route path="/searchequipos/:searchCriteria" component={SearchEquipos} />
        <Route path="/equipo/:searchCriteria" component={Team} />
        <Route path="/searchequiposnombre/:searchCriteria" component={SearchEquiposNombre} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
