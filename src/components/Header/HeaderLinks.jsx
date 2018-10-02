import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import iconAgreagar from "assets/img/icon-agregar.png";
import econEliminar from "assets/img/icon-eliminar.png";

class HeaderLinks extends Component {
 render() {

  const ImgIconoAgregar = {
      backgroundImage: "url(" + iconAgreagar + ")"

    };

    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">7</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>        
         
        </Nav>
       
      </div>
    );
  }
}

export default HeaderLinks;

