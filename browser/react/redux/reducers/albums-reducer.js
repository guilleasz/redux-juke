import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../constants';


export default function (state = {albums: [], selectedAlbum: {}}, action){
  const resultState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_ALBUMS:
      resultState.albums = action.albums;
      break;

    case RECEIVE_ALBUM:
      resultState.selectedAlbum = action.album;
      break;

    default:
      return state;
  }
  return resultState;
}
