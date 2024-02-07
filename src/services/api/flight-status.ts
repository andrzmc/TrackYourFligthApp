import {
  IFlightAirportsCatalogue,
  IFlightMarketingCatalogue,
  IFlightStatusCollection,
} from '@/models/interfaces/services/api/flight-status';
import ApiFlightStatusUtil from '@/utils/services/api-flight-status';

export const GetFlightsStatusNumberService = () => {
  return new ApiFlightStatusUtil().getFlightsNumbers() as Promise<
    IFlightMarketingCatalogue[]
  >;
};

export const GetFlightsByAirportService = (value?: string) => {
  return new ApiFlightStatusUtil().getFlightsAirports(value) as Promise<
    IFlightAirportsCatalogue[]
  >;
};

export const GetFlightsByCodeService = (value: string) => {
  return new ApiFlightStatusUtil().getFlightsByCode(value) as Promise<
    IFlightStatusCollection[]
  >;
};

export const GetFlightsByTravelService = (
  departure: string,
  arrival: string,
  date: Date
) => {
  return new ApiFlightStatusUtil().getFlightsByTravel(
    departure,
    arrival,
    date
  ) as Promise<IFlightStatusCollection[]>;
};
