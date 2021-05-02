import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Dimensions
} from 'react-native';

const App = () => {
  

  return (
    <SafeAreaView style={styles.container}>
      <Grid data = {data} />
      
    </SafeAreaView>
  );
};
export default App;

const data = [
  {id: 'a', value: '?'},
  {id: 'b', value: '?'},
  {id: 'c', value: '?'},
  {id: 'd', value: '?'},
  {id: 'e', value: '?'},
  {id: 'f', value: '?'},
];
const numColumns = 3;
const size = Dimensions.get('window').width/numColumns;
const styles = StyleSheet.create({
  itemContainer: {
    width: size,
    height: size,
  },
  item: {
    flex: 1,
    margin: 3,
    backgroundColor: 'lightblue',
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});

function Grid(props) {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <Text style={styles.item}>{item.value}</Text>
        </View>
      )}
      keyExtractor={item => item.id}
      numColumns={numColumns} />
  );
}
		
