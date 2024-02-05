import {useNavigation, useRoute} from '@react-navigation/native';

const useNavigate = () => {
  const {navigate} = useNavigation();
  const {params: parameters} = useRoute();

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

  const getScreenParams = () => {
    return parameters;
  };

  return {
    getScreenParams,
    onNavigateOtherStack,
    onNavigateScreen,
  };
};

export default useNavigate;
