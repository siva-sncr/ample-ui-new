import React, { Component } from 'react';
import { withRouter } from "react-router";
import { FormattedMessage } from 'react-intl';

import Navigations from './navigation/navigations';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar fluid inverse >

                <Navbar.Header>
                    <Navbar.Brand>
                        <div className="header_logo">
                            <span className="logo_text">
                                <FormattedMessage id="common.logoTitle"></FormattedMessage>
                            </span>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav>
                        <Navigations />
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        );
    }
}

export default withRouter(Header);