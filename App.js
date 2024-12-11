import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { useState } from 'react';
import { Audio } from 'expo-av';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

 // Load and play the audio
  async function playSound() {
    if (sound === null) {
      // Load the sound for the first time
      //b23065e3-bf50-44e0-8215-c6d202bce6ce.mp3
      //sampleAudioForReactnative.m4a
      const { sound: playbackObject } = await Audio.Sound.createAsync(
        require('./assets/b23065e3-bf50-44e0-8215-c6d202bce6ce.mp3')  // Local audio file
      );
      setSound(playbackObject);
      await playbackObject.playAsync();  // Play the sound
      setIsPlaying(true);
    } else {
      const status = await sound.getStatusAsync();
      if (status.positionMillis === status.durationMillis) {
        // If sound finished, reset and play again
        await sound.setPositionAsync(0);
        await sound.playAsync();
        setIsPlaying(true);
      } else {
        // Resume playback from where it was paused
        await sound.playAsync();
        setIsPlaying(true);
      }
    }
  }

  // Pause the audio
  async function pauseSound() {
    if (sound && isPlaying) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  }

  // Stop the audio and unload the sound
  async function stopSound() {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
      await sound.unloadAsync(); // Unload the sound when stopping
      setSound(null); // Reset sound object
    }
  }

  return (
    <View style={styles.container}>
      <Text>React Native Audio Playback App</Text>
        <TouchableOpacity onPress={playSound}>
          <Image
          source={require('./assets/play.png')}  // Local image file
          style={styles.buttonImage}
        />
      </TouchableOpacity>

        <TouchableOpacity onPress={pauseSound}>
          <Image
          source={require('./assets/pause.png')}  // Local image file
          style={styles.buttonImage}
        />
      </TouchableOpacity>

        <TouchableOpacity onPress={stopSound}>
          <Image
          source={require('./assets/stop.png')}  // Local image file
          style={styles.buttonImage}
        />
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    width: 50,
    height: 50,
    margin: 50,
  }
});