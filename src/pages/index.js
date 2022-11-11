import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import Head from '@docusaurus/Head';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ModuleCard from './module/moduleCard';

const moduleShowcase = [
  {
    title: <>Marker and Trails Support</>,
    imageUrl: 'img/1615829.png',
    description: (
      <>
        The Pathing module supports displaying TacO format .zip and .taco markers in-game.
      </>
    ),
  },
  {
    title: <>Waypoint and Landmark Lookup</>,
    imageUrl: 'img/563468.png',
    description: (
      <>
        Search for Vistas, Waypoints, Dungeons, and more and quickly copy the chat codes to your clipboard.
      </>
    ),
  },
  {
    title: <>KillProof Integration</>,
    imageUrl: 'img/1128503.png',
    description: (
      <>
        A community made module which integrates with <a href="https://killproof.me/" target="_blank">Killproof.me</a> in-game.
      </>
    ),
  }
];

const features = [
  {
    title: <>Focus on Features</>,
    imageUrl: 'img/1769866.png',
    description: (
      <>
        We've got the boring overlay stuff like input handling, settings management, API access delegation, and more handled behind the scenes so you can focus on pushing features.
      </>
    ),
  },
  {
    title: <>Fit Right In</>,
    imageUrl: 'img/156015.png',
    description: (
      <>
        Avoid breaking the immersion.  We've replicated a number of Guild Wars 2's beautiful UI controls and elements within our custom UI framework so that you don't have to.
      </>
    ),
  },
  {
    title: <>Experience Powerful Tools</>,
    imageUrl: 'img/1769855.png',
    description: (
      <>
        Get started quickly with the module template for Visual Studio.  Enjoy first-class debugger support when testing modules in Blish HUD.  Use the Debug module for additional insight at runtime.
      </>
    ),
  },
  {
    title: <>Publish Your Module</>,
    imageUrl: 'img/1948124.png',
    description: (
      <>
        Release your modules through our central repository, making them available to anyone using Blish HUD.  Manage and build your modules automatically through our custom build host.
      </>
    ),
  },
  {
    title: <>Enjoy Comprehensive APIs</>,
    imageUrl: 'img/1228276.png',
    description: (
      <>
        With access to both the GW2 Web API and MumbleLink backed by the powerful <a href="https://github.com/Archomeda/Gw2Sharp" target="_blank">Gw2Sharp</a> .NET library, our own contextualized data, and a pipe of combat data straight from ArcDPS, you'll have everything you need.
      </>
    ),
  },
  {
    title: <>Collaborate on Discord</>,
    imageUrl: 'img/1769865.png',
    description: (
      <>
        Join our <a target="_blank" href="https://discord.gg/HzAV82d">Discord channel</a> (more than 5,200 users!), contribute to Blish HUD development, get help in developing your modules, and showcase your work to other Blish HUD users.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  const items = [
    // TODO: Put module tiles here.
  ]

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A modern Guild Wars 2 overlay with powerful module support.">
        <Head>
          <meta name="keywords" content="Guild Wars 2, gw2, Blish, HUD, bhud, TacO, Overlay" />
        </Head>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg link--download',
                styles.getStarted,
              )}
              to='https://github.com/blish-hud/Blish-HUD/releases/download/v0.11.7/Blish.HUD.0.11.7.zip'>
                Download v0.11.90000
            </Link>&nbsp;
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/user/getting-started')}>
              Get Started
            </Link>&nbsp;
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('/docs/user/troubleshooting')}>
              Troubleshooting
            </Link>
          </div>
          <br />
          <iframe width="640" height="360" src="https://www.youtube.com/embed/iLYYumF2SCY" frameBorder="0" allow="fullscreen; autoplay; encrypted-media; picture-in-picture" allowFullscreen></iframe>
        </div>
      </header>
      <main>
        {moduleShowcase && moduleShowcase.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {moduleShowcase.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className={styles.buttons}>
          <Link
              className={clsx(
                'button button--outline button--secondary button--lg link--download',
                styles.getStarted,
              )}
              to='/modules/'>
                and 40+ more...
            </Link>
        </div>
        <div className="container" style={{ display:"none" }}>
          <div className="module-content">
            <div className="module-cards" style={{ display:"default", gridTemplateColumns:"default" }}>
              <AliceCarousel items={items} responsive={{ 0: { items: 2 }}} />
            </div>
          </div>
        </div>
        <img src="/img/events-hero-half.png" className="ui-hero" />
      </main>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <p className="hero__subtitle">For Developers</p>
          <h1 className="hero__title">{siteConfig.title} Module API</h1>
          <p className="hero__subtitle">Compiled .NET modules to add your own features.</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/dev')}>
              Read the Docs
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
