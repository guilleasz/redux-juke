import {RECEIVE_ALBUMS} from '../constants';


export default function (state = {albums: [], selectedAlbum: {}}, action){
  const resultState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_ALBUMS:
      resultState.albums = action.albums;
      break;

    default:
      return state;
  }
  return resultState;
}
