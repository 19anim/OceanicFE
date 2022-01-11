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

function CreateUser() {
  return (
    <>
      <div className="content">
      <Row>
      <Col md="12">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5"></CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          defaultValue="SalesAgent1"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Password</label>
                        <Input
                          defaultValue="***********"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                        <FormGroup>
                            <label>Full Name</label>
                            <Input
                            defaultValue="Ted Mosby"
                            placeholder="Company"
                            type="text"
                            />
                        </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Phone</label>
                        <Input
                          defaultValue="45121212"
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Email</label>
                        <Input
                          defaultValue="teddybear@gmail.com"
                          placeholder="Company"
                          type="text"
                        />
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
                                Create
                            </Button>
                        </div>
                      </Col>
                    
                  </Row>
                </Form>
              </CardBody>
            </Card>
      </Col>
        </Row>
      </div>
    </>
  );
}

export default CreateUser;
