import React from 'react';
import {Button, Text, View} from 'react-native';

const Overview = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Screen 1: Overview</Text>
      <Button title="Home" onPress={() => navigation.navigate('home')} />
      <Button title="Next" onPress={() => navigation.navigate('topics')} />
    </View>
  );
};

export {Overview};
