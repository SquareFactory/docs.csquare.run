import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: 'Models',
        imageUrl: 'medias/img/ico-models-light.svg',
        description: (
            <>
                Your AI models, predictive machines, analysis pipeline, etc. Train your model and constantly monitor
                Loss,
                Accuracy, resources, download experiment logs and checkpoints.
            </>
        ),
    },
    {
        title: 'Datasets',
        imageUrl: 'medias/img/ico-datasets-light.svg',
        description: (
            <>
                Datasets are used for training the model. Create a dataset using HTTP upload or Amazon S3.
            </>
        ),
    },
    {
        title: 'Labs',
        imageUrl: 'medias/img/ico-labs-light.svg',
        description: (
            <>
                Test a model before you train it and allocate the resources you need for training (CPUs, GPUs, memory).
            </>
        ),
    },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4')}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

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
