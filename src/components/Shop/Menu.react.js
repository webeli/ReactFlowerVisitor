import React, { Component } from 'react';

import { Checkbox } from 'react-bootstrap';

import { connect } from 'react-redux';

class Menu extends Component {

    render() {

        console.log("attributes..", this.props.attributes);

        const menus = [{
                "categoryName": "Pris",
                "categoryMenus": [
                    { "title": "0 - 199kr" },
                    { "title": "200 - 399kr" },
                    { "title": "400 - 599kr" },
                    { "title": "600kr +" }
                ]
            },
            {
                "categoryName": "Färg",
                "categoryMenus": [
                    { "title": "Blå" },
                    { "title": "Grön" },
                    { "title": "Gul" },
                    { "title": "Rosa" },
                    { "title": "Svart" },
                    { "title": "Vit" }
                ]
            },
            {
                "categoryName": "Blomstertyp",
                "categoryMenus": [
                    { "title": "Rosor" },
                    { "title": "Orkideér" },
                    { "title": "Påskeliljer" },
                    { "title": "Orkideer" },
                    { "title": "Kransar" },
                    { "title": "Krukväxter" },
                    { "title": "Liljer" }
                ]
            },
            {
                "categoryName": "Event",
                "categoryMenus": [
                    { "title": "Födelsedag" },
                    { "title": "Bröllop" },
                    { "title": "Nyfödd" },
                    { "title": "Begravning/Kondoleans" },
                    { "title": "Krya på dig" },
                    { "title": "Vänskap" },
                    { "title": "Tack-blommor" },
                    { "title": "Kärlek" },
                    { "title": "Övrigt" }
                ]
            }];

        const mappedPriceMenu = menus[0].categoryMenus.map( (menu) => {
            return (
                <Checkbox key={menu.title}>
                    {menu.title}
                </Checkbox>
            )
        });
        const mappedColorMenu = menus[1].categoryMenus.map( (menu) => {
            return (
                <Checkbox key={menu.title}>
                    {menu.title}
                </Checkbox>
            )
        });
        const mappedTypeMenu = menus[2].categoryMenus.map( (menu) => {
            return (
                <Checkbox key={menu.title}>
                    {menu.title}
                </Checkbox>
            )
        });
        const mappedEventMenu = menus[3].categoryMenus.map( (menu) => {
            return (
                <Checkbox key={menu.title}>
                    {menu.title}
                </Checkbox>
            )
        });

        return (
            <div>
                <h4>Pris</h4>
                {mappedPriceMenu}
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