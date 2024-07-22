import {
  CharacterDetails,
  characterDetailsDepsContext,
} from '@/features/characterDetails';
import {fetchCharacter} from '@/shared/api/heroesRepository';
import {AppNavigation, AppScreenProps} from '@/shared/config/navigation';
import {ScreenLayout} from '@/widgets/ScreenLayout';
import {FC, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {CharacterDetailsAction} from './CharacterDetailsAction';
import {Character} from '@/entities/Character';

export const CharacterDetailsScreen: FC<
  AppScreenProps<AppNavigation.CHARACTER_DETAILS>
> = props => {
  const {navigation} = props;
  const {characterId, characterName} = props.route.params;

  useEffect(() => {
    navigation.setOptions({title: characterName});
  }, [navigation, characterName]);

  return (
    <ScreenLayout containerStyle={styles.screenContainer} bounces={false}>
      <characterDetailsDepsContext.Provider
        value={{fetchCharacterDetails: fetchCharacter}}>
        <CharacterDetails
          characterId={characterId}
          renderAction={c => (
            <CharacterDetailsAction character={c as unknown as Character} />
          )}
        />
      </characterDetailsDepsContext.Provider>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    paddingTop: 0,
  },
});
