import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {useStarWarsCharactersList} from '../../hooks/useStarWarsCharactersList';
import {DataTable, Text} from 'react-native-paper';
import {Character, extractCharacterId} from '@/entities/Character';
import {FC, ReactNode} from 'react';

type StarWarsCharactersListProps = {
  containerStyle?: ViewStyle;
  prependColumn?: {
    containerStyle?: ViewStyle;
    header: ReactNode;
    renderCell: (character: Character) => ReactNode;
  };
  onPressClick?: (character: Character) => void;
};

export const StarWarsCharactersList: FC<
  StarWarsCharactersListProps
> = props => {
  const {containerStyle, prependColumn, onPressClick} = props;

  const {charactersList, page, count, perPage, fetchPage} =
    useStarWarsCharactersList();

  const from = (page - 1) * perPage;
  const to = Math.min(page * perPage, count);

  return (
    <View style={[styles.container, containerStyle]}>
      <DataTable>
        <DataTable.Header>
          {prependColumn?.header && (
            <DataTable.Title
              style={[styles.prependColumn, prependColumn.containerStyle]}>
              {prependColumn.header}
            </DataTable.Title>
          )}
          <DataTable.Title style={styles.nameCell}>
            <Text variant="titleMedium">Name</Text>
          </DataTable.Title>
          <DataTable.Title style={styles.birthCell}>
            <Text variant="titleMedium">Birth Yr</Text>
          </DataTable.Title>
          <DataTable.Title style={styles.genderCell}>
            <Text variant="titleMedium">Gender</Text>
          </DataTable.Title>
        </DataTable.Header>
        {charactersList.map(c => (
          <DataTable.Row key={extractCharacterId(c)}>
            {prependColumn?.renderCell && (
              <DataTable.Cell
                style={[styles.prependColumn, prependColumn.containerStyle]}>
                {prependColumn.renderCell(c)}
              </DataTable.Cell>
            )}
            <DataTable.Cell style={styles.nameCell}>
              <TouchableOpacity onPress={() => onPressClick?.(c)}>
                <Text variant="labelLarge">{c.name}</Text>
              </TouchableOpacity>
            </DataTable.Cell>
            <DataTable.Cell style={styles.birthCell}>
              <Text variant="labelLarge">{c.birth_year}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.genderCell}>
              <Text variant="labelLarge">{c.gender}</Text>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
        <DataTable.Pagination
          page={page - 1}
          numberOfPages={Math.ceil(count / perPage)}
          onPageChange={targetPage => fetchPage(targetPage + 1)}
          label={`${from + 1}-${to} of ${count}`}
          numberOfItemsPerPage={perPage}
        />
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  prependColumn: {
    flex: 1.5,
  },
  nameCell: {
    flex: 4,
    paddingRight: 10,
  },
  birthCell: {
    flex: 3,
  },
  genderCell: {
    flex: 2.5,
  },
});
