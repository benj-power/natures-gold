import React from 'react';
import { NavLink } from 'react-router-dom';

import { ACTIONS } from '../../util/action';

import './header.scss';

const renderActions = () => (
  <div className="header-actions col-6 d-flex justify-content-end">
    { ACTIONS.map(({ name, link }) => (
      <NavLink key={ name }
               to={ link }
               className="header-action"
               activeClassName="header-action-active">
        <label className="alt">
          { name }
        </label>
      </NavLink>
    )) }
  </div>
);

export const Header = () => (
  <header className="header">
    <div className="row p-5">
      <div className="header-logo col-6">
        <h5>Nature's Gold</h5>
      </div>
      { renderActions() }
    </div>
  </header>
);
