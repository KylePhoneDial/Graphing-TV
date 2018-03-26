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
    };
  }

  //Make the API call, process the data, then put the data into the chart
  getRatings(show) {
    episodeNum = [];
    episodeRating = [];

    imdb
      .get(show, { apiKey: 'd8f6b8a8' })
      .then(things => {
        things.episodes().then(data => {
          this.processData(data);

          this.setState({
            loading: false
          });
        });
      })
      .catch(err => {
        this.props.handleError(err.message);
      });
  }

  processData(episodes) {
    for (var i = 0; i < episodes.length; i++) {
      episodeNum.push('s' + episodes[i].season + 'e' + episodes[i].episode);
      episodeRating.push(episodes[i].rating);
    }

    this.setChartData();
  }

  setChartData() {
    this.setState({
      chartData: {
        labels: episodeNum,
        datasets: [
          {
            label: this.props.query,
            backgroundColor: 'rgba(0, 105, 120, 1)',
            borderColor: 'rgba(86, 200, 216, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0, 86, 98, 1)',
            hoverBorderColor: 'rgba(79, 179, 191, 1)',
            data: episodeRating
          }
        ]
      }
    });
  }

  componentWillMount() {
    this.setState(
      {
        loading: true
      },
      this.getRatings(this.props.query)
    );
  }

  //Invoked when a new search is made with a different show name
  componentWillReceiveProps(newProps) {
    if (newProps.query !== this.props.query) {
      this.setState(
        {
          loading: true
        },
        this.getRatings(newProps.query)
      );
    }
  }

  render() {
    if (this.state.loading) {
      return <div class='spinningLoader' />;
    }

    return (
      <div class='ratingsGraph'>
        <Bar
          data={this.state.chartData}
          width={100}
          height={250}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    max: 10
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}

export default Graph;
