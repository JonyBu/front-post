import React from "react";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => (
  <nav className="navbar navbar-dark bg-primary">
    <LinkContainer to="/">
      <button className="btn btn-primary">Home</button>
    </LinkContainer>
    <LinkContainer to="/detalle">
      <button className="btn btn-primary">Detalle</button>
    </LinkContainer>
    <LinkContainer to="/formularioNuevo">
    <button className="btn btn-primary">Nuevo</button>
    </LinkContainer>
    <LinkContainer to="/formularioEdicion">
      <button className="btn btn-primary">Editar</button>
    </LinkContainer>
  </nav>
);

export default Header;
