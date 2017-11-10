import React from 'react';
import Expo, { Audio } from 'expo';
import { View } from 'react-native';

export default class BgAudio extends React.Component {

  constructor(props) {
    super(props);
    this.source = props.options.source

  }
  // Initializes the audio on component mount.
  componentWillMount() {

    if (this.source.local) {
      this.play(this.source.local)
  
    }
    else if (this.source.remote) {
      this.play(this.source.remote)
     
    }
  }
  // Plays the source passed in by the Props object
  play = (source) => {

    Expo.Audio.setIsEnabledAsync(true)
    const sound = new Expo.Audio.Sound();

    const play_sound = (async () => {

      await sound.loadAsync(source); // props path to asset 
      await sound.playAsync();
    })();
  }

  // Does not render any view 
  render() {
    return (
      null
    );
  }
}