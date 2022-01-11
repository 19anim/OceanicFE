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

function ViewResult() {
    return (
        <>
            <div className="content">
                <Row>



                    <Col md="12">
                        <Card className="card-plain">
                            <CardHeader>


                            </CardHeader>
                            <CardBody>
                                <Table >
                                    <tbody>
                                    <CardTitle tag="h4">Delivery information</CardTitle>
                                    <tr>
                                        <td  style={{fontWeight:"bold"}}>Date:</td>
                                        <td>20/20/2021 </td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight:"bold"}}>From:</td>
                                        <td>ABC</td>

                                    </tr>
                                    <tr>
                                        <td style={{fontWeight:"bold"}}>To:</td>
                                        <td>ABC</td>

                                    </tr>
                                    <tr>
                                        <td style={{fontWeight:"bold"}}>Weight:</td>
                                        <td>Less than 3kg</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight:"bold"}}>Type:</td>
                                        <td>Document</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight:"bold"}}>Estimate time:</td>
                                        <td>24h</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight:"bold"}}>Total price:</td>
                                        <td>100$</td>
                                    </tr>
                                    <CardTitle tag="h4">Customer information</CardTitle>
                                    <tr>
                                        <td style={{fontWeight:"bold"}}>Name:</td>
                                        <td>Nguyen Lam Van</td>

                                    </tr>
                                    <tr>
                                        <td style={{fontWeight:"bold"}}>Phone:</td>
                                        <td>0985900514</td>

                                    </tr>
                                    <tr>
                                        <td style={{fontWeight:"bold"}}>Address:</td>
                                        <td> Vung Tau tp Ho Chi Min</td>

                                    </tr>
                                    <tr>
                                        <td style={{fontWeight:"bold"}}>Email:</td>
                                        <td>van@mail.com</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </div>
        </>
    );
}

export default ViewResult;
