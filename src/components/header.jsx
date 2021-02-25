import React from "react";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => (
  <nav className="navbar navbar-dark bg-dark">
    <LinkContainer to="/">
      <button className="btn btn-light">Home</button>
    </LinkContainer>
    <LinkContainer to="/detalle">
      <button className="btn btn-light">Detalle</button>
    </LinkContainer>
    <LinkContainer to="/formularioNuevo">
      <button className="btn btn-light">Nuevo</button>
    </LinkContainer>
    <LinkContainer to="/formularioEdicion">
      <button className="btn btn-light">Editar</button>
    </LinkContainer>
  </nav>
);

export default Header;
