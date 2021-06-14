import { NavLink } from 'react-router-dom';
import React from 'react';

import { Button } from '../common/Button';
import { Card } from '../common/Card';

import aboutImage from '../../img/home/home.jpg';
import heroImage from '../../img/home/hero/hero-image.jpg';

import { BLOG_POSTS, H_2_H_STEPS, HERO_PARAGRAPH, HOME_ABOUT_PARAGRAPH } from '../../util/data';

import './home.scss';

const renderHero = () => (
  <div className="hero container">
    <div className="row">
      <div className="hero-intro col-6">
        <h4 className="text-uppercase">Nature's Gold</h4>
        <h1>Choice Grade Pure Honey</h1>
        <p>{ HERO_PARAGRAPH }</p>
      </div>
      <div className="hero-image col-6">
        <img src={ heroImage } alt="hero" />
      </div>
    </div>
    <div className="row pl-2 mt-4">
      <Button label="Learn More" routerLink="/about" />
    </div>
  </div>
);

const renderHiveToHome = () => (
  <div className="hive-to-home text-center">
    <h2 className="pb-4">From Our Hives to Your Home</h2>
    <div className="row justify-content-center">
      { H_2_H_STEPS.map(({ label, sauce }) => (
        <div className="col-2" key={ label }>
          { sauce }
          <div className="pt-4">
            <h3 className="alt">{ label }</h3>
          </div>
        </div>
      )) }
    </div>
  </div>
);

const renderAboutAndBlogPosts = () => (
  <div className="blogs-about container">
    <div className="row">

      {/* ABOUT */ }
      <div className="col-8">
        <img src={ aboutImage } alt="about" className="home-about-image" />
        <h2 className="pt-4 pb-4">About Us</h2>
        <p>{ HOME_ABOUT_PARAGRAPH }</p>
      </div>

      {/* BLOG POSTS */ }
      <div className="col-4">
        <Card>
          <h2 className="pb-3">News</h2>
          { BLOG_POSTS.map(({ title, date, intro }) => (
            <div className="blog-post" key={ title }>
              <h4 className="pb-2 small">{ date.toLocaleDateString() }</h4>
              <h3>{ title }</h3>
              <p className="blog-post-intro pb-3 ">
                { intro }
              </p>
            </div>
          )) }
          <NavLink to="/blogs-news">
            <label className="link mt-5">Read More News</label>
          </NavLink>
        </Card>
      </div>

    </div>
  </div>
);

const renderOurHoneyAccordion = () => (
  <div className="our-honey container">
    <div className="row justify-content-center">
      {/*<div className="col-12">*/ }
      <h2 className="pb-5">Our Honey</h2>
      {/*</div>*/ }
    </div>
    <div className="row">
      <div className="col-12">
        <label>TODO</label>
        {/* ADD CAROUSEL */ }
      </div>
    </div>
  </div>
);

const renderGallery = () => (
  <div className="gallery container text-center">
    <h2 className="pb-3">Gallery</h2>
    {/*<div className="row">*/ }
    {/*  { GALLERY_LEFT_ITEMS.map(({ id, img, flexGrow }) => (*/ }
    {/*    <div className="gallery-image p-3" key={ id } style={ { flexGrow } }>*/ }
    {/*      <img src={ img } alt="an alternative" />*/ }
    {/*    </div>*/ }
    {/*  )) }*/ }
    {/*</div>*/ }
    {/*<div className="row flex-column">*/ }
    {/*  <div className="col-4">*/ }
    {/*    { GALLERY_RIGHT_ITEMS.map(({ id, img, flexGrow }) => (*/ }
    {/*      <div className="gallery-image p-3" key={ id } style={ { flexGrow } }>*/ }
    {/*        <img src={ img } alt="an alternative" />*/ }
    {/*      </div>*/ }
    {/*    )) }*/ }
    {/*  </div>*/ }
    {/*</div>*/ }
  </div>
);

export const Home = () => (
  <div className="home">
    { renderHero() }
    { renderHiveToHome() }
    { renderAboutAndBlogPosts() }
    { renderOurHoneyAccordion() }
    { renderGallery() }
  </div>
);
