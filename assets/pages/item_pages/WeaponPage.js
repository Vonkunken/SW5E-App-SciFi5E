import React, {useState, useEffect } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//import { TouchableOpacity } from 'react-native-gesture-handler';
//import weapons from '../../json/items_json/weapons.json';
import equipment from '../../json/equipment.json';
import { MaterialCommunityIcons } from '@expo/vector-icons';

let sortedArray = typeChecker(equipment);

export default function WeaponPage({ navigation }) {
    sortedArray.sort((a, b) => a.name.localeCompare(b.name));

    const [data, setData] = useState([]);
    useEffect(() => {
    setData(sortedArray);
    }, []);
    
    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={data}
                extraData={data}
                renderItem={({item}) =>
                <View style={{ flexDirection:"row"}}>
                    {iconChecker(item.weaponClassification)}
                    <TouchableOpacity
                    style={styles.item}
                    onPress={() => navigation.navigate('WeaponDetails', {item: JSON.stringify(item)})}
                    >
                    <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.item2}
                    onPress={() => navigation.navigate('WeaponDetails', {item: JSON.stringify(item)})}
                    >
                    <Text style={styles.text}>{damageComposer(item)}</Text>
                    </TouchableOpacity>
                </View>}
            />
        </SafeAreaView>
    );
  }

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
        return <MaterialCommunityIcons name="pistol" size={Dimensions.get('window').width * 0.1} color="#fff"/>
    } else {
        return <MaterialCommunityIcons name="sword" size={Dimensions.get('window').width * 0.1} color="#fff"/>
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#252525',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
        padding: 4,
        borderBottomWidth: 2,
        borderBottomColor: "#941a1d",
        borderLeftWidth: 2,
        borderLeftColor: "#941a1d",
        width: Dimensions.get('window').width * 0.5,
      },
      item2: {
        padding: 4,
        borderBottomWidth: 2,
        borderBottomColor: "#941a1d",
        width: Dimensions.get('window').width * 0.4,
      },
    text: {
        color: '#ffffff',
        alignItems: 'center',
        fontSize: 20,
    },
  });