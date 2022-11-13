import React from 'react';
import {Button, Text, View} from 'react-native';

const Content = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Screen 3: Content</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Button title="Next" onPress={() => navigation.navigate('quiz')} />
    </View>
  );
};

export {Content};
