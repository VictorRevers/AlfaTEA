import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type modalProps = {
    isVisible: boolean;
    children?: any;
    onClose: () => void;
}

export default function ModalImage(props: modalProps) {
  return (
    <Modal animationType="slide" transparent={true} visible={props.isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Selecione uma imagem</Text>
          <Pressable onPress={props.onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {props.children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    modalContent: {
      height: '45%',
      width: '100%',
      backgroundColor: '#ffe7fa',
      borderTopRightRadius: 18,
      borderTopLeftRadius: 18,
      position: 'absolute',
      bottom: 0,
    },
    titleContainer: {
      height: '16%',
      backgroundColor: '#ffc1f2',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      color: '#000000',
      fontSize: 16,
    },
  });
  
