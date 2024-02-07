import {StackScreen} from '@/models/interfaces/navigation/stack-screen';
import FlightDetailScreen from '@/screens/flight/details';
import FlightRequestScreen from '@/screens/flight/request';
import HomeNavigation from '../home/navigation';

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
  {
    component: HomeNavigation,
    name: 'HomeNavigation',
    options: {
      headerShown: false,
    },
  },
];

export default FlightStackScreens;
