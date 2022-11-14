import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from 'res/colors';

const SingleTopic = props => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={{color: '#ffffff'}}>{props.num}</Text>
      </View>
      <Text style={{marginLeft: 20}}>{props.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '90%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    backgroundColor: colors.screen.lightBlue,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#1B1B4E',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {SingleTopic};
