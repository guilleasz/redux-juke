import AUDIO from '../../audio';
import { START_PLAYING, STOP_PLAYINg, SET_CURRENT_SONG, SET_LIST } from '../constants';

export function startPlaying() {
  return { type: START_PLAYING };
}
export function setCurrentSong(currentSong){
  return {type: SET_CURRENT_SONG, currentSong};
}
export function setList(currentSongList){
  return {type: SET_LIST, currentSongList};
}

export function playAudio() {
  return (dispatch) => {
    AUDIO.play();
    dispatch(startPlaying());
  };
}
export function loadSongs(currentSong, currentSongList){
  return (dispatch) => {
    AUDIO.src = currentSong.audioUrl;
    AUDIO.load();
    dispatch(setCurrentSong(currentSong));
    dispatch(setList(currentSongList));
  }
}
