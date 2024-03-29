import TyfButton from '@/elements/tyf-button/tyf-button';
import TyfDatePicker from '@/elements/tyf-date-picker/tyf-date-picker';
import TyfSelect from '@/elements/tyf-select/tyf-select';
import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import useNavigate from '@/hooks/use-navigate';
import {OptionsProps} from '@/models/interfaces/global/options';
import {IRouteParamsFlightCover} from '@/models/interfaces/routes/params';
import {IFlightMarketingCatalogue} from '@/models/interfaces/services/api/flight-status';
import {GetFlightsStatusNumberService} from '@/services/api/flight-status';
import {
  HomeRequestGridStyled,
  HomeRequestStyled,
} from '@/styles/components/layouts/home/home-request';
import React, {FC, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';

const HomeRequesFlightByNumberLayout: FC = () => {
  const {onNavigateScreen, onNavigateOtherStack} = useNavigate();

  const [isReady, setIsReady] = useState<boolean>();
  const [flightCode, setFlightCode] = useState<string>();
  const [flightDate, setFlightDate] = useState<Date>();
  const [options, setOptions] = useState<OptionsProps[]>();
  const [catalogue, setCatalogue] = useState<IFlightMarketingCatalogue[]>();

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsReady(!!options);
  }, [options]);

  const init = () => {
    getFlightsNumberCatalogue();
  };

  const getFlightsNumberCatalogue = async () => {
    const response = await GetFlightsStatusNumberService();
    setCatalogue(response);
    setOptions(formatterOptions(response));
  };

  const formatterOptions = (value: IFlightMarketingCatalogue[]) => {
    return value.map(item => ({
      value: item.marketingFlightCode,
      label: `${item.marketingCarrier} ${item.marketingFlightCode}`,
    }));
  };

  const handdleSelect = (event?: string) => {
    setFlightCode(event);
    const result = catalogue?.find(item => item.marketingFlightCode === event);
    setFlightDate(result ? new Date(result.departureDateTime) : result);
  };

  const navigatetoSelectedFlight = () => {
    const params = getRouteParams();
    onNavigateOtherStack('FlightNavigation', 'FlightRequestScreen', params);
  };

  const getRouteParams = () => {
    const data = catalogue?.find(
      item => item.marketingFlightCode === flightCode
    );
    const flightCarrier = data?.marketingCarrier;

    return {
      flightCode,
      flightDate,
      flightCarrier,
      flightType: 'code',
    } as IRouteParamsFlightCover;
  };

  return (
    <HomeRequestStyled>
      {isReady && options?.length ? (
        <>
          <HomeRequestGridStyled>
            <TyfSelect
              value={flightCode}
              placeholder="Flight number"
              options={options}
              onChange={handdleSelect}
            />
          </HomeRequestGridStyled>
          <HomeRequestGridStyled>
            <TyfDatePicker
              value={flightDate}
              placeholder="Date of departure"
              onChange={setFlightDate}
              disabled
            />
          </HomeRequestGridStyled>
        </>
      ) : null}
      <HomeRequestGridStyled>
        <TyfButton
          text="Search Flight"
          fontVariant="Paragraph"
          styles={{borderRadius: 8, width: '100%'}}
          disabled={!flightCode || !flightDate}
          onClick={navigatetoSelectedFlight}
        />
      </HomeRequestGridStyled>
      <HomeRequestGridStyled>
        <TyfTypography
          text="Can’t find your flight number?"
          variant="Small"
          alignment="center"
        />
        <TouchableOpacity
          onPress={() => onNavigateScreen('HomeDestinationScreen')}>
          <TyfTypography
            text="Try searching by destination"
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

export default HomeRequesFlightByNumberLayout;
