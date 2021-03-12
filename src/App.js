import React, { Component } from "react";
import "./css/App.css";

import LoadingSpinner from "./components/loadingSpinner";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {
        address: "",
        weather: "",
        temp: 0
      },
      searchDone: false,
      errorMessage: ""
    };

    this.callWeatherData = this.callWeatherData.bind(this);
  }

  callWeatherData(address) {

    this.setState({loading: true});

    const url = `https://localhost:44306/forecast/${address}`;

    fetch(url)
      .then(handleErrors)
      .then(resp => resp.json())
      .then(data => {
        const weatherObj = {
          periods: data.properties.periods
        };
        this.setState({
          weatherData: weatherObj,
          searchDone: true,
          errorMessage: "",
          loading: false
        });
      })
      .catch(error => {
        // If an error is catch, it's sent to SearchBar as props
        this.setState({ 
          errorMessage: error.message,
          loading: false
         });
      });

    function handleErrors(response) {
      if(response.status === 404) {
        throw Error('Address not found');
      }

      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }
  }

  render() {
    const {
      searchDone,
      weatherData,
      errorMessage,
      loading
    } = this.state;
    
    return (
      <div className="App">
        <SearchBar
          callBackFromParent={this.callWeatherData}
          error={errorMessage}
        />
        
        {loading ? 
        
        <LoadingSpinner /> : 
        
        <div className="row">
          <div className="col-sm-6">
          {searchDone && 
          weatherData.periods
              .filter((item, i) => i % 2 === 0)
              .map((item, i) =>  
              <WeatherCard
                weatherData={item}
                key={i}
              />
          )}
          </div>
        </div>
        }

      </div>
    );
  }
}

export default App;
