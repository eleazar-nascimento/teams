import { ThemeProvider } from 'styled-components';
import { Groups } from './src/screens/Groups';
import theme from '@theme/index';

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <Groups />
    </ThemeProvider>
  );
}