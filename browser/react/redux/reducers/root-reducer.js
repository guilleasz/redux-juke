import lyricsReducer from './lyrics-reducer';
import playerReducer from './player-reducer';
import {combineReducers} from 'redux';
import albumsReducer from './albums-reducer';

export default combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer,
  albums: albumsReducer
});
