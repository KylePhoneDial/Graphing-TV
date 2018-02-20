import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class SearchForm extends React.Component {

	constructor() {
		super();
		this.state = {
			query:'',
		}
	}

	onSubmit = (e, data) => {
		e.preventDefault();
		this.setState({
			query: data.value, 
		});

		this.props.handleQuery(this.state.query);
	};

	onChange = (e, data) => {
		e.preventDefault();
		this.setState({query: data.value});
	};

	render () {
		return (
			<div class='searchForm'>
				<Form onSubmit={this.onSubmit}>
					<Form.Input
						name='query'
						placeholder='Please enter a TV show'
						onChange={this.onChange}
					/>
					<Button> 
						Search
					</Button>
				</Form>
			</div>
		);
	}
}

export default SearchForm;
