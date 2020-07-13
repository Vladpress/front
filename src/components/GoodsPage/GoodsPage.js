import React, { Component } from 'react';
import API from "../../utils/fetch";
import Good from '../Good/Good.js';


export default class GoodsPage extends Component {
  state = {}

  async componentDidMount() {
    const request = await API.get(`/goods/${this.props.match.params.id}`);
    this.setState({ good: request.data });
  }

  render() {

    return (
    <Good item={this.state.good || ""} />
   )
  }
}

