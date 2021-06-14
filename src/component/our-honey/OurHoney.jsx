import React from 'react';

import { Card } from '../common/Card';

import { OUR_HONEY_IMGS, OUR_HONEY_PARA, OUR_HONEY_PARA_2, TYPES_OF_HONEY } from '../../util/data';

import './our-honey.scss';

export const OurHoney = () => (
  <div className="our-honey container-fluid mt-5 mb-5">
    { <Gallery /> }
    { <TypesOfHoney /> }
  </div>
);

const Gallery = () => (
  <div className="gallery">
    <div className="row justify-content-center">
      <h2>Our Honey</h2>
    </div>
    <div className="row justify-content-center mt-4 mb-4">
      <div className="col-3">
        <p>{ OUR_HONEY_PARA }</p>
      </div>
    </div>
    <div className="row flex-wrap justify-content-center">
      { OUR_HONEY_IMGS.map(({ id, sauce, alternative }) => (
        <Card classes="col-3 m-4">
          <img key={ id }
               src={ sauce }
               alt={ alternative }
               width="100%"
               height="100%" />
        </Card>
      )) }
    </div>
  </div>
);

const TypesOfHoney = () => (
  <div className="types-of-honey container-fluid mt-5">
    <div className="row justify-content-center">
      <h2>Types of Honey</h2>
    </div>
    <div className="row justify-content-center mt-4 mb-5">
      <div className="col-3">
        <p>{ OUR_HONEY_PARA_2 }</p>
      </div>
    </div>
    <div className="row justify-content-center">
      { TYPES_OF_HONEY.map(({ id, sauce, title, description }) => (
        <Card classes="col-5 p-3 m-5">
          <div className="row align-items-center h-100" key={ id }>
            <div className="col-3">
              { sauce }
            </div>
            <div className="col-9">
              <h3>{ title }</h3>
              <p>{ description }</p>
            </div>
          </div>
        </Card>
      )) }
    </div>
  </div>
);
