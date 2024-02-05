import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FC} from 'react';
import FlightStackScreens from './screens';

const FlightNavigation: FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      {FlightStackScreens.map(item => (
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

export default FlightNavigation;
