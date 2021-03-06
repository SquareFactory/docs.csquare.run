import clsx from 'clsx';
import React, { VFC } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Feature from '../components/Feature';
import styles from './styles.module.css';

const features = [
  {
    title: 'Models',
    imageUrls: {
      light: 'https://cdn.csquare.run/docs/img/ico-models-light.svg',
      dark: 'https://cdn.csquare.run/docs/img/ico-models-dark.svg',
    },
    description: (
      <>
        Your AI models, predictive machines, analysis pipelines, etc. Train your models, and download experiment
        checkpoints.
      </>
    ),
    path: 'docs/models/introduction',
  },
  {
    title: 'Datasets',
    imageUrls: {
      light: 'https://cdn.csquare.run/docs/img/ico-datasets-light.svg',
      dark: 'https://cdn.csquare.run/docs/img/ico-datasets-dark.svg',
    },
    description: <>Datasets are used to train models. Upload dataset files using S3 command line interface.</>,
    path: 'docs/datasets/introduction',
  },
  {
    title: 'Organizations',
    imageUrls: {
      light: 'https://cdn.csquare.run/docs/img/ico-organization-light.svg',
      dark: 'https://cdn.csquare.run/docs/img/ico-organization-dark.svg',
    },
    description: <>Work as a team, invite your collaborators, and manage access permissions.</>,
    path: 'docs/organizations/introduction',
  },
];

const Home: VFC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={clsx('container', styles.container)}>
          <h1 className={clsx('hero__title', styles.title)}>{siteConfig.title}</h1>
          <div style={{ width: 'max-content' }}>
            <p className={clsx('hero__subtitle', styles.subtitle)}>{siteConfig.tagline}</p>
            <Link className={clsx('button button--primary button--lg', styles.button)} to={useBaseUrl('docs/')}>
              Get Started
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
};

export default Home;
