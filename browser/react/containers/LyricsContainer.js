import React from 'react';
import store from '../redux/store';
import {setLyrics} from '../redux/actions-creators/lyrics';
import Lyrics from '../components/Lyrics';

export default class LyricsContainer extends React.Component{
  constructor(){
    super();
    this.state = Object.assign({}, store.getState(), {artistQuery: '', songQuery: ''});
    this.setSong = this.setSong.bind(this);
    this.setArtist = this.setArtist.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  setSong(event){
    this.setState({songQuery: event.target.value});
  }
  setArtist(event){
    this.setState({artistQuery: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(this.state);
  }
  render(){
    return (
      <Lyrics {...this.state} setSong={this.setSong} setArtist={this.setArtist} handleSubmit={this.handleSubmit} />
    );
  }
}
