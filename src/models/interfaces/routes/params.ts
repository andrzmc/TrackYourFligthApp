import {IRouteParamsFlightCoverType} from '@/models/types/routes/params';

export interface IRouteParamsFlightCover {
  flightDate: Date;
  flightCode?: string;
  flightCarrier?: string;
  flightDeparture?: string;
  flightArrival?: string;
  flightType: IRouteParamsFlightCoverType;
}
