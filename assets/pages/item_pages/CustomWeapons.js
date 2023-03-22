import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function CustomWeapons({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
                This page will explain the rational behind the weapon properties, what they do, and how to create your own weapons.
            </Text>
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
    button: {
        padding: 5,
        backgroundColor: '#aaaaaa',
        borderColor: '#ffffff',
        borderWidth: 10,
        borderRadius: 15,
        alightItems: 'center',
        justifyContent: 'center',
    }
  });