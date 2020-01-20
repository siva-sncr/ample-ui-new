import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';

const navigationItem = (props) => (
    <NavItem
        componentClass={Link}
        to={props.link}
        className={(props.history.location.pathname === props.link) ? 'active' : ''}
        href={props.link}
        exact={props.exact}
    >{props.children}
    </NavItem>
);

export default withRouter(navigationItem)