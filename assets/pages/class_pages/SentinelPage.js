import { StyleSheet, Text, View } from 'react-native';

export default function SentinelPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
                Sentinal, version of sential/paladin
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

