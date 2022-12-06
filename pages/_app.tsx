import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../store';
import { Provider } from 'react-redux';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }: AppProps) {

  let persistor = persistStore(store);


  return( <Provider store={store}><Component {...pageProps} /></Provider>)
}

export default MyApp
