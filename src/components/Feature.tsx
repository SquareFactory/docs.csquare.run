import clsx from "clsx";
import styles from "../pages/styles.module.css";
import React from "react";
import useBaseUrl from "@docusaurus/core/lib/client/exports/useBaseUrl";
import Link from "@docusaurus/Link";

interface FeatureProps {
  description: string,
  imageUrl: string,
  path: string,
  title: string,
}

const Feature = ({imageUrl, title, description, path}: FeatureProps) => {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4')}>
      <Link to={path}>
        {imgUrl && (
          <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} alt={title}/>
          </div>
        )}
        <h3 className={styles.featureTitle}>{title}</h3>
      </Link>
      <p>{description}</p>
    </div>
  );
}

export default Feature