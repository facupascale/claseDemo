import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Button, ImageBackground } from 'react-native';
import Pokemon from './assets/pokemon.jpeg'
import CustomModal from './components/Modal';
import CustomAddItem from './components/AddItem'

export default function App() {

  const [textItem, setTextItem ] = useState('');
  const [itemList, setItemList ] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandlerChangeItem = (e) => setTextItem(e)
  
  const addItem = () => {
    setItemList(currentItems => [...currentItems, { id: Math.random().toString(), value: textItem, completed: false }]);
    setTextItem('')
  }

  const onHandlerDelete = (id) => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  }

  const onHandlerModal = id => {
    setItemSelected(itemList.find(item => item.id === id));
    setModalVisible(!modalVisible);
  }

  const taskComplete = id => { 
    setItemList(currentItems => currentItems.map(item => item.id == id ? { ...item, completed: !item.completed } : item))
  }

  console.log(itemList)

  return (
          <ImageBackground source={Pokemon} resizeMode='cover' style={styles.screen}>
              <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} onHandlerDelete={onHandlerDelete} itemSelected={itemSelected} />

              <Text style={styles.mainTitle}>Lista de compras</Text>

              <CustomAddItem addItem={addItem} onHandlerChangeItem={onHandlerChangeItem} textItem={textItem} />

            <FlatList
              data={itemList}
              renderItem={data => (
                <TouchableOpacity onPress={() => onHandlerModal(data.item.id)} >
                  <View style={styles.listItem}>
                    <Text style={[styles.itemTitle, { textDecorationLine: data.item.completed === true ? 'line-through' : null }]}>{data.item.value}</Text>
                    <Button title='Completado' onPress={() => taskComplete(data.item.id)}/>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
              />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'skyblue',
    marginTop: 10,
    width: 300,
    height: 50,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  }
});
