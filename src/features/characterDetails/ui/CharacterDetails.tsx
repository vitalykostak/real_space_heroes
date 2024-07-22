import {
  CharacterDetailsCard,
  type CharacterDetails as CharacterDetailsType,
} from '@/entities/Character';
import {FC, ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import {useCharacterDetails} from '../hooks/useCharacterDetails';

type CharacterDetailsProps = {
  characterId: string;
  containerStyle?: ViewStyle;
  renderAction?: (character: CharacterDetailsType) => ReactNode;
};

export const CharacterDetails: FC<CharacterDetailsProps> = props => {
  const {characterId, containerStyle, renderAction} = props;

  const {loading, data} = useCharacterDetails(characterId);

  if (loading) {
    return <CharacterDetailsCard containerStyle={containerStyle} loading />;
  }

  if (!data) {
    return null;
  }

  return (
    <CharacterDetailsCard
      containerStyle={containerStyle}
      character={data}
      action={renderAction?.(data)}
    />
  );
};
