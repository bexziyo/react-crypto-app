import AppLoyaut from './components/layout/AppLoyaut'
import {CryptoContextProvider} from './components/context/crypto-context'

export default function App() {
  return (
    <CryptoContextProvider>
     <AppLoyaut/>
    </CryptoContextProvider>
  );
}
