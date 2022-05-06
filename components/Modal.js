import { Modal, View, Button, Text, StyleSheet } from 'react-native';

const CustomModal = props => {
    const { modalVisible, setModalVisible, onHandlerDelete, itemSelected } = props

    return ( 
        <Modal
        animationType='fade'
        visible={modalVisible}
        transparent
      >
        <View style={styles.modalScreen}>
          <View style={styles.modalContainer}>
            <View style={styles.modalClose}>
              <Button onPress={() => setModalVisible(!modalVisible)} title='X' />
            </View>
            <View style={styles.modalMessage}>
              <Text>Estas seguro que desea borrar?</Text>
            </View>
            <View style={styles.modalButton}>
              <Button onPress={() => onHandlerDelete(itemSelected.id)} title='Confirmar' />
            </View>
          </View>
        </View>
      </Modal>
    )
}

export default CustomModal;

const styles = StyleSheet.create({
    modalScreen: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '20%',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 0.5,
    borderRadius: 30,
  },
  modalMessage: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalButton: {
    marginTop: 10,
  },
  modalItem: {
    fontSize: 30,
  },
  modalClose: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
})