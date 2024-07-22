import {CharacterDetailsScreen} from '@/screens/home/CharacterDetails';
import {CharactersList} from '@/screens/home/CharactersList';
import {AppNavigation, NavigationStackLists} from '@/shared/config/navigation';
import {AppHeader} from '@/widgets/AppHeader';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<NavigationStackLists>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: AppHeader,
        }}>
        <Stack.Screen
          name={AppNavigation.CHARACTERS_LIST}
          component={CharactersList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={AppNavigation.CHARACTER_DETAILS}
          component={CharacterDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
