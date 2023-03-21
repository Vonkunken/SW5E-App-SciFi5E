import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import weapons from '../../json/items_json/weapons.json'

export default function WeaponPage({ navigation }) {
    console.log(weapons);
    return (
        <View style={styles.container}>
            <FlatList 
                data={weapons.weapon}
                renderItem={({item}) =>
                <TouchableOpacity
                    style={styles.item}
                    // onPress={() => onPressHandlerItem}
                    >
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>{item.damage}</Text>
                </TouchableOpacity>}
            />
        </View>
    );
  }

//   function onPressHandlerItem(itemID) {
//     navigation.navigate('', {
//         id: weapons[itemID-1].id
//     });
//   }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
        padding: 10,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#941a1d",
        backgroundColor: '#595959',
        width: Dimensions.get('window').width,
      },
    text: {
        color: '#ffffff',
        alignItems: 'center',
        fontSize: 36,
        height: 50,
    },
  });