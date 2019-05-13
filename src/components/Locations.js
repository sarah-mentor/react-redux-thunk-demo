import React from 'react';
import { locations } from '../helpers/data';

class Locations extends React.Component {
  setLocation = e => {
    this.props.updateLocation(e.target.value);
  };

  render() {
    return (
      <div className="dropdown">
        <h3>City</h3>
        <select onChange={this.setLocation} defaultValue={'none'}>
          <option value="none" disabled>
            Choose...
          </option>
          {locations.map(location => {
            return (
              <option key={location.id} value={location.name}>
                {location.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Locations;
