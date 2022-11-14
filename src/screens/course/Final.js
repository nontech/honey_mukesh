import React from 'react';
import {Button, Text, View, Image} from 'react-native';

const Final = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('./images/cup.png')} />
      <Button
        title="Complete the course"
        onPress={() => navigation.navigate('home')}
      />
    </View>
  );
};

export {Final};
