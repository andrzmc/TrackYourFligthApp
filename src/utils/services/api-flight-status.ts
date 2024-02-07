import {IFlightStatusCollection} from '@/models/interfaces/services/api/flight-status';
import {API_FLIGHTS_CATALOGUE} from '@/constants/api/flights-catalogue';
import {ApiDoomyDelayUtil} from './api-doomy';
import {IAirportsLocation} from '@/models/enums/api/flight-status';
import {filter} from 'smart-array-filter';
import moment from 'moment';

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

  public getFlightsByCode(value: string) {
    const response = filter(this.flightStatusCollection, {keywords: value});
    return ApiDoomyDelayUtil(response);
  }

  public getFlightsByTravel(departure: string, arrival: string, date: Date) {
    const results = filter(this.flightStatusCollection, {
      keywords: [
        `departureAirport: "${departure}"`,
        `arrivalAirport: "${arrival}"`,
      ],
      predicate: 'AND',
    });

    const response = results.filter(
      item =>
        moment(new Date(item.segment.arrivalDateTime)).format('YYYY-MM-DD') ===
        moment(date).format('YYYY-MM-DD')
    );

    return ApiDoomyDelayUtil(response);
  }

  public getFlightsAirports(value?: string) {
    let airports = [
      ...this.flightStatusCollection.map(item => item.segment.departureAirport),
      ...this.flightStatusCollection.map(item => item.segment.arrivalAirport),
    ];

    airports = [...new Set(airports)];

    if (value) {
      airports = airports.filter(item => item !== value);
    }

    const response = airports.map(item => ({
      airport: item,
      location: IAirportsLocation[item],
    }));

    return ApiDoomyDelayUtil(response);
  }

  private init() {
    this.flightStatusCollection = API_FLIGHTS_CATALOGUE;
  }
}
