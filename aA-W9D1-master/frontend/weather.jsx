import React from 'react'; 

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.getWeather = this.getWeather.bind(this);
    }

    componentDidMount() {
      navigator.geolocation.getCurrentPosition(this.getWeather);
    }

    getWeather(position) {
      console.log(position);
      let lat = Math.floor(position.coords.latitude);
      let long = Math.floor(position.coords.longitude);

      // const xmlhttp = new XMLHttpRequest();

      // xmlhttp.onreadystatechange = function () {
      //   if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
      //     if (xmlhttp.status == 200) {
      //       document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
      //     }
      //     else if (xmlhttp.status == 400) {
      //       alert('There was an error 400');
      //     }
      //     else {
      //       alert('something else other than 200 was returned');
      //     }
      //   }
      // };

      // xmlhttp.open("GET", `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}`, true);
      // xmlhttp.send();
    }
    // api.openweathermap.org/data/2.5 / weather ? q = London, uk & APPID=bf94a4be5e7fe558b1429017de6ccb26

    //bf94a4be5e7fe558b1429017de6ccb26     open weath api key
    render() {
        return <h1>WEATHER?</h1>
    }
}




export default Weather;