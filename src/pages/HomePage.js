import React from 'react';
import SearchForm from '../components/SearchForm';
import Graph from '../components/Graph';

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
				<SearchForm handleQuery={this.handleQuery}/>
				{this.state.query !== '' ? <Graph query={this.state.query} /> : null}
			</div>
		);
	}
}

export default HomePage;