import {StackScreen} from '@/models/interfaces/navigation/stack-screen';
import FlightDetailScreen from '@/screens/flight/details';
import FlightRequestScreen from '@/screens/flight/request';
import HomeDestinationScreen from '@/screens/home/destination';
import HomeMainScreen from '@/screens/home/main';

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
    component: HomeMainScreen,
    name: 'HomeMainScreen',
    options: {
      headerShown: false,
    },
  },
  {
    component: HomeDestinationScreen,
    name: 'HomeDestinationScreen',
    options: {
      headerShown: false,
    },
  },
];

export default FlightStackScreens;
