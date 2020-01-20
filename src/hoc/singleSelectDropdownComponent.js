import React  from 'react';
import Multiselect  from 'react-bootstrap-multiselect';

const singleSelectDropdown = (props) => {
    return <Multiselect  className={'full-width'} nonSelectedText='Select'  maxHeight="230"  onChange={props.handleChange} ref={props.refs} data={props.data}  multiple={false} />
}

export default singleSelectDropdown;