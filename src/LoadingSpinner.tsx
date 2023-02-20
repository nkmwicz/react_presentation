import * as React from 'react';
import './styling.scss';

function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div
        className="spinner-border"
        style={{ width: '5em', height: '5em' }}
        role="status"
      >
        <span className="sr-only"></span>
      </div>
    </div>
  );
}

export default LoadingSpinner;
