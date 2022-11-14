import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';
import {Modal, Portal} from 'react-native-paper';

import strings from 'res/strings';
import palette from 'res/palette';
import colors from 'res/colors';

const Quiz = ({navigation}) => {
  // radio button
  const [value, setValue] = React.useState(null);

  // container
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{strings.quiz.heading}</Text>
      <RadioButton.Group
        onValueChange={newValue => setValue(newValue)}
        value={value}>
        <RadioButton.Item label="Kostengünstige Herstellung" value="first" />
        <RadioButton.Item
          label="Handwerkliche Herstellung, bevorzugt mit regionalen Produkten"
          value="second"
        />
        <RadioButton.Item label="Schnelle Produktion" value="third" />
      </RadioButton.Group>
      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Button title="Submit" onPress={showModal} />
      </View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <Text>{strings.quiz.modalText}</Text>
          <Button
            title="Next"
            onPress={() => {
              // hide the modal
              hideModal();
              // navigate to next screen
              navigation.navigate('final');
            }}
          />
        </Modal>
      </Portal>
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
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export {Quiz};
