import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FunctionComponent, ReactNode } from 'react';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import styles from '../pages/styles.module.css';

export interface FeatureProps {
  description: ReactNode;
  imageUrls: { light: string; dark: string };
  path: string;
  title: string;
}

const Feature: FunctionComponent<FeatureProps> = ({ imageUrls, title, description, path }: FeatureProps) => {
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

Feature.propTypes = {
  description: PropTypes.oneOf([PropTypes.string.isRequired, PropTypes.element.isRequired]).isRequired,
  imageUrls: PropTypes.exact({
    light: PropTypes.string.isRequired,
    dark: PropTypes.string.isRequired,
  }).isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Feature;
