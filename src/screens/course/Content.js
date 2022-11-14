import React from 'react';
import {Image, Button, Text, View, StyleSheet} from 'react-native';

const Content = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
      <Image source={require('./images/video.png')} />
      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Button title="Next" onPress={() => navigation.navigate('quiz')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E80F3',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
});
export {Content};
