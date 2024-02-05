import {
  IAccuracyType,
  IArrivalAirportType,
  IDepartureAirportType,
  IFlightGateType,
  IFlightLegType,
  IFlightStatusType,
  ISourceType,
  ITingCarrierType,
} from '@/models/types/services/api/flight-status';

export interface IFlightStatusCollection {
  status: IFlightStatusType;
  boardingTerminal: string;
  boardingGate: IFlightGateType;
  boardingTime: string;
  estimatedDepartureTime: Date | string;
  estimatedArrivalTime: Date | string;
  delayInMinutes: number;
  arrivalTerminal: string;
  arrivalGate: IFlightGateType;
  segment: IFlightSegment;
  outGate: IFlightOutGate;
  legType: IFlightLegType;
  totalFlightTimeInMinutes: number;
}

export interface IFlightOutGate {
  accuracy: IAccuracyType;
  dateTimeUtc: string;
  dateTimeLocal: string;
  sourceType: ISourceType;
}

export interface IFlightSegment extends IFlightMarketingCatalogue {
  segmentCode: string;
  arrivalAirport: IArrivalAirportType;
  arrivalDateTime: Date | string;
  flightStatus: IFlightStatusType;
  operatingCarrier: ITingCarrierType;
  operatingFlightCode: string;
  flightDurationInMinutes: number;
  aircraftType: string;
  stops: object[];
  departureAirport: IDepartureAirportType;
}

export interface IFlightMarketingCatalogue {
  marketingFlightCode: string;
  marketingCarrier: ITingCarrierType;
  departureDateTime: Date | string;
}
