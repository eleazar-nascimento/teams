import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Groups } from './src/screens/Groups';
import theme from '@theme/index';
import { Loading } from '@components/Loading';
import { StatusBar } from 'expo-status-bar';
import { NewGroup } from '@screens/NewGroup';
import { Players } from '@screens/Players';

export default function App() {
  const [fontsLoaded, ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      {/* { fontsLoaded ? <Groups /> : <Loading /> } */}
      {/* { fontsLoaded ? <NewGroup /> : <Loading /> } */}
      { fontsLoaded ? <Players /> : <Loading /> }
    </ThemeProvider>
  );
}
