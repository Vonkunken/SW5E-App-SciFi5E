import { StyleSheet, Text, View } from 'react-native';

export default function MysticPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
                Mystic Page, version of consular
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
    text: {
        color: '#000000',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });