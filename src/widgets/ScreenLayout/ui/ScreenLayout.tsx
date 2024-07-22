import {FC, PropsWithChildren} from 'react';
import {ScrollView, StyleSheet, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type ScreenLayoutProps = {
  containerStyle?: ViewStyle;
  bounces?: boolean;
};

export const ScreenLayout: FC<PropsWithChildren<ScreenLayoutProps>> = props => {
  const {children, containerStyle, bounces = true} = props;

  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {paddingTop: insets.top, paddingBottom: insets.bottom},
        containerStyle,
      ]}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        bounces={bounces}>
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F0F0F0',
  },
  scrollViewContainer: {
    flexGrow: 1,
    padding: 16,
  },
});
