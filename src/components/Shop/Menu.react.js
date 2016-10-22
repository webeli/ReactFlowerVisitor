import React, { Component } from 'react';
import { Checkbox, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';

class Menu extends Component {

    render() {

        let mappedPriceMenu, mappedColorMenu, mappedTypeMenu, mappedEventMenu;

        if (this.props.attributes.colours) {
            mappedPriceMenu = (
                <div>
                    <Panel><Checkbox>0 - 199kr</Checkbox></Panel>
                    <Panel><Checkbox>200 - 399kr</Checkbox></Panel>
                    <Panel><Checkbox>400 - 599kr</Checkbox></Panel>
                    <Panel><Checkbox>600kr +</Checkbox></Panel>
                </div>
            );
            mappedColorMenu = Object.keys(this.props.attributes.colours).map( (colour, index) => {
                return ( <Panel key={index}><Checkbox>{colour}</Checkbox></Panel> )
            });
            mappedTypeMenu = Object.keys(this.props.attributes.types).map( (type, index) => {
                return ( <Panel key={index}><Checkbox>{type}</Checkbox></Panel> )
            });
            mappedEventMenu = Object.keys(this.props.attributes.events).map( (event, index) => {
                return ( <Panel key={index}><Checkbox>{event}</Checkbox></Panel> )
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
        attributes: state.attributes
    };
}
export default connect(mapStateToProps)(Menu);