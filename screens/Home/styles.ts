import {StyleSheet} from 'react-native';
import theme from '../../libs/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  textHeading: {
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '600',
    textShadowColor: theme.colors.gray,
  },
});

export default styles;
