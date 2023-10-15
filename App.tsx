import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Groups } from './src/screens/Groups';
import theme from '@theme/index';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded, ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  // if(fontsLoaded) {

  // }

  return (
    <ThemeProvider theme={theme} >
      { 
        !fontsLoaded ?
        <Groups /> : <Loading />
      }
    </ThemeProvider>
  );
}
