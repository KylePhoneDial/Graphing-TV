import React from 'react';
import SearchForm from '../components/SearchForm';
import Graph from '../components/Graph';
import Header from '../components/Header';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      hadError: false,
      errorMessage: ''
    };
  }

  handleQuery = queryVal => {
    if (queryVal !== this.state.query) {
      this.setState({
        query: queryVal,
        hadError: false,
        errorMessage: ''
      });
    }
  };

  handleError = message => {
    this.setState({
      hadError: true,
      errorMessage: message
    });
  };

  render() {
    if (this.state.hadError) {
      return (
        <div>
          <Header />
          <SearchForm handleQuery={this.handleQuery} />
          <h2>Something went wrong!</h2>
          <h2>Is {this.state.query} a real TV show?</h2>
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <SearchForm handleQuery={this.handleQuery} />
          {this.state.query !== '' ? (<Graph query={this.state.query} handleError={this.handleError} /> ) : null}
        </div>
      );
    }
  }
}

export default HomePage;
