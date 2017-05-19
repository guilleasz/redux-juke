import axios from 'axios';
import {RECEIVE_ALBUMS} from '../constants';
import {convertAlbums} from '../../utils';

export function receiveAlbums(albums){
  return {type: RECEIVE_ALBUMS, albums};
}

export function fetchAlbums(){
  return (dispatch) => {
    axios.get('/api/albums/')
    .then(res => res.data)
    .then(albums => convertAlbums(albums))
    .then(convertedAlbums => dispatch(receiveAlbums(convertedAlbums)))
    .catch(console.error.bind(console));
  }
}
