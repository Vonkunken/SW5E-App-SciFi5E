import { StyleSheet, Text, View } from 'react-native';

export default function FighterPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
                Fighter, version of fighter
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

