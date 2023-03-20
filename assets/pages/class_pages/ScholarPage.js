import { StyleSheet, Text, View } from 'react-native';

export default function ScholarPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
                Scholar, version of scholar
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

