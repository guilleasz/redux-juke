import React from 'react';
import store from '../redux/store';
import {setLyrics} from '../redux/actions-creators/lyrics';

export default class LyricsContainer extends React.Component{
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render(){
    return (
      <h1>Just a container, more to come!</h1>
    );
  }
}
