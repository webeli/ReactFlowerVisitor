import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Geosuggest from 'react-geosuggest';
import '../../styles/geosuggest.css';

class Start extends Component {

    onSuggestSelect(suggest) {
        console.log(suggest);
        browserHistory.push(`/shop/${suggest.location.lat}/${suggest.location.lng}`);
    }

    render() {
        const fixtures = [
            {label: 'Helsingborg', location: {lat: 56.0464674, lng: 12.694512099999997}},
            {label: 'Malmö', location: {lat: 55.604981, lng: 13.003822000000014}},
            {label: 'Stockholm', location: {lat: 59.32932349999999, lng: 18.068580800000063}}
        ];

        return (
            <div>
                <h2>Start</h2>
                <Geosuggest
                    placeholder="Skicka till adress"
                    fixtures={fixtures}
                    country="se"
                    onSuggestSelect={this.onSuggestSelect}/>
            </div>
        );
    }
}

export default Start;