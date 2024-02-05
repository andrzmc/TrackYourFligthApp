import {useNavigation, useRoute} from '@react-navigation/native';

const useNavigate = () => {
  const {navigate, setParams} = useNavigation();
  const {params: parameters} = useRoute();

  const getScreenParams = () => {
    return parameters;
  };

  const onNavigateScreen = (screen: string, params?: unknown) => {
    navigate(screen, {params});
  };

  const onNavigateOtherStack = (
    stack: string,
    screen: string,
    params?: unknown
  ) => {
    navigate(stack, {screen, params});
  };

  const onUpdateParams = (params?: unknown) => {
    setParams(params as undefined);
  };

  return {
    getScreenParams,
    onNavigateOtherStack,
    onNavigateScreen,
    onUpdateParams,
  };
};

export default useNavigate;
