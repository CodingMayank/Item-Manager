import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const CreateItems = ({data, setdata}) => {
  const [itemName, setitemName] = useState('');
  const [stockAmt, setstockAmt] = useState('');
  const [isEdit, setisEdit] = useState(false);
  const [editItemid, seteditItemid] = useState(null);

  const addItemhandler = () => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      stock: stockAmt,
    };

    setdata([...data, newItem]);
    setitemName('');
    setstockAmt('');
    setisEdit(false);
  };

  const deleteItemhandler = id => {
    setdata(data.filter(item => item.id !== id));
  };

  const editItemhandler = item => {
    setisEdit(true);
    setitemName(item.name);
    seteditItemid(item.id);
  };

  const updateItemhandler = () => {
    setdata(
      data.map(item =>
        item.id === editItemid
          ? {...item, name: itemName, stock: stockAmt}
          : item,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={itemName}
        onChangeText={item => setitemName(item)}
        placeholder="Enter Item to add..."
        placeholderTextColor="black"
        style={styles.textInput}
      />
      <TextInput
        value={stockAmt}
        onChangeText={item => setstockAmt(item)}
        placeholder="Enter Item Quantity..."
        placeholderTextColor="black"
        style={styles.textInput}
      />
      <Pressable
        style={styles.btn}
        onPress={() => (isEdit ? updateItemhandler() : addItemhandler())}>
        <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}>
          {isEdit ? 'Edit Item in Stock' : 'Add Item in Stock'}
        </Text>
      </Pressable>
      <View>
        <View style={styles.headingContainer}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>
            All Items in the Stock
          </Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={[
                styles.itemContainer,
                item.stock < 10
                  ? {
                      backgroundColor: '#E85A51',
                      borderRadius: 5,
                      paddingVertical: 2,
                    }
                  : {
                      backgroundColor: '#AFD274',
                      borderRadius: 5,
                      paddingVertical: 2,
                    },
              ]}>
              <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                {item.name}
              </Text>
              <View style={{flexDirection: 'row', gap: 24}}>
                <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                  {item.stock}
                </Text>
                <Pressable onPress={() => editItemhandler(item)}>
                  <Text>
                    <Icon name="edit" size={15} />
                  </Text>
                </Pressable>
                <Pressable onPress={() => deleteItemhandler(item.id)}>
                  <Text>
                    <Icon name="delete" size={15} />
                  </Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{gap: 15}}
        />
      </View>
    </View>
  );
};

export default CreateItems;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: '4%',
    gap: 5,
  },
  textInput: {
    borderWidth: 1.5,
    borderRadius: 7,
    borderColor: '#124E66',
    padding: '4%',
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
  },
  btn: {
    borderWidth: 1.5,
    borderRadius: 7,
    borderColor: '#124E66',
    padding: '4%',
  
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: '#aacef7',
  },
  headingContainer: {
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  itemContainer: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
