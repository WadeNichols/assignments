import React, { Component } from "react";
import axios from "axios";
import Scrollspy from "react-scrollspy";
import Header from "./Header";

const tabUrl = `https://vschool-cors.herokuapp.com?url=http://www.songsterr.com/a/ra/songs.json?pattern=`;

export default class Tabs extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      idle: true,
      err: null,
      input: ""
    };
    this.handleResults = this.handleResults.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleResults(e) {
    e.preventDefault();
    this.setState({ idle: false, loading: true });
    axios
      .get(tabUrl + this.state.input)
      .then(response => {
        this.setState({
          data: response.data,
          loading: false,
          err: null
        });
      })
      .catch(err => {
        this.setState({
          data: null,
          loading: false,
          err: { message: "404, data not found" }
        });
      });
  }

  render() {
    const { loading, err, data, idle } = this.state;
    console.log(this.state.data);
    const tabList = this.state.data.map(item => (
      <div key={item.id}>
        <a
          target="_blank"
          href={`http://www.songsterr.com/a/wa/song?id=${item.id}`}
        >
          {item.title}
        </a>
      </div>
    ));
    return (
      <div>
        <Header className="title-search" />
        <form onSubmit={this.handleResults} type="submit">
          <button
            className="button-search"
            onSubmit={this.handleResults}
            key="{id}"
            type="submit"
          >
            Submit
          </button>
          <input
            onChange={this.handleChange}
            value={this.state.input}
            type="text"
          />
          <br />
        </form>
        {idle ? (
          <div />
        ) : loading ? (
          <div>...Loading results</div>
        ) : err ? (
          <div>err.message</div>
        ) : (
          <div className="list-container">
            <ul className="results">{tabList}</ul>
          </div>
        )}
      </div>
    );
  }
}
