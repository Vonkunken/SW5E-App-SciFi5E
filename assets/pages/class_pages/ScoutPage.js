import { StyleSheet, Text, View } from 'react-native';

export default function ScoutPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
                Scout, version of scout/ranger
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

