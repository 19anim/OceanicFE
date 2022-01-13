import React from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  FormGroup,
  Input,
  Button,
  Form,
  Label,
  Table
} from "reactstrap";
// core components

function RoutesList() {
  return (
    <>
      <div className="content">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Available Routes</CardTitle>
              </CardHeader>
              <CardBody>
                <div>
                <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">Cheapest</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">Fastest</label>
</div>
                </div>
                <Table>
                  <thead className="text-primary">
                    <tr>
                      <th class="col-2.5">From</th>
                      <th class="col-2.5">To</th>
                      <th class="col-1">Weight</th>
                      <th class="col-1">Heigh</th>
                      <th class="col-1">Width</th>
                      <th class="col-2">Parcel Type</th>
                      <th class="col-1">Price</th>
                      <th class="col-1"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>10kg</td>
                      <td>20cm</td>
                      <td>25cm</td>
                      <td>Parcel</td>
                      <td>10$</td>
                      <td><Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        round outline
                      >
                        Select
                      </Button></td>
                    </tr>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>11kg</td>
                      <td>24cm</td>
                      <td>30cm</td>
                      <td>Fragile</td>
                      <td>15$</td>
                      <td><Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        round outline
                      >
                        Select
                      </Button></td>
                      </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
      </div>
    </>
  );
}

export default RoutesList;
