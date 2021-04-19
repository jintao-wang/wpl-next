import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const CommonHeader = ({ title, children }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="preload" href="/redirect.js" as="script" />
    <script src="/redirect.js" />
    <title>{title}</title>
    {
        children
      }
  </Head>
);

CommonHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node || null,
};

CommonHeader.defaultProps = {
  title: '',
  children: null,
};

export default CommonHeader;
