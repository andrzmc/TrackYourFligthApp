import {StyleProp, ViewStyle} from 'react-native';
import {IFlightStatusCollection} from '../../services/api/flight-status';

export interface FlightTimeTravelProps {
  flight: IFlightStatusCollection;
  styles: StyleProp<ViewStyle>;
}
