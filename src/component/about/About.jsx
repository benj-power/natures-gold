import React from 'react';

import { ABOUT_PARA_1, ABOUT_PARA_2 } from '../../util/data';

import heroImg from '../../img/home/honeys.jpg';

import './about.scss';

const Block = ({ title, content }) => (
  <div className="block container mt-5 mb-5 ">
    <div className="row text-center pb-4">
      <h2 className="container">{ title }</h2>
    </div>
    <div className="row">
      { content }
    </div>
  </div>
);

export const About = () => (
  <div className="about">
    <div className="image d-flex justify-content-center">
      <img alt="a group of honeys" src={ heroImg } />
    </div>
    <Block title="About Us" content={ <p>{ ABOUT_PARA_1 }</p> } />
    <Block title="Our Mission" content={ <p>{ ABOUT_PARA_2 }</p> } />
  </div>
);
