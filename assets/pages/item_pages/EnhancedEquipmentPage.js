import { StyleSheet, Text, View } from 'react-native';

export default function EnhancedEquipmentPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
               Enhanced Equipment or basically magic items for this setting
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