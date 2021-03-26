import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import NextNprogress from 'nextjs-progressbar';
import withData from '../lib/withData';

interface MyProps extends AppProps {
  apollo: any;
}

function MyApp({ Component, pageProps, apollo }: MyProps) {
  return (
    <ApolloProvider client={apollo}>
      <NextNprogress
        color="#ff0000"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        options={{
          showSpinner: false,
        }}
      />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default withData(MyApp);
