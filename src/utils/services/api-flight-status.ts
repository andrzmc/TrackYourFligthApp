import {IFlightStatusCollection} from '@/models/interfaces/services/api/flight-status';
import {API_FLIGHTS_CATALOGUE} from '@/constants/api/flights-catalogue';
import {ApiDoomyDelayUtil} from './api-doomy';

export default class ApiFlightStatusUtil {
  private flightStatusCollection!: IFlightStatusCollection[];

  constructor() {
    this.init();
  }

  public getFlightsNumbers() {
    const response = this.flightStatusCollection.map(item => ({
      departureDateTime: item.segment.departureDateTime,
      marketingCarrier: item.segment.marketingCarrier,
      marketingFlightCode: item.segment.marketingFlightCode,
    }));

    return ApiDoomyDelayUtil(response);
  }

  private init() {
    this.flightStatusCollection = API_FLIGHTS_CATALOGUE;
  }
}
