import {Button, Image, Text, View} from 'react-native';
import styles from '../Home/styles';
import {useEffect} from 'react';

const SplashScreen: React.FC<any> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 5000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>
        The only password manager you’ll ever need.
      </Text>
    </View>
  );
};

export default SplashScreen;
