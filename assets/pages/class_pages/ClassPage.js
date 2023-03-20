import { StyleSheet, Text, View } from 'react-native';

export default function ClassPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
                This will have every class listed here
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