import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ItemPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>TMP</Text>
        </View>
    );
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
    text: {
        color: '#ffffff',
        alignItems: 'center',
        fontSize: 24,
        height: 32,
    },
  });