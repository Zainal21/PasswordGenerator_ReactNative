import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import theme from '../../libs/themes';
import fonts from '../../libs/fonts';
import styles from './styles';
import {useState} from 'react';
const HomeScreen: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);

  const generatePassword = (): string => {
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';

    let passwordTemp: string;
    passwordTemp = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      passwordTemp += charset.charAt(randomIndex);
    }

    return passwordTemp;
  };

  const onHandleGeneratePassword = () => {
    const newPassword = generatePassword();
    setPassword(newPassword);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          padding: theme.size.xs * 2,
        }}>
        <Text
          style={{
            fontFamily: fonts['poppins-regular'],
            color: theme.colors.black,
            fontSize: theme.size.lg,
            textAlign: 'center',
            fontWeight: '700',
          }}>
          Generate Your Password
        </Text>
        <View
          style={{
            marginVertical: theme.size.xs * 3,
          }}>
          <TextInput
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            value={password}
            editable={false}
            style={[
              styles.TextInputStyle,
              focused && {
                borderWidth: 3,
                borderColor: theme.colors.blue,
                shadowOffset: {width: 4, height: theme.size.xs},
                shadowColor: theme.colors.blue,
                shadowOpacity: 0.2,
                shadowRadius: theme.size.xs,
              },
            ]}
          />
          <TouchableOpacity
            style={styles.ButtonStyle}
            onPress={onHandleGeneratePassword}>
            <Text style={styles.ButtonTextStyle}>Generate Your Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
