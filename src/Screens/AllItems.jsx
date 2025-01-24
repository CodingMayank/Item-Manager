import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AllItems = ({data}) => {
  return (
    <View>
        <View style = {styles.headingContainer} >
      <Text style = {{fontSize:20, fontWeight:"bold"}} >Items</Text>
      <Text style = {{fontSize:20, fontWeight:"bold"}} >Quantity</Text>
    </View>
    <FlatList
     data={data}
     keyExtractor={(item)=>item.id}
     renderItem={({item})=>(
       <View style = {[styles.itemContainer,item.stock < 10 ? {backgroundColor:"#E85A51",borderRadius:5,paddingVertical:3} : {backgroundColor:"#AFD274", borderRadius:5,paddingVertical:3},]} >
        <Text style = {{fontSize:15, fontWeight:"bold"}} >{item.name}</Text>
        <Text style = {{fontSize:15, fontWeight:"bold"}} >{item.stock}</Text>
       </View> 

     )}

     contentContainerStyle = {{gap:15}}
     />
    </View>
  )
}

export default AllItems

const styles = StyleSheet.create({

    headingContainer : {
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:20,
        paddingHorizontal:5
    },
    itemContainer : {
        paddingHorizontal:12,
        flexDirection:"row",
        justifyContent:"space-between"
    }

})