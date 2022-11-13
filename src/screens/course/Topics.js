import React from 'react';
import {Button, Text, View} from 'react-native';

const Topics = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Screen 2: Topics</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Button title="Next" onPress={() => navigation.navigate('content')} />
    </View>
  );
};

export {Topics};
