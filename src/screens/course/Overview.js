import React from 'react';
import {Button, Text, View, StyleSheet, Image} from 'react-native';
import strings from 'res/strings';
import palette from 'res/palette';
import colors from 'res/colors';

const Overview = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{strings.overview.heading}</Text>
      <Image source={require('./images/product.png')} />
      <Text style={styles.text}>{strings.overview.text}</Text>
      <View style={styles.buttonConatiner}>
        <Button
          title="Home"
          onPress={() => navigation.navigate('home')}
          style={styles.button}
        />
        <Button
          title={strings.overview.nxtBtn}
          onPress={() => navigation.navigate('topics')}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2E80F3',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    ...palette.heading,
    ...{
      color: colors.title.white,
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
  button: {
    ...palette.button,
    ...{
      backgroundColor: '#68a0cf',
      borderRadius: 10,
    },
  },
});

export {Overview};
