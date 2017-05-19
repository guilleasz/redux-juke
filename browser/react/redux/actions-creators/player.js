import AUDIO from '../../audio';
import { START_PLAYING, STOP_PLAYINg, SET_CURRENT_SONG, SET_LIST } from '../constants';

export function startPlaying() {
  return { type: START_PLAYING };
}

export function playAudio() {
  return (dispatch) => {
    AUDIO.play();
    dispatch(startPlaying());
  };
}
