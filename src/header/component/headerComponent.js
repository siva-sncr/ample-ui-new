import React from 'react';
import { withRouter } from "react-router";
import { Navbar, Nav, Glyphicon, NavDropdown, MenuItem } from 'react-bootstrap';
import Navigations from "../navigation/navigations";
// import { LinkContainer } from 'react-router-bootstrap';
import '../../resources/css/common.css';
import { FormattedMessage } from 'react-intl';

const header = (props) => {
    return (
        <Navbar fluid fixedTop bg="inverse" variant="dark">
            <Navbar.Header>
                <Navbar.Brand>
                    <div className="logo"></div>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <Navigations />
                </Nav>
                <Nav pullRight>
                    <NavDropdown id="1" title="Current Jobs" className="nav-dropdown-menu">
                        <MenuItem><FormattedMessage id="data.deviceConfiguration" /></MenuItem>
                        <MenuItem><FormattedMessage id="data.firmwareUpgrade" /></MenuItem>
                    </NavDropdown>
                    <NavDropdown id="2" title={<Glyphicon glyph="cog" />} className="nav-dropdown-menu">
                        {/* <LinkContainer to="/system-admin"> */}
                        <MenuItem><FormattedMessage id="data.systemAdmin" /></MenuItem>
                        {/* </LinkContainer> */}
                        <MenuItem><FormattedMessage id="data.configueProperties" /></MenuItem>
                        <MenuItem><FormattedMessage id="data.manageProfiles" /></MenuItem>
                        <MenuItem><FormattedMessage id="data.userManagement" /></MenuItem>
                        <MenuItem><FormattedMessage id="data.about" /></MenuItem>
                    </NavDropdown>
                    <NavDropdown id="3" title={<Glyphicon glyph="user" />} className="nav-dropdown-menu">
                        <MenuItem><FormattedMessage id="data.updateProfile" /></MenuItem>
                        <MenuItem><FormattedMessage id="data.changePassword" /></MenuItem>
                        <MenuItem><FormattedMessage id="data.logOut" /></MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default withRouter(header);