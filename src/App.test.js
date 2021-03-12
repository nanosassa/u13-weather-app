import React from 'react';
import ReactDOM from 'react-dom';
import { mount, configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

configure({ adapter: new Adapter() });

describe("App", () => {
  let props;
  let mountedApp;
  const app = () => {
    if (!mountedApp) {
      mountedApp = mount(<App />);
    }
    return mountedApp;
  };

  beforeEach(() => {
    mountedApp = undefined;
  });


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("always renders a `SearchBar`", () => {
    expect(app().find(SearchBar).length).toBe(1);
  });

  it("doesn't render a `WeatherCard at first`", () => {
    expect(app().find(WeatherCard).length).toBe(0);
  });

  describe("`SearchBar`", () => {
    const searchBar = shallow(<SearchBar />);

    it("receives its props", () => {
      expect(Object.keys(searchBar.props()).length).toBe(2);
    });
    
  });  

});