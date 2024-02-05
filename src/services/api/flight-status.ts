import {
  IFlightAirportsCatalogue,
  IFlightMarketingCatalogue,
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
