import {RECEIVE_ARTISTS, RECEIVE_ARTIST} from '../constants';

const initialState = {
  artists: [],
  selectedArtist: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ARTISTS:
      return Object.assign({}, state, { artists: action.artists });

    default:
      return state;
  }
}

