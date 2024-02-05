import {StackScreen} from '@/models/interfaces/navigation/stack-screen';
import FlightDetailScreen from '@/screens/flight/details';
import FlightRequestScreen from '@/screens/flight/request';

const FlightStackScreens: StackScreen[] = [
  {
    component: FlightRequestScreen,
    name: 'FlightRequestScreen',
    options: {
      headerShown: false,
    },
  },
  {
    component: FlightDetailScreen,
    name: 'FlightDetailScreen',
    options: {
      headerShown: false,
    },
  },
];

export default FlightStackScreens;
