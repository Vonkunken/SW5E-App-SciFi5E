import { NavigationContainer, StackActions, DefaultTheme, useTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator} from '@react-navigation/stack';
import { Dimensions, StyleSheet, Text, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
import CustomWeapons from './assets/pages/item_pages/CustomWeapons';
import WeaponDetailsPage from './assets/pages/item_pages/WeaponDetailsPage';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(0, 0, 0)',
      text:'rgb(255, 255, 255)'
    },
  };
const Stack = createStackNavigator();

function HomeScreen() {
  const { colors } = useTheme();
    return (
        <SafeAreaView>
            <Text style={{ color: '#fff'}}>
                This is very temp, needs a lot of revision
            </Text>
        </SafeAreaView>
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
            <Stack.Screen name="WeaponProperties" component={CustomWeapons} />
            <Stack.Screen name="WeaponDetails" component={WeaponDetailsPage} />
        </Stack.Navigator>
    )
}

const Drawer = createDrawerNavigator();

export default function App() {
    const scheme = useColorScheme();
  return (
    <NavigationContainer theme={theme}>
        <Drawer.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false, swipeEdgeWidth: Dimensions.get('window').width, drawerStyle: {backgroundColor: '#000'}}}>
            <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Home"}}/>
            <Drawer.Screen name="ClassScreen" component={ClassScreen} options={{ title: "Classes"}}/>
            <Drawer.Screen name="SpeciesScreen" component={SpeciesScreen} options={{ title: "Species"}}/>
            <Drawer.Screen name="ItemsScreen" component={ItemsScreen} options={{ title: "Items"}}/>
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
