import {StyleSheet} from 'react-native';
import theme from '../../libs/themes';
import fonts from '../../libs/fonts';

const styles = StyleSheet.create({
  ContainerStyle: {
    paddingHorizontal: theme.size.xs * 4,
    paddingTop: theme.size.xs * 2,
  },
  TextHeadingStyle: {
    fontSize: theme.size.xxl,
    marginTop: theme.size.md * 2,
    textAlign: 'center',
    fontFamily: fonts['poppins-bold'],
    color: theme.colors.blue,
    fontWeight: 'bold',
  },
  TextDescriptionStyle: {
    fontSize: theme.size.md,
    color: theme.colors.black,
    fontFamily: fonts['poppins-regular'],
    textAlign: 'center',
    marginTop: 10 * 2,
  },
  callToACtionContainerStyle: {
    paddingHorizontal: 10,
    paddingTop: 10 * 6,
    flexDirection: 'row',
  },
  ButtonCallToActionStyle: {
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
  CallToActionTextStyle: {
    fontFamily: fonts['poppins-regular'],
    color: theme.colors.white,
    fontSize: theme.size.lg,
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default styles;
