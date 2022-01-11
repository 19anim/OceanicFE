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
  Label
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";
import RoutesList from "./RoutesList";

function Homepage() {
  return (
    <>
      <div className="content">
      <Row>
      <Col md="12">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Welcome to Oceanic Airlnes</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>From</label>
                        <Input
                          defaultValue="City 1"
                          type="text"
                          type="select" name="select"
                        >
                        <option>ST.Helena</option>
                        <option>....</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>To</label>
                        <Input
                          defaultValue="City 2"
                          type="text"
                          type="select" name="select"
                        >
                        <option>Tripoli</option>
                        <option>....</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Weigh (kg)</label>
                        <Input
                          defaultValue="10"
                          placeholder="Company"
                          type="select" name="select"
                        >
                            <option>Less than 1kg</option>
                        <option>1-5 kg</option>
                        <option>More than 5kg</option>
                            </Input>
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                    <FormGroup>
                        <Label for="inputState">Package Type</Label>
                        <Input type="select" name="select" id="inputState" >
                        <option>Cautious parcels</option>
                        <option>Refrigerated goods</option>
                        </Input>
                    </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                      <Col>
                        <div>
                            <Button
                                className="btn-round float-right"
                                color="primary"
                                type="submit"
                            >
                                Search
                            </Button>
                        </div>
                      </Col>
                    
                  </Row>
                </Form>
              </CardBody>
            </Card>
      </Col>
        </Row>
        <Row>
        <Col md="12">
            <RoutesList/>
            </Col>
        </Row>
      </div>
    </>
  );
}

export default Homepage;
