import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  state = {
    episodes: [
      {
        name: "Stark Raving Dad",
        season: "2",
        epnum: "1"
      },
      {
        name: "Homer",
        season: "2",
        epnum: "2"
      },
      {
        name: "Bart After Dark",
        season: "2",
        epnum: "3"
      },
      {
        name: "Mr. Lisa Goes to Washington",
        season: "2",
        epnum: "4"
      }
    ]
  };
  removeEpisode = index => {
    const { episodes } = this.state;

    this.setState({
      episodes: episodes.filter((episode, i) => {
        return i !== index;
      })
    });
  };

  render() {
    const episodes = [];
    return (
      <div className="container">
        <Table episodeData={episodes} />
      </div>
    );

    return (
      <div className="container">
        <Table episodeData={episodes} removeEpisode={this.removeEpisode} />
      </div>
    );
  }
}

export default App;
