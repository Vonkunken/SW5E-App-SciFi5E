import { StyleSheet, Text, View } from 'react-native';

export default function ArmorPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
                Armors
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