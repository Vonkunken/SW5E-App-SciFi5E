import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

import ClassPage from "./assets/pages/class_pages/ClassPage";
import BerserkerPage from "./assets/pages/class_pages/BerserkerPage";
import EngineerPage from './assets/pages/class_pages/EngineerPage';
import FighterPage from './assets/pages/class_pages/FighterPage';
import GuardianPage from './assets/pages/class_pages/GuardianPage';
import MonkPage from './assets/pages/class_pages/MonkPage';
import MysticPage from "./assets/pages/class_pages/MysticPage";
import OperativePage from './assets/pages/class_pages/OperativePage';
import ScholarPage from './assets/pages/class_pages/ScholarPage';
import ScoutPage from './assets/pages/class_pages/ScoutPage';
import SentinelPage from './assets/pages/class_pages/SentinelPage';

import SpeciesListPage from "./assets/pages/species_pages/SpeciesListPage";
import SpeciesPage from "./assets/pages/species_pages/SpeciesPage";

import ItemPage from './assets/pages/item_pages/ItemPage';
import WeaponPage from './assets/pages/item_pages/WeaponPage';
import ArmorPage from './assets/pages/item_pages/ArmorPage';
import AdventuringGearPage from './assets/pages/item_pages/AdventuringGearPage';
import EnhancedEquipmentPage from './assets/pages/item_pages/EnhancedEquipmentPage';

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
            <Stack.Screen name="Engineer" component={EngineerPage} />
            <Stack.Screen name="Fighter" component={FighterPage} />
            <Stack.Screen name="Guardian" component={GuardianPage} />
            <Stack.Screen name="Monk" component={MonkPage} />
            <Stack.Screen name="Mystic" component={MysticPage} />
            <Stack.Screen name="Operative" component={OperativePage} />
            <Stack.Screen name="Scholar" component={ScholarPage} />
            <Stack.Screen name="Scout" component={ScoutPage} />
            <Stack.Screen name="Sentinel" component={SentinelPage} />
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
function ItemsScreen() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Item" component={ItemPage} />
            <Stack.Screen name="AdventuringGear" component={AdventuringGearPage} />
            <Stack.Screen name="Armor" component={ArmorPage} />
            <Stack.Screen name="EnhancedEquipment" component={EnhancedEquipmentPage} />
            <Stack.Screen name="Weapon" component={WeaponPage} />
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
            <Drawer.Screen name="ItemsScreen" component={ItemsScreen} />
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
