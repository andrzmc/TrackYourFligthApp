import {IRouteParamsFlightCover} from '../../routes/params';
import {IFlightStatusCollection} from '../../services/api/flight-status';

export interface FlightRequestCoverProps {
  routeParams: IRouteParamsFlightCover;
  flights: IFlightStatusCollection[];
}
