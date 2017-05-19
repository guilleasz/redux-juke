import lyricsReducer from './lyrics-reducer';
import playerReducer from './player-reducer';
import {combineReducers} from 'redux';


export default combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer
});
