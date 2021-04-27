import React from 'react';
import { NavLink } from 'react-router-dom';

import { ACTIONS } from '../../util/data';

import { EMAIL } from '../../util/data';

import { ReactComponent as Bee } from '../../img/footer/bee.svg';
import { ReactComponent as IconFB } from '../../img/footer/icon-fb.svg';
import { ReactComponent as IconIG } from '../../img/footer/icon-ig.svg';

import './footer.scss';

const renderActions = () => (
  <div className="footer-actions col-4">
    { ACTIONS.map(({ name, link, bg }) => (
      <div key={ name }>
        <NavLink
          to={ link }
          className="footer-action"
          activeClassName="footer-action-active">
          <label className="alt">
            { name }
          </label>
        </NavLink>
      </div>
    )) }
  </div>
);

const renderSocial = () => (
  <div className="footer-social col-4 text-center">
    <Bee className="bee" />
    <div className="d-flex justify-content-center">
      <IconFB className="fb" />
      <IconIG className="ig" />
    </div>
  </div>
);

const renderInfo = () => (
  <div className="footer-info col-4 text-right">
    <label className="alt">{ EMAIL }</label>
  </div>
);

export const Footer = () => (
  <footer className="footer">
    <div className="row">
      { renderActions() }
      { renderSocial() }
      { renderInfo() }
    </div>
  </footer>
);
