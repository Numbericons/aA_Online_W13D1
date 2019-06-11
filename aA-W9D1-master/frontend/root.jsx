import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

const Root = function (props) {
    const arr = [
      {title: "one", content: "I am the first"},
      {title: "two", content: "Second pane here"},
      {title: "three", content: "Third pane here"}
    ];

    return <div>
            <h1 className ="header">Clock </h1>
            <Clock />
            <br />
            <div className="weather">
              <h1>Weather</h1>
              <Weather />
            </div>
            <br />
            <div className="tabs">
              <h1>Tabs</h1>
              <Tabs array={arr} />
            </div>

          </div>

}






export default Root;