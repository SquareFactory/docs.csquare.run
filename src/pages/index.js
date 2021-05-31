import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Feature from "../components/Feature";

const features = [
    {
        title: 'Models',
        imageUrl: 'https://cdn.csquare.run/docs/img/ico-models-light.svg',
        description: (
            <>
                Your AI models, predictive machines, analysis pipelines, etc. Train your models, and constantly monitor
                loss, accuracy, resources. Download experiment logs and checkpoints.
            </>
        ),
        path: 'docs/models/introduction'
    },
    {
        title: 'Datasets',
        imageUrl: 'https://cdn.csquare.run/docs/img/ico-datasets-light.svg',
        description: (
            <>
                Datasets are used to train models. Create a dataset using HTTP upload or Amazon S3.
            </>
        ),
        path: 'docs/datasets/introduction'
    },
    {
        title: 'Labs',
        imageUrl: 'https://cdn.csquare.run/docs/img/ico-labs-light.svg',
        description: (
            <>
                Test a model before you train it and allocate the resources you need for training (CPUs, GPUs, memory).
            </>
        ),
        path: 'docs/labs/introduction'
    },
];

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
      <Layout
          title={`Hello from ${siteConfig.title}`}
          description="Description will go into a meta tag in <head />">
          <header className={clsx('hero hero--primary', styles.heroBanner)}>
              <div className={clsx("container", styles.container)}>
                  <h1 className={clsx('hero__title', styles.title)}>{siteConfig.title}</h1>
                  <div style={{width: 'max-content'}}>
                  <p className={clsx("hero__subtitle", styles.subtitle)}>{siteConfig.tagline}</p>
                  <Link
                      className={clsx('button button--primary button--lg', styles.button)}
                      to={useBaseUrl('docs/')}>
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
}
