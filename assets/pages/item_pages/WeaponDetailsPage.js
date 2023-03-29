import { Dimensions, StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function WeaponDetailsPage({ route, navigation }) {
    const { item } = route.params;
    const thisItem = JSON.parse(item);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.item2}><Text style={styles.text}>Name</Text></View>
                <View style={styles.item}><Text style={styles.text}>{thisItem.name}</Text></View>
                <View style={styles.item2}><Text style={styles.text}>Type</Text></View>
                <View style={styles.item}><Text style={styles.text}>{fixType(thisItem.weaponClassification)}</Text></View>
                <View style={styles.item2}><Text style={styles.text}>Properties</Text></View>
                <View style={styles.item}><Text style={styles.text}>{formatProperties(thisItem.properties)}</Text></View>
                <View style={styles.item2}><Text style={styles.text}>Cost</Text></View>
                <View style={styles.item}><Text style={styles.text}>{thisItem.cost}</Text></View>
                <View style={styles.item2}><Text style={styles.text}>Weight</Text></View>
                <View style={styles.item}><Text style={styles.text}>{thisItem.weight}</Text></View>
                <View style={styles.item2}><Text style={styles.text}>Damage</Text></View>
                <View style={styles.item}><Text style={styles.text}>{damageComposer(thisItem)}</Text></View>
                <View style={styles.item2}><Text style={styles.text}>Source</Text></View>
                <View style={styles.item}><Text style={styles.text}>{thisItem.contentSource}</Text></View>
            </ScrollView>
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
    let formatted = "";
    for(let i = 0; i < property.length; i++) {
        formatted = formatted + property[i] + ", ";
        console.log(formatted);
    }
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
      backgroundColor: '#252525',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
        padding: 4,
        borderWidth: 2,
        borderColor: "#941a1d",
        marginBottom: 4,
        width: Dimensions.get('window').width,
      },
    item2: {
        padding: 4,
        borderWidth: 2,
        borderColor: "#941a1d",
        width: Dimensions.get('window').width,
      },
    text: {
        color: '#ffffff',
        // textAlign: 'center',
        alignItems: 'center',
        fontSize: 24,
    },
  });