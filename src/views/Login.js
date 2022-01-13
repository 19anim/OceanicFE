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
import '../assets/css/login.css'
// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col, Button, Input,
} from "reactstrap";

function Login() {
    return (
        <>
            <div className="wrapperlogin fadeInDown">
                <div id="formContent">
                    {/* Tabs Titles */}
                    {/* Icon */}
                    <div className="fadeIn first">
                     <h1 style={{marginTop: "10px"}}>Login</h1>
                    </div>
                    {/* Login Form */}
                    <form>
                        <Row>
                            <Col className="pr-1" md="12">
                                <Input type="text" id="login" className="loginfield" name="login" placeholder="username" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="pr-1" md="12">
                                <Input type="password" id="password" className="loginfield" name="login" placeholder="password" />
                            </Col>
                        </Row>

                    </form>
                    <Row>
                        <Col className="text-center" md="12">

                                <Button
                                    style={{width: "80%"}}
                                    className="btn-round"
                                    color="primary"
                                    type="submit"
                                >
                                   Login
                                </Button>

                        </Col>
                    </Row>
                    {/* Remind Passowrd */}
                    {/*<div id="formFooter">*/}
                    {/*    <a className="underlineHover" href="#">Forgot Password?</a>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    );
}

export default Login;
