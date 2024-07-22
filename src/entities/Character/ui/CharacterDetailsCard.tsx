import {FC, ReactNode} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {
  ActivityIndicator,
  Card,
  Divider,
  MD2Colors,
  Text,
} from 'react-native-paper';
import {CharacterDetails} from '../model/types';

type CharacterDetailsDataCardProps = {
  containerStyle?: ViewStyle;
  character: CharacterDetails;
  loading?: false;
  action?: ReactNode;
};

type CharacterDetailsLoadingCardProps = {
  containerStyle?: ViewStyle;
  loading: true;
  character?: CharacterDetails;
  action?: ReactNode;
};

type CharacterDetailsCardProps =
  | CharacterDetailsLoadingCardProps
  | CharacterDetailsDataCardProps;

export const CharacterDetailsCard: FC<CharacterDetailsCardProps> = props => {
  const {containerStyle, loading} = props;

  if (loading) {
    return (
      <Card style={[styles.loadingCardContainer, containerStyle]}>
        <ActivityIndicator
          size={'large'}
          animating={true}
          color={MD2Colors.red800}
        />
      </Card>
    );
  }

  const {character, action} = props;

  const items = [
    ['Height', character.height],
    ['Mass', character.mass],
    ['Hair color', character.hair_color],
    ['Skin Color', character.skin_color],
    ['Eye Color', character.eye_color],
    ['Birth year', character.birth_year],
    ['Gender', character.gender],
    ['Homeworld', character.homeworld.name],
  ];

  return (
    <Card style={[containerStyle]}>
      {action && (
        <>
          <View style={styles.actionContainer}>
            {action}
            <Text variant="headlineLarge" style={styles.value}>
              {character.name}
            </Text>
          </View>
          <Divider />
        </>
      )}
      <Card.Content>
        {items.map(([label, value], i) => (
          <View key={i}>
            <View style={styles.rowContainer}>
              <View style={styles.rowCell}>
                <Text variant="labelLarge" style={styles.label}>
                  {label}
                </Text>
              </View>
              <View style={styles.rowCell}>
                <Text variant="labelLarge" style={styles.value}>
                  {value}
                </Text>
              </View>
            </View>
            <Divider />
          </View>
        ))}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    width: '100%',
    marginVertical: 16,
    alignItems: 'center',
    gap: 16,
  },
  loadingCardContainer: {
    height: 436,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {flexDirection: 'row', paddingVertical: 8},
  rowCell: {flex: 1},
  label: {
    color: 'grey',
  },
  value: {
    color: 'black',
  },
});
