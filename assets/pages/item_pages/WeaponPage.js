import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import weapons from '../../json/items_json/weapons.json';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function WeaponPage({ navigation }) {
    console.log(weapons);
    return (
        <View style={styles.container}>
            <FlatList 
                data={weapons.weapon}
                renderItem={({item}) =>
                <View style={{ flexDirection:"row"}}>
                    {iconChecker(item.type)}
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
                    <Text style={styles.text}>{item.damage}</Text>
                    </TouchableOpacity>
                </View>}
                /* <TouchableOpacity>
                    style={styles.item}
                    // onPress={() => onPressHandlerItem}
                    >
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>{item.damage}</Text>
                </TouchableOpacity> */
            />
        </View>
    );
  }

//   function onPressHandlerItem(itemID) {
//     navigation.navigate('', {
//         id: weapons[itemID-1].id
//     });
//   }

  function iconChecker(weaponType) {
    if(weaponType === "Martial Blaster" || weaponType === "Simple Blaster") {
        return <MaterialCommunityIcons name="pistol" size={36} color="black" style="item3"/>
    } else {
        return <MaterialCommunityIcons name="sword" size={36} color="black" style="item3"/>
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