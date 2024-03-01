import React from "react";
import styles from "./loadingIndicator.module.scss";

export function LoadingIndicator() {
  return (
    <div className={styles.container} data-cy="loading-indicator">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.loadingIndicator}
        src="/icons/loading-circle.svg"
        alt="loading indicator"
      />
    </div>
  );
}
