import React, { Component } from 'react';
import './MeetupListItem.css';

class MeetupListItem extends Component {

    render() {
        const { meetup } = this.props;

        const twitterLink = meetup.twitter ?
            (<a href={`twitter.com/${meetup.twitter}`}>@{meetup.twitter}</a>) : null

        return (
            <li key={meetup.id} className="meetup__list-item">
                <section>
                    <div className="map"></div>
                    <h2>{meetup.name}</h2>
                    <h3>{meetup.location}</h3>
                    <p>{meetup.description}</p>
                    <p>Twitter: {twitterLink}</p>
                </section>
            </li>
        );
    }
}

export default MeetupListItem;

