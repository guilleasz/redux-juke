import axios from 'axios';
import { SET_LYRICS } from '../constants';

export function setLyrics(text) {
  return { type: SET_LYRICS, text };
}


export function fetchLyrics(artist, song) {
  return (dispatch) => {
    axios.get(`/api/lyrics/${artist}/${song}`)
    .then(res => res.data.lyric)
    .then(text => dispatch(setLyrics(text)));
  };
}
