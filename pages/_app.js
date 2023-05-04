import Script from 'next/script';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { wrapper, store } from '../config/redux/store';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (<Provider store={store}>
    <Head>
      <title>Hirejob</title>
      <link rel="shortcut icon" href="/svg/logo.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
    <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossOrigin="anonymous"
    />
  </Provider>
  );
}

export default wrapper.withRedux(MyApp);