import { StyleSheet, Text, View } from 'react-native';

export default function SpeciesListPage({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>
            Species List
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