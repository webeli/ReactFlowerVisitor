import React, { Component } from 'react';
import { Checkbox, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';

class Menu extends Component {

    render() {

        let mappedColorMenu, mappedTypeMenu, mappedEventMenu;

        if (this.props.attributes.colours) {
            mappedColorMenu = Object.keys(this.props.attributes.colours).map( (colour) => {
                return ( <Panel><Checkbox key={colour}>{colour}</Checkbox></Panel> )
            });
            mappedTypeMenu = Object.keys(this.props.attributes.types).map( (type) => {
                return ( <Panel><Checkbox key={type}>{type}</Checkbox></Panel> )
            });
            mappedEventMenu = Object.keys(this.props.attributes.events).map( (event) => {
                return ( <Panel><Checkbox key={event}>{event}</Checkbox></Panel> )
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
                <h5 style={{fontSize:'11px'}}>Pris</h5>
                <Panel><Checkbox>0 - 199kr</Checkbox></Panel>
                <Panel><Checkbox>200 - 399kr</Checkbox></Panel>
                <Panel><Checkbox>400 - 599kr</Checkbox></Panel>
                <Panel><Checkbox>600kr +</Checkbox></Panel>
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