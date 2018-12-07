import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import _ from "lodash";

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    // temps is a good place to convert temperature units
    const temps = cityData.list.map(weather => weather.main.temp);
    // const temps = _.map(
    //   cityData.list.map(weather => weather.main.temp),
    //   temp => temp - 273
    // );
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(humidity => humidity.main.pressure);
    // console.log(temps);
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="orange" units="K" />
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="purple" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // { weather } === { weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
