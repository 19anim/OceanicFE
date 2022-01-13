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
    Col, Button,
} from "reactstrap";

function UserList() {
    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <div>
                            <Button
                                className="btn-round float-right"
                                color="primary"
                                type="submit"
                            >
                                Create new user
                            </Button>
                        </div>
                    </Col>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">List of users</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table >
                                    <thead className="text-primary">
                                    <tr>
                                        <th>Username</th>
                                        <th>Password</th>
                                        <th>Full name</th>
                                        <th>Phone</th>
                                        <th className="text-right">Email</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Dakota Rice</td>
                                        <td>Niger</td>
                                        <td>Oud-Turnhout</td>
                                        <td>0985900614</td>
                                        <td className="text-right">van@mail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Minerva Hooper</td>
                                        <td>Curaçao</td>
                                        <td>Sinaai-Waas</td>
                                        <td>0985900614</td>
                                        <td className="text-right">van@mail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Sage Rodriguez</td>
                                        <td>Netherlands</td>
                                        <td>Baileux</td>
                                        <td>0985900614</td>
                                        <td className="text-right">van@mail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Philip Chaney</td>
                                        <td>Korea, South</td>
                                        <td>Overland Park</td>
                                        <td>0985900614</td>
                                        <td className="text-right">van@mail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Doris Greene</td>
                                        <td>Malawi</td>
                                        <td>Feldkirchen in Kärnten</td>
                                        <td>0985900614</td>
                                        <td className="text-right">van@mail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Mason Porter</td>
                                        <td>Chile</td>
                                        <td>Gloucester</td>
                                        <td>0985900614</td>
                                        <td className="text-right">van@mail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Jon Porter</td>
                                        <td>Portugal</td>
                                        <td>Gloucester</td>
                                        <td>0985900614</td>
                                        <td className="text-right">van@mail.com</td>
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

export default UserList;
