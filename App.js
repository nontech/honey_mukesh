import React from 'react';
import {Button, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
// Screen 1
import {Overview as CourseOverviewScreen} from './src/screens/course/Overview.js';
// Screen 2
import {Topics as CourseTopicsScreen} from './src/screens/course/Topics.js';
// Screen 3
import {Content as CourseContentScreen} from './src/screens/course/Content.js';
// Screen 4
import {Quiz as CourseQuizScreen} from './src/screens/course/Quiz.js';
// Screen 5
import {Final as CourseFinalScreen} from './src/screens/course/Final.js';

/**
 * `createNativeStackNavigator` is the most common navigator
 * It is a function that returns an object containing 2 properties: Screen and Navigator.
 * Both of them are React components used for configuring the navigator.
 * The Navigator should contain Screen elements as its children to define the configuration for routes.
 */
const Stack = createNativeStackNavigator();

// Inital default screen
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Start Course"
        onPress={() => navigation.navigate('overview')}
      />
    </View>
  );
}

const App = () => {
  return (
    /**
     * `NavigationContainer` is a component which manages our navigation tree and contains the navigation state
     * This component must wrap all navigators structure
     * Note: In a typical React Native app, the NavigationContainer should be only used once in your app at the root. You shouldn't nest multiple NavigationContainers unless you have a specific use case for them.
     */
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="overview"
          component={CourseOverviewScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen
          name="topics"
          component={CourseTopicsScreen}
          options={{title: 'Topics'}}
        />
        <Stack.Screen
          name="content"
          component={CourseContentScreen}
          options={{title: 'Content'}}
        />
        <Stack.Screen
          name="quiz"
          component={CourseQuizScreen}
          options={{title: 'Quiz'}}
        />
        <Stack.Screen
          name="final"
          component={CourseFinalScreen}
          options={{title: 'Final'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
