import {
  Character,
  CharacterGenderCount,
  extractCharacterId,
} from '@/entities/Character';
import {
  RemoveAllFavoritesButton,
  useFavoritesCharactersManagement,
} from '@/features/favoritesCharactersManagement';
import {
  StarWarsCharactersList,
  starWarsCharactersDepsContext,
} from '@/features/starWarsCharacters';
import {fetchCharacters} from '@/shared/api/heroesRepository';
import {AppNavigation, AppScreenProps} from '@/shared/config/navigation';
import {ScreenLayout} from '@/widgets/ScreenLayout';
import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const CharactersList: FC<
  AppScreenProps<AppNavigation.CHARACTERS_LIST>
> = props => {
  const {navigation} = props;

  const {
    addCharacterToFavorites,
    removeCharacterFromFavorites,
    isFavoredCharacter,
    favoritesGenderCount,
  } = useFavoritesCharactersManagement();

  const navigateToCharacterDetails = (c: Character) => {
    navigation.navigate(AppNavigation.CHARACTER_DETAILS, {
      characterId: extractCharacterId(c),
      characterName: c.name,
    });
  };

  const renderIcon = (icon: string, color: string, onPress?: () => void) => (
    <MaterialIcons
      name={icon}
      size={20}
      color={color}
      suppressHighlighting
      onPress={onPress}
    />
  );

  return (
    <ScreenLayout>
      <View style={styles.header}>
        <Text variant="headlineLarge">Fans</Text>
        <RemoveAllFavoritesButton containerStyle={styles.removeBtn} />
      </View>

      <CharacterGenderCount
        {...favoritesGenderCount}
        containerStyle={styles.characterGenderCountContainer}
      />
      <starWarsCharactersDepsContext.Provider value={{fetchCharacters}}>
        <StarWarsCharactersList
          onPressClick={navigateToCharacterDetails}
          prependColumn={{
            header: renderIcon('cards-heart', 'black'),
            renderCell: c =>
              isFavoredCharacter(c)
                ? renderIcon('cards-heart', 'red', () =>
                    removeCharacterFromFavorites(c),
                  )
                : renderIcon('cards-heart-outline', 'black', () =>
                    addCharacterToFavorites(c),
                  ),
          }}
        />
      </starWarsCharactersDepsContext.Provider>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  removeBtn: {
    width: 150,
  },
  characterGenderCountContainer: {
    marginBottom: 16,
  },
});
