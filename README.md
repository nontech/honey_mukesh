# How to run the project locally on an android phone?

Clone Repo
```sh
git pull git@github.com:nontech/honey_mukesh.git
```

Install dependencies
```
npm install
```

Connect your phone
- [Running on Device](https://reactnative.dev/docs/running-on-device)


Run this in a separate terminal
```
npx react-native start
```
After success, it will track any changes that you might have


In another terminal, run 
```
npx react-native run-android
```
This will push your the app in your phone
The app is ready!



## Known Issues

Gradle build cache
```
* What went wrong:
A problem occurred configuring project ':react-native-vlc-media-player'.
> Could not open proj generic class cache for build file '/Users/jais_mukesh/Projects/HoneyMukesh/node_modules/react-native-vlc-media-player/android/build.gradle' (/Users/jais_mukesh/.gradle/caches/7.5.1/scripts/eb1s61631gud7mqe3m9akn9p5).
```

Solution
1. Open `project_directory/android` with Android Studio
2. Connect your phone
- [Running on Device](https://reactnative.dev/docs/running-on-device)
3. Run the app from Android Studio once
4. Then, you can run the app normally without Android Studio

Note: Running on Android Studio, the Gradle build does something with the cache and the error is gone. I am yet to investigage the reason for it.
