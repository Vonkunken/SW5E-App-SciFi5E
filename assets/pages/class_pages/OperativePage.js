import { StyleSheet, Text, View } from 'react-native';

export default function OperativePage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
                Operative, version of operative/rogue
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

