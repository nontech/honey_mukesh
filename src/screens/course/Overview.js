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
      <View style={styles.buttonContainer}>
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

export {Overview};
