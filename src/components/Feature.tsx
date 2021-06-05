import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import styles from '../pages/styles.module.css';

export interface FeatureProps {
  description: string;
  imageUrls: { light: string; dark: string };
  path: string;
  title: string;
}

const Feature = ({ imageUrls, title, description, path }: FeatureProps) => {
  console.log(imageUrls);
  return (
    <div className={clsx('col col--4')}>
      <Link to={path}>
        {imageUrls && (
          <div className="text--center">
            <ThemedImage className={styles.featureImage} sources={imageUrls} alt={title} />
          </div>
        )}
        <h3 className={styles.featureTitle}>{title}</h3>
      </Link>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
