import React, {FC} from 'react';
import HomeStackScreens from './screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeNavigation: FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="HomeMainScreen">
      {HomeStackScreens.map(item => (
        <Stack.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={item.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default HomeNavigation;
