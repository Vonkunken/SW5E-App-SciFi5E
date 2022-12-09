import { StyleSheet, Text, View } from 'react-native';

export default function SpeciesPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
                Individual species
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