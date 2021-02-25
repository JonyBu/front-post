import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./components/home";
import Detalle from "./components/detalle";
import FormularioNuevo from "./components/formularioNuevo";
import FormularioEdicion from "./components/formularioEdicion";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/detalle" component={Detalle} />
        <Route path="/formularioNuevo" component={FormularioNuevo} />
        <Route path="/formularioEdicion" component={FormularioEdicion} />
      </Switch>
    </Router>
  );
}

export default App;
