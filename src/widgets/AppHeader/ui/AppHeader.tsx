import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

export const AppHeader = (props: NativeStackHeaderProps) => {
  return (
    <Appbar.Header style={styles.container}>
      <Appbar.BackAction size={20} onPress={props.navigation.goBack} />
      {props.options.title && <Appbar.Content title={props.options.title} />}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    paddingRight: 16,
    backgroundColor: '#F0F0F0',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
