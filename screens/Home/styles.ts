import {StyleSheet} from 'react-native';
import theme from '../../libs/themes';
import fonts from '../../libs/fonts';

const styles = StyleSheet.create({
  ButtonStyle: {
    backgroundColor: theme.colors.blue,
    paddingVertical: theme.size.xs * 1.5,
    paddingHorizontal: theme.size.xs * 2,
    borderRadius: theme.size.xs,
    width: '100%',
    shadowColor: theme.colors.blue,
    shadowOffset: {
      width: 0,
      height: theme.size.xs,
    },
    shadowOpacity: 0.3,
    shadowRadius: theme.size.xs,
  },
  ButtonTextStyle: {
    fontFamily: fonts['poppins-regular'],
    color: theme.colors.white,
    fontSize: theme.size.lg,
    textAlign: 'center',
    fontWeight: '700',
  },
  TextInputStyle: {
    fontFamily: fonts['poppins-regular'],
    fontSize: theme.size.md,
    padding: theme.size.xs * 2,
    backgroundColor: theme.colors.lightBlue,
    borderRadius: theme.size.xs,
    marginVertical: theme.size.md,
    color: theme.colors.black,
  },
});

export default styles;
