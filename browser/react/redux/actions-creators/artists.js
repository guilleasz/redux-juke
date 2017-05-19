import axios from 'axios';

import { RECEIVE_ARTISTS, RECEIVE_ARTIST }  from '../constants';

export function receiveArtists(artists) {
  return { type: RECEIVE_ARTISTS, artists };
}

export function fetchArtists() {
  return (dispatch) => {
    axios.get('/api/artists')
    .then(res => res.data)
    .then(artists => dispatch(receiveArtists(artists)));
  }
}
