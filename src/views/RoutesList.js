import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
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
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";

function RoutesList() {
  return (
    <>
      <div className="content">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Available Routes</CardTitle>
              </CardHeader>
              <CardBody>
                <Table>
                  <thead className="text-primary">
                    <tr>
                      <th class="col-2.5">From</th>
                      <th class="col-2.5">To</th>
                      <th class="col-2">Weigh</th>
                      <th class="col-2">Parcel Type</th>
                      <th class="col-1">Price</th>
                      <th class="col-1"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Less than 10kg</td>
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
                      <td>1-5kg</td>
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
