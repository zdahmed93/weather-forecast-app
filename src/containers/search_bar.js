import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      term: '',
      country: ''
    }
  }

  onInputChange = (event) => {
    this.setState({
      term: event.target.value
    })
  }

  onCountryInputChange = (event) => {
    this.setState({
      country: event.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.fetchWeather(this.state.term, this.state.country);
    this.setState({term: '', country: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <div className="heading">
        <div>
        <div className="inputs-field">
        <div>
          <input
            placeholder="City name"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />

          <input
            placeholder="ISO Code of the Country (for example: TN for TUNISIA)"
            className="form-control country-code-input"
            value={this.state.country}
            onChange={this.onCountryInputChange}
          />
        </div>
        <div className="input-group-btn">
                    <button type="submit" className="btn btn-info search-button">Search</button>
                </div>
        </div>
        </div>
        
        <div>
          <a href="https://countrycode.org/" target="_blank">Coutries codes</a>
        </div>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);