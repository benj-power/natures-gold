import React from 'react';

import { ReactComponent as Lavender } from '../img/home/honey-to-home/lavender.svg';
import { ReactComponent as HoneyJar } from '../img/home/honey-to-home/honey-jar.svg';
import { ReactComponent as Bee } from '../img/home/honey-to-home/bee.svg';
import leftOne from '../img/home/ello.jpg';

export const ACTIONS = [{
  name: 'Home',
  link: '/',
  bg: 'home',
}, {
  name: 'About Us',
  link: '/about',
  about: 'about'
}, {
  name: 'Our Honey',
  link: '/product',
  bg: 'our-honey'
}, {
  name: 'Blog And News',
  link: '/blogs-news',
  bg: 'blog-home'
}];

export const HERO_PARAGRAPH = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing';
export const EMAIL = 'info@naturesgold.co.za';
export const HOME_ABOUT_PARAGRAPH = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit';

export const H_2_H_STEPS = [
  { label: '100% Natural', img: <Lavender /> },
  { label: 'Sustainably Farmed', img: <HoneyJar /> },
  { label: 'Family Made', img: <Bee /> }
];

export const BLOG_POSTS = [
  {
    date: new Date(2021, 2, 21),
    title: 'Queen Spotting: How to find your queen bee',
    intro: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonum, Lorem ipsum dolor' +
      ' sit amet, consetetur sadipscing elitr, sed diam nonum, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonum'
  },
  {
    date: new Date(2021, 1, 17),
    title: 'KZN honey widow goes toe-to-toe with retail giant',
    intro: 'Debbie Power and her team of five are purveyors of the “finest” totally nature, Debbie Power and her team of five are purveyors of the “finest” totally nature,'
  },
  {
    date: new Date(2021, 0, 1),
    title: 'The smoking gun: how to humanely smoke your bees',
    intro: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonum, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonum'
  },
];

export const GALLERY_LEFT_ITEMS = [
  {
    id: 1,
    img: leftOne,
    flexGrow: 2,
  },
  {
    id: 2,
    img: leftOne,
    flexGrow: 1,
  },
  {
    id: 3,
    img: leftOne,
    flexGrow: 1,
  },
  {
    id: 4,
    img: leftOne,
    flexGrow: 1,
  },
  {
    id: 5,
    img: leftOne,
    flexGrow: 1,
  }
];

export const GALLERY_RIGHT_ITEMS = [
  {
    id: 1,
    img: leftOne,
    flexGrow: 1,
  },
  {
    id: 2,
    img: leftOne,
    flexGrow: 2,
  }
];
