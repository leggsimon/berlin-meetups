import React, { Component } from 'react';
import MeetupListItem from "../MeetupListItem/MeetupListItem";
import './MeetupList.css';


class MeetupList extends Component {

    render() {
        const { meetups } = this.props;
        const createMeetupItem = meetup => (<MeetupListItem meetup={meetup} key={meetup.id} />)

        return (
            <div className="meetup__grid--container">
                <ul className="meetup__grid">{ meetups.map(createMeetupItem) }</ul>
            </div>
        );
    }
}

export default MeetupList;
