import {FC} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Card, Text} from 'react-native-paper';

type CharacterGenderCountProps = {
  males: number;
  females: number;
  others: number;
  containerStyle?: ViewStyle;
};

export const CharacterGenderCount: FC<CharacterGenderCountProps> = props => {
  const {males, females, others, containerStyle} = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <Card style={styles.card}>
        <Card.Title
          title={<Text variant="headlineMedium">{females}</Text>}
          subtitle={<Text>Female Fans</Text>}
        />
      </Card>
      <Card style={styles.card}>
        <Card.Title
          title={<Text variant="headlineMedium">{males}</Text>}
          subtitle={<Text>Male Fans</Text>}
        />
      </Card>
      <Card style={styles.card}>
        <Card.Title
          title={<Text variant="headlineMedium">{others}</Text>}
          subtitle={<Text>Others</Text>}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
  },
  card: {
    backgroundColor: 'white',
    flex: 1,
  },
});
