import { Dimensions, StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

import classData from '../../json/class.json';

export default function ClassDetailsPage({ route, navigation }) {
    const { reference } = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.item2}><Text style={styles.titleText}>Flavor Text</Text></View>
                <View style={styles.item}><Text style={styles.text}>{classData[reference].flavorText}</Text></View>
            </ScrollView>
        </SafeAreaView>
    );
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
        fontSize: 12,
    },
    titleText: {
        color: '#ffffff',
        // textAlign: 'center',
        alignItems: 'center',
        fontSize: 32,
    },
  });