import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';
import {Modal, Portal} from 'react-native-paper';

const Quiz = ({navigation}) => {
  // radio button
  const [value, setValue] = React.useState(null);

  // container
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <View>
      <RadioButton.Group
        onValueChange={newValue => setValue(newValue)}
        value={value}>
        <RadioButton.Item label="First item" value="first" />
        <RadioButton.Item label="Second item" value="second" />
        <RadioButton.Item label="Third item" value="third" />
      </RadioButton.Group>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Button title="Submit" onPress={showModal} />
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <Text>Example Modal. Click outside this area to dismiss.</Text>
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
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export {Quiz};
