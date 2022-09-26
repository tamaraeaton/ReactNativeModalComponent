import React from 'react';
import {
  Button,
  StyleSheet,
  Modal,
  View,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';

export enum CustomModalPosition {
  TOP,
  CENTER,
  BOTTOM,
}

interface CustomModalProps {
  text: string;
  buttonText: string;
  visible: boolean;
  animationType: 'none' | 'slide' | 'fade';
  position: CustomModalPosition;
  onClose: () => void;
}

const CustomModal = (customModalProps: CustomModalProps) => {
  const {text, buttonText, onClose, visible, animationType, position} =
    customModalProps;

  const getPosition = (): StyleProp<ViewStyle> => {
    if (position === CustomModalPosition.TOP) {
      return {
        top: '25%',
      };
    } else if (position === CustomModalPosition.CENTER) {
      return {
        top: '50%',
      };
    } else if (position === CustomModalPosition.BOTTOM) {
      return {
        top: '75%',
      };
    }
  };

  return (
    <Modal visible={visible} transparent animationType={animationType}>
      <View style={styles.modal}>
        <View style={(styles.modalContentWrapper, getPosition())}>
          <View style={styles.modalContent}>
            <Text>{text}</Text>
            <Button title={buttonText} onPress={onClose}></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.2)',
  },
  modalContentWrapper: {
    flex: 1,
  },
  modalContent: {
    backgroundColor: 'white',
    margin: 16,
    padding: 16,
    borderRadius: 15,
  },
});

export default CustomModal;
