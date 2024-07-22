import {FC} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {Button} from 'react-native-paper';
import {useFavoritesCharactersManagement} from '../hooks/useFavoritesCharactersManagement';

type RemoveAllFavoritesButtonProps = {
  containerStyle?: ViewStyle;
};
export const RemoveAllFavoritesButton: FC<
  RemoveAllFavoritesButtonProps
> = props => {
  const {containerStyle} = props;

  const {removeAllCharacters} = useFavoritesCharactersManagement();

  return (
    <Button
      style={[styles.btn, containerStyle]}
      textColor="red"
      mode="outlined"
      rippleColor="rgba(255, 0, 0, .32)"
      onPress={removeAllCharacters}>
      CLEAR FANS
    </Button>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderColor: 'red',
  },
});
