import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {SingleTopic} from 'library/components/SingleTopic.js';
import strings from 'res/strings';
import palette from 'res/palette';
import colors from 'res/colors';

const Topics = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
      <Text style={styles.heading}>{strings.topics.heading}</Text>
      <SingleTopic num="1" value={strings.topics.text1} />
      <SingleTopic num="2" value={strings.topics.text2} />
      <SingleTopic num="3" value={strings.topics.text3} />
      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Button title="Next" onPress={() => navigation.navigate('content')} />
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
  heading: {
    ...palette.heading,
    ...{
      color: colors.title.black,
      marginTop: 72,
      marginBottom: 30,
    },
  },
  text: {
    ...palette.text,
    ...{
      margin: 30,
      textAlign: 'left',
    },
  },
});

export {Topics};
