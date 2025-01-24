import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AllItems from './AllItems';
import CreateItems from './CreateItems';

const HomeScreen = () => {
  const [view, setview] = useState(0);
  const [data, setdata] = useState([
    { id: 1, name: 'Wheat', stock: 5, unit: 'kg' },
    { id: 2, name: 'Maida', stock: 8, unit: 'kg' },
    { id: 3, name: 'Rajma', stock: 10, unit: 'kg' },
    { id: 4, name: 'Mangoes', stock: 5, unit: 'kg' },
    { id: 5, name: 'Apples', stock: 9, unit: 'kg' },
    { id: 6, name: 'Corn', stock: 1, unit: 'kg' },
    { id: 7, name: 'Rice', stock: 22, unit: 'kg' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.dashboard}>
        Dashboard <MaterialIcon name="dashboard" size={20} />
      </Text>
      <View style={styles.btnDash}>
        <Pressable
          style={[
            styles.btnStyle,
            view === 0 ? { backgroundColor: '#3AAFA9', borderColor: '#124E66' } : null,
          ]}
          onPress={() => setview(0)}
        >
          <Text style={[styles.btnText, view === 0 ? { color: 'black' } : null]}>All Items</Text>
        </Pressable>
        <Pressable
          style={[
            styles.btnStyle,
            view === 1 ? { backgroundColor: '#3AAFA9', borderColor: '#124E66' } : null,
          ]}
          onPress={() => setview(1)}
        >
          <Text style={[styles.btnText, view === 1 ? { color: 'black' } : null]}>Low Stock</Text>
        </Pressable>
        <Pressable
          style={[
            styles.btnStyle,
            view === 2 ? { backgroundColor: '#3AAFA9', borderColor: '#124E66' } : null,
          ]}
          onPress={() => setview(2)}
        >
          <Text style={[styles.btnText, view === 2 ? { color: 'black' } : null]}>Create Items</Text>
        </Pressable>
      </View>
      <View style={styles.InnerContainer}>
        {view === 0 && <AllItems data={data} />}
        {view === 1 && <AllItems data={data.filter((item) => item.stock < 10)} />}
        {view === 2 && <CreateItems data={data} setdata={setdata} />}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: '4%',
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  dashboard: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: 5,
  },
  btnDash: {
    marginTop: 25,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  btnText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  btnStyle: {
    borderWidth: 2,
    borderColor: '#DEF2F1',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  InnerContainer: {
    padding: 20,
    height: '100%',
    width: '100%',
  },
});
