import React from 'react';
import {Button, Text, View} from 'react-native';

const Final = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Screen 5: Final</Text>
      <Button
        title="Complete the course"
        onPress={() => navigation.navigate('home')}
      />
    </View>
  );
};

export {Final};
