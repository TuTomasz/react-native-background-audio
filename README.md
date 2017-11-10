# react-native-background-audio
A react component for playing audio in the back of your project.


```js
npm install react-native-background-audio --save
```

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BgAudio from 'react-native-background-audio'

export default class App extends React.Component {
  render() {
    return (
      <BgAudio options={audio_options}></BgAudio>
    );
  }
}
const audio_options = {
  source:{local: require('./music/sample.mp3')}  //ex. require('./music/sample.mp3')
}
```

For Local audio source pass in Local object:
```js
const audio_options = {
  source:{local: require('./music/sample.mp3')}  //ex. require('./music/sample.mp3')
}
```
For Remote audio uri pass in Remote object:

```js
const audio_options = {
  source:{remote:{uri:"http://www.sample-videos.com/audio/mp3/india-national-anthem.mp3"}}
}
```

