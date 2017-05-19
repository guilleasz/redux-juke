import AUDIO from '../../audio';
import { START_PLAYING, STOP_PLAYING, SET_CURRENT_SONG, SET_LIST, SET_PROGRESS } from '../constants';

export function startPlaying() {
  return { type: START_PLAYING };
}
export function stopPlaying() {
  return { type: STOP_PLAYING };
}
export function setCurrentSong(currentSong){
  return {type: SET_CURRENT_SONG, currentSong};
}
export function setList(currentSongList){
  return {type: SET_LIST, currentSongList};
}
export function setProgress(progress){
  return {type: SET_PROGRESS, progress }
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



export function pauseAudio() {
  return (dispatch) =>{
    AUDIO.pause();
    dispatch(stopPlaying());
  };
}
