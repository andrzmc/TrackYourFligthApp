import TyfButton from '@/elements/tyf-button/tyf-button';
import TyfDatePicker from '@/elements/tyf-date-picker/tyf-date-picker';
import TyfSelect from '@/elements/tyf-select/tyf-select';
import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import {OptionsProps} from '@/models/interfaces/global/options';
import {IFlightAirportsCatalogue} from '@/models/interfaces/services/api/flight-status';
import {GetFlightsByAirportService} from '@/services/api/flight-status';
import {
  HomeRequestGridStyled,
  HomeRequestStyled,
} from '@/styles/components/layouts/home/home-request';
import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';

const HomeRequesFlightByOriginDestinationLayout: FC = () => {
  const {navigate} = useNavigation();

  const [isReady, setIsReady] = useState<boolean>();
  const [flightDeparture, setFlightDeparture] = useState<string>();
  const [flightArrival, setFlightArrival] = useState<string>();

  const [flightDate, setFlightDate] = useState<Date>();
  const [optionsDeparture, setOptionsDeparture] = useState<OptionsProps[]>([]);
  const [optionsArrival, setOptionsArrival] = useState<OptionsProps[]>([]);

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsReady(!!optionsDeparture);
  }, [optionsDeparture]);

  const init = () => {
    getFlightsNumberCatalogue();
  };

  const getFlightsNumberCatalogue = async () => {
    const response = await GetFlightsByAirportService();
    setOptionsDeparture(formatterOptionsAirports(response));
  };

  const handdleSelectDeparture = async (event?: string) => {
    setFlightDeparture(event);

    if (!event) {
      setFlightArrival(undefined);
      return;
    }

    const response = await GetFlightsByAirportService(event);
    setOptionsArrival(formatterOptionsAirports(response));
  };

  const handdleSelectArrival = async (event?: string) => {
    setFlightArrival(event);
  };

  const formatterOptionsAirports = (value: IFlightAirportsCatalogue[]) => {
    return value.map(item => ({
      value: item.airport,
      label: `${item.location} ${item.airport}`,
    }));
  };

  const navigatetoSelectedFlight = () => {
    console.log({flightDeparture, flightArrival, flightDate});
  };

  return (
    <HomeRequestStyled>
      {isReady ? (
        <>
          <HomeRequestGridStyled>
            <TyfSelect
              value={flightDeparture}
              placeholder="Origin"
              options={optionsDeparture}
              onChange={handdleSelectDeparture}
            />
          </HomeRequestGridStyled>
          <HomeRequestGridStyled>
            <TyfSelect
              value={flightArrival}
              placeholder="Destination"
              options={optionsArrival}
              onChange={handdleSelectArrival}
              disabled={!flightDeparture}
            />
          </HomeRequestGridStyled>
        </>
      ) : null}
      <HomeRequestGridStyled style={{width: '100%'}}>
        <TyfDatePicker
          value={flightDate}
          placeholder="Date of departure"
          onChange={setFlightDate}
        />
      </HomeRequestGridStyled>
      <HomeRequestGridStyled>
        <TyfButton
          text="Search Flight"
          fontVariant="Paragraph"
          styles={{borderRadius: 8, width: '100%'}}
          disabled={!flightDeparture || !flightArrival || !flightDate}
          onClick={navigatetoSelectedFlight}
        />
      </HomeRequestGridStyled>
      <HomeRequestGridStyled>
        <TyfTypography
          text="Looking for a specific flight?"
          variant="Small"
          alignment="center"
        />
        <TouchableOpacity onPress={() => navigate('HomeMainScreen' as never)}>
          <TyfTypography
            text="Try searching by flight number"
            variant="Small"
            fontWeight="Medium"
            alignment="center"
            decoration="underline"
          />
        </TouchableOpacity>
      </HomeRequestGridStyled>
    </HomeRequestStyled>
  );
};

export default HomeRequesFlightByOriginDestinationLayout;
