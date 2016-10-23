import React, { Component } from 'react';
import { } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as filterActions from '../../actions/filterActions';
import Checkbox from 'material-ui/Checkbox';

class Menu extends Component {

    render() {

        let mappedPriceMenu, mappedColorMenu, mappedTypeMenu, mappedEventMenu;

        if (this.props.attributes.colours) {
            mappedPriceMenu = (
                <div>
                    <Checkbox label="0 - 199kr"/>
                    <Checkbox label="200 - 299kr"/>
                    <Checkbox label="300 - 399kr"/>
                    <Checkbox label="400 - 499kr"/>
                    <Checkbox label="500+"/>
                </div>
            );
            mappedColorMenu = Object.keys(this.props.attributes.colours).map( (colour, index) => {
                return ( <Checkbox key={index} label={colour} onCheck={(e, checked)=>this.props.updateFilterColours(colour, checked)}/> )
            });
            mappedTypeMenu = Object.keys(this.props.attributes.types).map( (type, index) => {
                return ( <Checkbox key={index} label={type} onCheck={(e, checked)=>this.props.updateFilterTypes(type, checked)}/> )
            });
            mappedEventMenu = Object.keys(this.props.attributes.events).map( (event, index) => {
                return ( <Checkbox key={index} label={event} onCheck={(e, checked)=>this.props.updateFilterEvents(event, checked)}/> )
            });
        } else {
            mappedPriceMenu = (
                <img src="http://interestingengineering.com/loading.gif" style={{height:'150px'}} alt=""/>
            );
            mappedColorMenu = (
                <img src="http://interestingengineering.com/loading.gif" style={{height:'150px'}} alt=""/>
            );
            mappedTypeMenu = (
                <img src="http://interestingengineering.com/loading.gif" style={{width:'150px'}} alt=""/>
            );
            mappedEventMenu = (
                <img src="http://interestingengineering.com/loading.gif" style={{width:'150px'}} alt=""/>
            );
        }

        return (
            <div>
                <h5 style={{fontSize:'11px'}}>Pris</h5>
                {mappedPriceMenu}
                <h5 style={{fontSize:'11px'}}>Färg</h5>
                {mappedColorMenu}
                <h5 style={{fontSize:'11px'}}>Blomstertyp</h5>
                {mappedTypeMenu}
                <h5 style={{fontSize:'11px'}}>Event</h5>
                {mappedEventMenu}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        attributes: state.attributes,
        filter: state.filter
    };
}
function mapDispatchToProps(dispatch) {
    return {
        updateFilterColours: (value, checked) => dispatch(filterActions.updateFilterColours(value, checked)),
        updateFilterTypes: (value, checked) => dispatch(filterActions.updateFilterTypes(value, checked)),
        updateFilterEvents: (value, checked) => dispatch(filterActions.updateFilterEvents(value, checked))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);