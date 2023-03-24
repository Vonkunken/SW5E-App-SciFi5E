import React, {useState, useEffect } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import weapons from '../../json/items_json/weapons.json';
import equipment from '../../json/equipment.json';
import { MaterialCommunityIcons } from '@expo/vector-icons';

let sortedArray = JSON.parse(JSON.stringify(equipment));

export default function WeaponPage({ navigation }) {
    sortedArray.sort();

    const [data, setData] = useState([]);

    useEffect(() => {
 
    setData(sortedArray);
 
    }, []);
    
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={typeChecker(data)}
                renderItem={({item}) =>
                <View style={{ flexDirection:"row"}}>
                    {iconChecker(item.weaponClassification)}
                    <TouchableOpacity
                    style={styles.item}
                    // onPress={() => onPressHandlerItem}
                    >
                    <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.item2}
                    // onPress={() => onPressHandlerItem}
                    >
                    <Text style={styles.text}>{damageComposer(item)}</Text>
                    </TouchableOpacity>
                </View>}
            />
        </View>
    );
  }

//   function onPressHandlerItem(itemID) {
//     navigation.navigate('', {
//         id: weapons[itemID-1].id
//     });
//   }
  function damageComposer(weapon){
    let damage = "";
    damage = weapon.damageNumberOfDice + "d" + weapon.damageDieType + " " + weapon.damageType;
    if(damage === "0d0 Unknown"){
        damage = "Special";
    }
    return damage;
  }

  function typeChecker(category) {
    let tmpArray = [];
    for (let i = 0; i < category.length; i++) {
        if (category[i].equipmentCategory === "Weapon"){
            tmpArray.push(category[i]);
        }
    }
    return tmpArray;
  }
  
  function iconChecker(weaponType) {
    if(weaponType === "MartialBlaster" || weaponType === "SimpleBlaster") {
        return <MaterialCommunityIcons name="pistol" size={Dimensions.get('window').width * 0.1} color="black" style="item3"/>
    } else {
        return <MaterialCommunityIcons name="sword" size={Dimensions.get('window').width * 0.1} color="black" style="item3"/>
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
        padding: 4,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#941a1d",
        backgroundColor: '#595959',
        width: Dimensions.get('window').width * 0.5,
      },
      item2: {
        padding: 4,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#941a1d",
        backgroundColor: '#595959',
        width: Dimensions.get('window').width * 0.4,
      },
      item3: {
        padding: 4,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#941a1d",
        backgroundColor: '#595959',
        width: Dimensions.get('window').width * 0.1,
      },
    text: {
        color: '#ffffff',
        alignItems: 'center',
        fontSize: 24,
        height: 32,
    },
  });