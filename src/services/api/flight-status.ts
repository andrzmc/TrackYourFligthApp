import {IFlightMarketingCatalogue} from '@/models/interfaces/services/api/flight-status';
import ApiFlightStatusUtil from '@/utils/services/api-flight-status';

export const GetFlightsStatusNumberService = () => {
  return new ApiFlightStatusUtil().getFlightsNumbers() as Promise<
    IFlightMarketingCatalogue[]
  >;
};
