import React, { useEffect, useState }  from "react";

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
import RoutesList from "./RoutesList";

function Homepage() {
  const getUsers =  () => {
    console.log("Hello")
      const data = fetch('https://61de4567f60e8f0017668c45.mockapi.io/users', {
        method: 'GET'
      })
      .then(res => {
        console.log(res)
      })
      
  }

  useEffect(() => {
       getUsers()
  })
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
                          required
                        >
                        <option>ST.Helena</option>
                        <option>....</option>
                        </Input>
                        <div class="invalid-feedback">Please fill out this field.</div>
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
                  <Col className="pr-1" lg="3">
                      <FormGroup>
                        <label>Weigh (kg)</label>
                        <Input
                          defaultValue="10"
                          placeholder="Company"
                          type="number"
                        >
                            </Input>
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" lg="3">
                      <FormGroup>
                        <label>Heigh (cm)</label>
                        <Input
                          defaultValue="10"
                          placeholder="Company"
                          type="number" name="select"
                        >
                            </Input>
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" lg="3">
                      <FormGroup>
                        <label>Depth (cm)</label>
                        <Input
                          defaultValue="10"
                          placeholder="Company"
                          type="number" name="select"
                        >
                            </Input>
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" lg="3">
                      <FormGroup>
                        <label>Breadth (cm)</label>
                        <Input
                          defaultValue="10"
                          placeholder="Company"
                          type="number" name="select"
                        >
                            </Input>
                      </FormGroup>
                    </Col>
                    
                  </Row>
                  <Row>
                    <Col className="pl-1" lg="3">
                      <FormGroup>
                          <Label for="inputState">Parcel Type</Label>
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
