import React from 'react';
import SearchForm from '../components/SearchForm';
import Graph from '../components/Graph';
import Header from '../components/Header';

class HomePage extends React.Component {
	constructor() {
		super();
		this.state = {
			query:'',
		}
	}

	handleQuery = (queryVal) => {
		this.setState({
			query: queryVal,
		});
	};

	render () {
		return(
			<div>
				<Header />
				{this.state.query !== '' ? <Graph query={this.state.query} /> : null}
				<SearchForm handleQuery={this.handleQuery}/>
			</div>
		);
	}
}

export default HomePage;