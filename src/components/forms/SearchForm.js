import React from "react";
import { Form, Button } from "semantic-ui-react";

class SearchForm extends React.Component {

	state = {
		query: "",
		loading: false
	};

	onSubmit = (e, data) => {
		e.preventDefault();
		this.setState({query: data.value, loading: true});
	};

	onChange = (e, data) => {
		this.setState({query: data.value});

		console.log("onChange: " + this.state.query + " | " + this.state.loading)
	};

	render () {
		return (
			<Form onSubmit={this.onSubmit}>
				<Form.Input
					name='query'
					placeholder='Please enter a TV show'
					onChange={this.onChange}
				/>
				<Button 
					type='submit'
					content='Search'
				/>
			</Form>
		);
	}
}

export default SearchForm;
