import React from 'react';

import { Button } from '../common/Button';

import './four-o-four.scss';

export const FourOFour = () => (
  <div className="four-o-four mb-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="pt-5">
          <h1>404</h1>
        </div>
      </div>
      <div className="row justify-content-center mb-5">
        <p>The page you are looking for has buzzed off</p>
      </div>
      <div className="row justify-content-center">
        <Button label="Back to the Hive" routerLink="/" />
      </div>
    </div>
  </div>
);
