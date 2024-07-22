import {Character} from '@/entities/Character';
import {FC} from 'react';
import {useFavoritesCharactersManagement} from '@/features/favoritesCharactersManagement';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type CharacterDetailsActionProps = {
  character: Character;
};

export const CharacterDetailsAction: FC<
  CharacterDetailsActionProps
> = props => {
  const {character} = props;

  const {
    isFavoredCharacter,
    addCharacterToFavorites,
    removeCharacterFromFavorites,
  } = useFavoritesCharactersManagement();

  const renderIcon = (icon: string, color: string, onPress?: () => void) => (
    <MaterialIcons
      name={icon}
      size={40}
      color={color}
      suppressHighlighting
      onPress={onPress}
    />
  );

  return isFavoredCharacter(character)
    ? renderIcon('cards-heart', 'red', () =>
        removeCharacterFromFavorites(character),
      )
    : renderIcon('cards-heart-outline', 'black', () =>
        addCharacterToFavorites(character),
      );
};
