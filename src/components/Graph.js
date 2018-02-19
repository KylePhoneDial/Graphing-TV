import React from 'react';
import { Bar } from 'react-chartjs-2';

const imdb = require('imdb-api');

var episodeNum = [];
var episodeRating = [];

class Graph extends React.Component {
	constructor() {
		super();
		this.state = {
			loading: false,
			chartData: {}
		}
	}

	getRatings(show) {
		imdb.get(show, {apiKey: 'foo'})
			.then(things => {
    			things.episodes().then(data => {
    				this.processData(data);
    				this.setState({
    					loading: false
    				})
    		});
		});
	}

	processData(episodes) {
		for(var i = 0; i < episodes.length; i++){
			episodeNum.push('s' + episodes[i].season + 'e' + episodes[i].episode);
			episodeRating.push(episodes[i].rating);
		}
	}

	getChartData() {
		this.setState({
			chartData:{
				labels: episodeNum,
				datasets: [
					{
						label: this.props.query,
						backgroundColor: 'rgba(255,99,132,0.4)',
      					borderColor: 'rgba(255,99,132,1)',
      					borderWidth: 1,
      					hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      					hoverBorderColor: 'rgba(255,99,132,1)',
      					data: episodeRating
					}
				]
			}
		});
	}

	componentWillMount() {
		this.setState({
			loading: true
		});
		this.getRatings(this.props.query);
		this.getChartData();
	}


	render () {
		if(this.state.loading) {
			return <h2>Loading...</h2>;
		}

		return(
			<div>
				<Bar
					data={this.state.chartData}
					width={100}
					height={200}
					options={{
						maintainAspectRatio: false
					}}
				/>
			</div>
		);
	}
}

export default Graph;