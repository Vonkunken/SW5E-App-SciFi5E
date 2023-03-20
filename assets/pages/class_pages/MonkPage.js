import { StyleSheet, Text, View } from 'react-native';

export default function MonkPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
                Monk, version of monk
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

