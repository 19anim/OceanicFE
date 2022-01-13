/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col, Form, FormGroup, Input, Button,
} from "reactstrap";

function PlaceOrder() {
    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card >
                            <CardHeader>
                                <CardTitle tag="h4">Selected route</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table>
                                    <thead className="text-primary">
                                    <tr>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Weight</th>
                                        <th>Type</th>
                                        <th>Estimate time</th>
                                        <th className="text-right"> Estimate Cost</th>
                                        {/*<th className="text-right">Salary</th>*/}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Dakota Rice</td>
                                        <td>Niger</td>
                                        <td>Less than 3kg</td>
                                        <td>Weapons</td>
                                        <td>24h</td>

                                        <td className="text-right">$36,738</td>


                                          
                                    </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>



                    <Col md="6">
                        <Card className="card-user">
                            <CardHeader>
                                <CardTitle tag="h5">Customer information</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="12">
                                            <FormGroup>
                                                <label>Customer name</label>
                                                <Input
                                                    defaultValue="michael23"
                                                    placeholder="Username"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    {/*<Row>*/}
                                    {/*    <Col className="pr-1" md="12">*/}
                                    {/*        <FormGroup>*/}
                                    {/*            <label>Phone</label>*/}
                                    {/*            <Input*/}
                                    {/*                defaultValue="michael23"*/}
                                    {/*                placeholder="Username"*/}
                                    {/*                type="text"*/}
                                    {/*            />*/}
                                    {/*        </FormGroup>*/}
                                    {/*    </Col>*/}
                                    {/*</Row>*/}
                                    {/*<Row>*/}
                                    {/*    <Col className="pr-1" md="12">*/}
                                    {/*        <FormGroup>*/}
                                    {/*            <label>Address</label>*/}
                                    {/*            <Input*/}
                                    {/*                defaultValue="michael23"*/}
                                    {/*                placeholder="Username"*/}
                                    {/*                type="text"*/}
                                    {/*            />*/}
                                    {/*        </FormGroup>*/}
                                    {/*    </Col>*/}
                                    {/*</Row>*/}
                                    {/*<Row>*/}
                                    {/*    <Col className="pr-1" md="12">*/}
                                    {/*        <FormGroup>*/}
                                    {/*            <label>Email</label>*/}
                                    {/*            <Input*/}
                                    {/*                defaultValue="michael23@mail.com"*/}
                                    {/*                placeholder="Username"*/}
                                    {/*                type="text"*/}
                                    {/*            />*/}
                                    {/*        </FormGroup>*/}
                                    {/*    </Col>*/}
                                    {/*</Row>*/}
                                    <Row>
                                        <Col className="pr-1" md="12">
                                            <div>
                                                <Button
                                                    className="btn-round float-right"
                                                    color="primary"
                                                    type="submit"
                                                >
                                                    Confirm
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

export default PlaceOrder;
