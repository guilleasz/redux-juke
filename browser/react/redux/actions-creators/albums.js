import axios from 'axios';
import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../constants';
import { convertAlbums, convertAlbum } from '../../utils';

export function receiveAlbums(albums) {
  return { type: RECEIVE_ALBUMS, albums };
}
export function receiveAlbum(album) {
  return { type: RECEIVE_ALBUM, album };
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

export function fetchAlbum(albumId) {
  return (dispatch) => {
    axios.get(`/api/albums/${albumId}`)
    .then(res => res.data)
    .then(album => convertAlbum(album))
    .then(convertedAlbum => dispatch(receiveAlbum(convertedAlbum)));
  }
}
