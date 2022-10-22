import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import Head from '@docusaurus/Head';
import iframeResizer from 'https://cdn.jsdelivr.net/npm/iframe-resizer@4.3.2/js/iframeResizer.min.js'

function extendFrame() {
    iFrameResize({ log: false }, '#moduleframe');
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('module');

  var finalUrl = "http://localhost:5000/modules/"
  if (myParam != null) {
    finalUrl = finalUrl + "/" + myParam
  }

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A modern Guild Wars 2 overlay with powerful module support.">
        <Head>
          <meta name="keywords" content="Guild Wars 2, gw2, Blish, HUD, bhud, TacO, Overlay" />
        </Head>
      
      <iframe id="moduleframe" src={finalUrl} scrolling="no" style={{width: "100%"}} onLoad={ extendFrame } />
    </Layout>
  );
}

export default Home;