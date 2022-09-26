import React, {useState} from 'react';
import {SafeAreaView, Button, StyleSheet} from 'react-native';
import CustomModal, {CustomModalPosition} from './app/components/CustomModal';

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const onClose = () => {
    setOpenModal(false);
  };

  return (
    <SafeAreaView style={styles.app}>
      <Button title="Toggle modal" onPress={() => setOpenModal(true)} />
      <CustomModal
        text="My custom modal"
        buttonText="Close"
        visible={openModal}
        animationType="fade"
        position={CustomModalPosition.CENTER}
        onClose={onClose}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default App;
