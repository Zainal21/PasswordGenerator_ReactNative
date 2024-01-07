import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import theme from '../../libs/themes';
import fonts from '../../libs/fonts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigation';
import styles from './style';

type SplashScreenProp = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const SplashScreen: React.FC<SplashScreenProp> = ({navigation: {navigate}}) => {
  // get height from deminstion
  const {height} = Dimensions.get('window');

  return (
    <SafeAreaView>
      <ImageBackground
        style={{
          height: height / 2.5,
        }}
        resizeMode="contain"
        source={require('../../assets/images/password_secure_img.png')}
      />
      <View style={styles.ContainerStyle}>
        <Text style={styles.TextHeadingStyle}>
          Instant Secure Your Passwords
        </Text>
        <Text style={styles.TextDescriptionStyle}>
          Effortlessly create strong and secure passwords with our user-friendly
          Password Generator application
        </Text>
        {/* button cta */}
        <View style={styles.callToACtionContainerStyle}>
          <TouchableOpacity
            onPress={() => navigate('Home')}
            style={styles.ButtonCallToActionStyle}>
            <Text style={styles.CallToActionTextStyle}>Let's Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
