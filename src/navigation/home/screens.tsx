import {StackScreen} from '@/models/interfaces/navigation/stack-screen';
import HomeDestinationScreen from '@/screens/home/destination';
import HomeMainScreen from '@/screens/home/main';
import FlightNavigation from '../flight/navigation';

const HomeStackScreens: StackScreen[] = [
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
  {
    component: FlightNavigation,
    name: 'FlightNavigation',
    options: {
      headerShown: false,
    },
  },
];

export default HomeStackScreens;
