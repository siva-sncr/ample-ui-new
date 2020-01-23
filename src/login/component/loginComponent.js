import React from 'react';
import { Form, Button, FormGroup, FormControl } from "react-bootstrap";
import '../../resources/css/login.css';
import { FormattedMessage } from 'react-intl';
import Footer from '../../footer/component/footerComponent';

const loginComponent = (props) => {

    const errorMsg = props.error ? <div className="alert-error"><span><FormattedMessage id="data.invalidUserPass" /></span></div> : null;
    return (
        <div>
            <div className="login-view">
                <div className="login-content">
                    <div className="login-wrap">
                        <Form horizontal action="https://172.18.2.121/devicemanagement/j_spring_openid_security_check" method="POST" onSubmit={props.onLogin}>
                            <h3 className="login-title"><FormattedMessage id="data.loginTitle"></FormattedMessage></h3>
                            {errorMsg}
                            <FormGroup controlId="formHorizontalEmail" className="mrgnlr0">
                                <FormControl
                                    type="input"
                                    name="j_username"
                                    onChange={(evt) => props.changeUsername(evt)}
                                    placeholder="Username" />
                            </FormGroup>
                            <FormGroup controlId="formHorizontalPassword" className="mrgnlr0">
                                <FormControl
                                    type="password"
                                    name="j_password"
                                    onChange={(evt) => props.changePassword(evt)}
                                    placeholder="Password" />
                            </FormGroup>
                            <FormGroup className="mrgnlr0">
                                <Button
                                    type="submit"
                                    disabled={(props.username !== "" && props.password !== "") ? false : true}
                                    block
                                    bsStyle="warning"
                                // onClick={(evt) => props.onLogin(evt)}
                                >
                                    <FormattedMessage id="common.button.login" />
                                </Button>
                            </FormGroup>
                            <Button bsStyle="link" className="forgot-password"><FormattedMessage id="data.forgotPassword" /></Button>
                        </Form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default loginComponent;