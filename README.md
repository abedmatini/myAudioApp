**Run the following commands to create a React app.**

npx create-expo-app myAudioApp --template blank


**You will be prompted to confirm if it is ok to proceed installation of the required packages. Press y and enter (Windows) or return (mac).**

Need to install the following packages:
  create-expo-app@3.1.1
Ok to proceed? (y)


**Once the app is created, change to the app directory.**

cd myAudioApp

**Install the react-native-sound package that is required for adding audio to the app.**
npx expo install expo-av

**To test the app on web, after creating the app, install the react-native-web react-dom and @expo/metro-runtime packages.**
npx expo install react-native-web react-dom @expo/metro-runtime

Download the audio file by click this link.

Right-click the myAudioApp/assets directory and choose Upload Files... from the menu to upload the sample audio file provided to the myAudioApp directory.
Stop
Play
Pause
Also, upload the image files that you will use as icons for your app in the asset directory. You can follow the same process as done for the audio file.

