import React from 'react';
import Head from 'next/head';

interface Props {
  pageTitle?: string;
}

const Meta: React.FC<Props> = ({ pageTitle = `Sick-Fits` }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.png" />
    <title>{pageTitle}</title>
    {/* <link
      href="/css/bootstrap-dark.min.css"
      id="bootstrap-dark-style"
      rel="stylesheet"
      type="text/css"
    /> */}
  </Head>
);

export default Meta;
