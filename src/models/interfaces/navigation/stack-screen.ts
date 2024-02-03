import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {FC} from 'react';

export interface StackScreen {
  name: string;
  component: FC | React.ReactNode;
  options?: NativeStackNavigationOptions;
}
