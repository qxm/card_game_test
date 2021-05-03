import React, {useState, useEffect} from 'react';
import initData  from './util/initCards';
import { CARD_PAIRS_VALUE } from './util/initCards'
import * as globalStyles from './styles/global';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
  Dimensions
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux'
import {
  flipCard,
  flipCardBack,
  initCard,
} from './actions/cardSlice';
	

const App = () => {
  const data = useSelector(state => state.card.cards)
  const step = useSelector(state => state.card.step)
   const dispatch = useDispatch()
  const restart = () => {
      dispatch(initCard())
  }
  //console.log(data)
  return (
    
       
   
          <SafeAreaView style={globalStyles.COMMON_STYLES.pageContainer}>
             <View style={styles.lineContainer}>
                <Text
                    style={styles.steps}
                    onPress={restart}
            
               > Restart</Text>
               <Text
                    style={styles.steps}
                 
            
               > STEPS: {step}</Text>
            </View>
            <Grid data = {data} />
          </SafeAreaView>
   
        
   
  );
};
export default App;

const numColumns = 3;
const numRows = 5;
const size = Dimensions.get('window').width/numColumns;
const height = Dimensions.get('window').height/ numRows;
const styles = StyleSheet.create({
  itemContainer: {
    width: size,
    height: height,
  },
  item: {
    flex: 1,
    margin: 3,
    backgroundColor: 'lightblue',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  steps: {
    flex: 1,
    margin: 3,
    backgroundColor: 'lightblue',
    textAlign: 'center',
    textAlignVertical: 'center'
  }, 
  lineContainer: {
    flexDirection: 'row',
    width: size * numColumns,
    height: height /2 -25 ,
    backgroundColor: '#F5FCFF',
  },
});

const viewStyles = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
};

function Grid(props) {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const [prev, setPrev] = useState({index:-1, value:-1})
   const step = useSelector(state => state.card.step)
  function showAlert(step) {
    Alert.alert(
    'congratulations!',
    `You win this game by ${step} steps!`,
    [
       { text: 'Try another round', onPress: () => dispatch(initCard()) }
     ]
    )
  }
  	
  function checkPair(prev, current) {
    if (prev.value==current.value) {
          //dispatch(flipCardPerm(prev.index));
          
          let succ = count + 1
          setCount(succ)
          console.log(succ)
          if (succ==CARD_PAIRS_VALUE) {
            setCount(0)
            showAlert(step+1)
          }
    }
    else {
         dispatch(flipCardBack(prev.index));
         dispatch(flipCardBack(current.index));
    }
}

  function createFlipFunc(item, index) {
      return () => {
            if (item.flipState == 0) {
             
              dispatch(flipCard(index));
              if (prev.index == -1)  setPrev( {index:index, value:item.value})
              else {
                let a = prev
                setPrev( {index:-1, value: -1})
                setTimeout(()=>checkPair(a, {index:index, value:item.value}),1000 );
                 
                 
              }
            }
         }
   }

  return (
    <FlatList
      data={props.data}
      renderItem={({item, index}) => {
      
        let flip= createFlipFunc(item, index)
        return (<View style={styles.itemContainer}>
       	
          <Text style={styles.item} onPress={flip}>{item.displayValue}</Text>
          
        </View>)
     
      }}
      keyExtractor={item => item.id}
      numColumns={numColumns} />
  );
}
		
