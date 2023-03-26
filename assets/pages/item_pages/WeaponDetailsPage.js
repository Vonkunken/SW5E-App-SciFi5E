import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function WeaponDetailsPage({ route, navigation }) {
    const { item } = route.params;
    const thisItem = JSON.parse(item);
    console.log(thisItem);
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>{thisItem.name}</Text>
            <Text style={styles.text}>{fixType(thisItem.weaponClassification)}</Text>
            <Text style={styles.text}>{formatProperties(thisItem.propertiesJson)}</Text>
            <Text style={styles.text}>{thisItem.cost}</Text>
            <Text style={styles.text}>{thisItem.weight}</Text>
            <Text style={styles.text}>{damageComposer(thisItem)}</Text>
            <Text style={styles.text}>{thisItem.contentSource}</Text>
        </SafeAreaView>
    );
  }

  function fixType(type) {
    let fixedType = "";
    switch (type) {
        case "SimpleBlaster":
            fixedType = "Simple Blaster";
            break;
        case "MartialBlaster":
            fixedType = "Martial Blaster";
            break;
        case "MartialLightweapon":
            fixedType = "Martial Lightweapon";
            break;
        case "SimpleLightweapon":
            fixedType = "Simple Lightweapon";
            break;
        case "MartialVibroweapon":
            fixedType = "Martial Vibroweapon";
            break;
        case "SimpleVibroweapon":
            fixedType = "Simple Vibroweapon";
            break;
        case "ExoticBlaster":
            fixedType = "Exotic Blaster";
            break;
        case "ExoticVibroweapon":
            fixedType = "Exotic Vibroweapon";
            break;
        default:
            fixedType ="This case hasn't been programmed apparently, please report so this can be fixed";
            break;
        }
    return fixedType;
  }

  function formatProperties(property) {
    let formatted = property.replace(/[\[\]"]+/g, '');
    return formatted;
  }
  // replace this with a verison that takes the properties json data and loops through it for its length adding them to a string with each loop then return that
  function damageComposer(weapon){
    let damage = "";
    damage = weapon.damageNumberOfDice + "d" + weapon.damageDieType + " " + weapon.damageType;
    if(damage === "0d0 Unknown"){
        damage = "Special";
    }
    return damage;
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
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
    text: {
        color: '#ffffff',
        alignItems: 'center',
        fontSize: 24,
        height: 32,
    },
  });