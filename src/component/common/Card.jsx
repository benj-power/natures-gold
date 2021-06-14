import { string } from 'prop-types';
import React from 'react';

import './card.scss';

export const Card = ({ children, classes }) => (
  <div className={ `ng-card ${ classes }` }>
    { children }
  </div>
);

Card.defaultProps = {
  classes: ''
};

Card.propTypes = {
  classes: string
};
