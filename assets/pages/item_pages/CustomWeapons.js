import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

// this page was initially called CustomWeapons for a different purpose, unrelated to SW5E, it's name can stay the same to avoid accidently breaking anything, it wont be visible anyway. 
export default function CustomWeapons({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
                This page will display all the weapon properties and explain them.
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