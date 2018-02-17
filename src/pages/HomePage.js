import React from "react";
import SearchForm from "../components/SearchForm";

class HomePage extends React.Component {

	state = {
		query:'',
		loading: false
	};

	handleQuery = (queryVal, loadingStatus) => {
		this.setState({
			query: queryVal,
			loading: loadingStatus
		});
	};

	render () {
		return(
			<div>
				<SearchForm handleQuery={this.handleQuery}/>
				<h1>{this.state.query} DOG</h1>
			</div>
		);
	}
}

export default HomePage;