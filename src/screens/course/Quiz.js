import React from 'react';
import {Button, Text, View} from 'react-native';

const Quiz = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Screen 4: Quiz</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Button title="Submit" onPress={showResult()} />
    </View>
  );
};

// a modal/popup with an action button
function showResult() {
  // action button should take to final screen
}
export {Quiz};
