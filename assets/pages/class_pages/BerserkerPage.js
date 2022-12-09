import { StyleSheet, Text, View } from 'react-native';

export default function BerserkerPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
                Berserker, version of berserker/barbarian
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
  });

