import {useNavigation} from '@react-navigation/native';

const useNavigate = () => {
  const {navigate} = useNavigation();

  const onNavigateScreen = (screen: string, params?: object) => {
    navigate(screen, {params});
  };

  const onNavigateOtherStack = (
    stack: string,
    screen: string,
    params?: object
  ) => {
    navigate(stack, {screen, params});
  };

  return {
    onNavigateOtherStack,
    onNavigateScreen,
  };
};

export default useNavigate;
