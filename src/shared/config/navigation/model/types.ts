import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum AppNavigation {
  CHARACTERS_LIST = 'CHARACTERS_LIST',
  CHARACTER_DETAILS = 'CHARACTER_DETAILS',
}

export type NavigationStackLists = {
  [AppNavigation.CHARACTERS_LIST]: {};
  [AppNavigation.CHARACTER_DETAILS]: {
    characterId: string;
    characterName: string;
  };
};

export type AppScreenProps<T extends keyof NavigationStackLists> = {
  route: RouteProp<NavigationStackLists, T>;
  navigation: NativeStackNavigationProp<NavigationStackLists, T>;
};
