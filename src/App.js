import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {data} from "./meetups.json";
import MeetupList from "./components/MeetupList/MeetupList.jsx";

class App extends Component {
  // componentWillMount() {
  //   this.meetups = fetchMeetups();
  //   console.log(this.meetups)
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Berlin Meetups</h1>
        </header>
        <MeetupList meetups={data}/>
      </div>
    );
  }
}

// async function fetchMeetups() {
//   const response = await fetch('http://berlin-meetup.glitch.me/meetup')
//   const {data} = await response.json()
//   return data
// }

export default App;
