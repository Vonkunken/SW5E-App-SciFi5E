import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

import ClassPage from "./assets/pages/class_pages/ClassPage";
import BerserkerPage from "./assets/pages/class_pages/BerserkerPage";
import MysticPage from "./assets/pages/class_pages/MysticPage";
import SpeciesListPage from "./assets/pages/species_pages/SpeciesListPage";
import SpeciesPage from "./assets/pages/species_pages/SpeciesPage";

const Stack = createStackNavigator();

function HomeScreen() {
    return (
        <View>
            <Text>
                This is a modified version of SW5E which is itself a modified version of D&D 5E, this is currently made as a personal project and for personal use, it is currently up on github and public so someone may see this which is why this message is here. To start using the app please swipe left to open the drawer navigator.
            </Text>
        </View>
    )
}

function ClassScreen() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Class" component={ClassPage} />
            <Stack.Screen name="Berserker" component={BerserkerPage} />
            <Stack.Screen name="Mystic" component={MysticPage} />
        </Stack.Navigator>
    )
}
function SpeciesScreen() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="SpeciesList" component={SpeciesListPage} />
            <Stack.Screen name="Species" component={SpeciesPage} />
        </Stack.Navigator>
    )
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen name="ClassScreen" component={ClassScreen} />
            <Drawer.Screen name="SpeciesScreen" component={SpeciesScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
    
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
