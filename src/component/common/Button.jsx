import { string } from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import './button.scss';

const renderWithNavLink = (label, routerLink) => (
  <NavLink to={ routerLink } className="link">
    <div className="button">
      { label }
    </div>
  </NavLink>
);

export const Button = ({ label, routerLink }) => (
  routerLink ? renderWithNavLink(label, routerLink) :
    <div className="button">
      { label }
    </div>
);

Button.propTypes = {
  label: string.isRequired,
  routerLink: string
};

Button.defaultProps = {
  routerLink: undefined
};
