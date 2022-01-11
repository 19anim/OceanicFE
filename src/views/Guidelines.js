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
  Alert
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";

function Guidelines() {
  return (
    <>
      <div className="content">
        <Row>
            <Col lg="12" md="12" sm="12">
                    <Card className="card-user">
                    <CardHeader>
                        <CardTitle tag="h5">Inputs</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Form>
                        <Row>
                            <Col className="pr-1" md="4">
                            <FormGroup>
                                <label>Text Input</label>
                                <Input
                                defaultValue="......"
                                type="text"
                                />
                            </FormGroup>
                            </Col>
                            <Col className="pl-1" md="4">
                            <FormGroup>
                                <label>Disabled Text Input</label>
                                <Input
                                defaultValue="......"
                                type="text"
                                disabled="true"
                                />
                            </FormGroup>
                            </Col>
                            <Col className="has-danger" md="4">
                            <FormGroup>
                                <Label for="error" className="control-label">Error input</Label>
                                <Input type="text" name="error" id="error" defaultValue="Error input" />
                            </FormGroup>
                            </Col>
                        </Row>
                        </Form>
                    </CardBody>
                    </Card>
            </Col>
        </Row>
        <Row>
            <Col lg="12" md="12" sm="12">
                    <Card className="card-user">
                    <CardHeader>
                        <CardTitle tag="h5">Buttons</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Form>
                        <Row>
                            <Col className="pr-1" md="2">
                                <FormGroup>
                                    <Button
                                        className="btn-round btn-block"
                                        color="primary"
                                        type="submit"
                                    >
                                        Primary Button 
                                    </Button>
                                </FormGroup>
                            </Col>
                            <Col className="pr-1" md="2">
                                <FormGroup>
                                    <Button
                                        className="btn-round btn-block"
                                        color="primary"
                                        type="submit"
                                        round outline
                                    >
                                        Primary Outlined Button
                                    </Button>
                                </FormGroup>
                            </Col>
                            <Col className="pr-1" md="2">
                                <FormGroup>
                                    <Button
                                        className="btn-round btn-block"
                                        color="primary"
                                        type="submit"
                                        disabled="true"
                                    >
                                        Disabled Button
                                    </Button>
                                </FormGroup>
                            </Col>
                            <Col className="pr-1" md="2">
                                <FormGroup>
                                    <Button
                                        className="btn-round btn-block"
                                        color="success"
                                        type="submit"
                                    >
                                        Confirm Button
                                    </Button>
                                </FormGroup>
                            </Col>
                            <Col className="pr-1" md="2">
                                <FormGroup>
                                    <Button
                                        className="btn-round btn-block"
                                        color="danger"
                                        type="submit"
                                    >
                                        Cancel Button
                                    </Button>
                                </FormGroup>
                            </Col>
                            <Col className="pr-1" md="2">
                                <FormGroup>
                                    <Button
                                        className="btn-round btn-block"
                                        color="default"
                                        type="submit"
                                    >
                                        Default Button
                                    </Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    
                        </Form>
                    </CardBody>
                    </Card>
            </Col>
        </Row>
        <Row>
            <Col lg="12" md="12" sm="12">
                    <Card className="card-user">
                    <CardHeader>
                        <CardTitle tag="h5">Alert</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Form>
                        <Row>
                        <Col className="pr-1" md="1">
                            
                            </Col>
                            <Col className="pr-1" md="10">
                            <Alert color="success">
                                Create user successfully
                            </Alert>
                            </Col>
                            <Col className="pr-1" md="1">
                            
                            </Col>
                        </Row>
                        <Row>
                        <Col className="pr-1" md="1">
                            
                            </Col>
                            <Col className="pr-1" md="10">
                            <Alert color="danger">
                                Create user failed
                            </Alert>
                            </Col>
                            <Col className="pr-1" md="1">
                            
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
export default Guidelines;
