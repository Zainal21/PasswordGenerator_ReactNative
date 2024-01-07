import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Place: {placeId: number};
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
