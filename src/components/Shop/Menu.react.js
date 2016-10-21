import React, { Component } from 'react';
import { Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';

class Menu extends Component {

    render() {

        let mappedColorMenu, mappedTypeMenu, mappedEventMenu;

        console.log(this.props.attributes.colours);
        if (this.props.attributes.colours) {
            mappedColorMenu = Object.keys(this.props.attributes.colours).map( (colour) => {
                return ( <Checkbox key={colour}>{colour}</Checkbox> )
            });
            mappedTypeMenu = Object.keys(this.props.attributes.types).map( (type) => {
                return ( <Checkbox key={type}>{type}</Checkbox> )
            });
            mappedEventMenu = Object.keys(this.props.attributes.events).map( (event) => {
                return ( <Checkbox key={event}>{event}</Checkbox> )
            });
        } else {
            mappedColorMenu = () => {
                return (
                    <img src="http://bestanimations.com/Science/Gears/loadinggears/loading-gear-2.gif" height="50px" alt="Mountain View"/>
                )
            };
            mappedTypeMenu = () => {
                return (
                    <img src="http://bestanimations.com/Science/Gears/loadinggears/loading-gear-2.gif" alt="Mountain View"/>
                )
            };
            mappedEventMenu = () => {
                return (
                    <img src="http://bestanimations.com/Science/Gears/loadinggears/loading-gear-2.gif" alt="Mountain View"/>
                )
            };
        }

        return (
            <div>
                <h4>Pris</h4>
                <Checkbox>0 - 199kr</Checkbox>
                <Checkbox>200 - 399kr</Checkbox>
                <Checkbox>400 - 599kr</Checkbox>
                <Checkbox>600kr +</Checkbox>
                <h4>Färg</h4>
                {mappedColorMenu}
                <h4>Blomstertyp</h4>
                {mappedTypeMenu}
                <h4>Event</h4>
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