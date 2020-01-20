import React, { Component } from 'react';

import NavigationItem from './navigationItem';
import Menus from '../../config/menus.json';

class NavigationItems extends Component {

    render() {
        let menus = Menus.map(menu => { 
            return <NavigationItem key={menu.value} link={`/${menu.link}`} exact="true">{menu.value}</NavigationItem> 
        })
        
        return (
            <React.Fragment>
                {menus}
            </React.Fragment>
        )
    }
}

export default NavigationItems;