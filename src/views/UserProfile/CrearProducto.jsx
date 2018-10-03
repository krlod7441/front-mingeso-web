import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";

class CrearProducto extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={11}>
              <Card
                 title="Crear un Producto"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-2", "col-md-4", "col-md-6"]}
                      proprieties={[
                        {
                          label: "ID (disabled)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Company",
                          defaultValue: "7",
                          disabled: false
                        },
                        {
                          label: "Nombre",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Nombre",
                          defaultValue: "Producto 7"
                        },
                        {
                          label: "Descripción",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "description"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-8"]}
                      proprieties={[
                        {
                          label: "Valor",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Valor",
                          defaultValue: "$2.500"
                        },
                        {
                          label: "Categoría",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Categoría",
                          defaultValue: "frutas"
                        }
                      ]}
                    />
                   
                    

                    <Row>
                     
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit">
                      Crear Producto
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
           
          </Row>
        </Grid>>
      </div>
    );
  }
}

export default CrearProducto;
