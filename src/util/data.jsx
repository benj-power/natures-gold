import React from 'react';

import { ReactComponent as Lavender } from '../img/home/honey-to-home/lavender.svg';
import { ReactComponent as HoneyJar } from '../img/home/honey-to-home/honey-jar.svg';
import { ReactComponent as Bee } from '../img/home/honey-to-home/bee.svg';
import { ReactComponent as CreamedHoney } from '../img/our-honey/creamed-honey.svg';
import { ReactComponent as ForestHoney } from '../img/our-honey/forest-honey.svg';
import { ReactComponent as JarHoney } from '../img/our-honey/jar-honey.svg';
import { ReactComponent as MeadowHoney } from '../img/our-honey/meadow-honey.svg';

import pHolder from '../img/other/placeholder.png';

/*** ABOUT ***/
export const ABOUT_PARA_1 = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet';
export const ABOUT_PARA_2 = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet';

/*** HEADER/FOOTER ***/
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
  link: '/honey',
  bg: 'our-honey'
}, {
  name: 'Blog And News',
  link: '/blogs-news',
  bg: 'blog-home'
}];
export const CREDITS = "Designed by Tayla the Creator";

/*** HOME ***/
export const HERO_PARAGRAPH = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing';
export const EMAIL = 'info@naturesgold.co.za';
export const HOME_ABOUT_PARAGRAPH = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit';
export const H_2_H_STEPS = [
  { label: '100% Natural', sauce: <Lavender /> },
  { label: 'Sustainably Farmed', sauce: <HoneyJar /> },
  { label: 'Family Made', sauce: <Bee /> }
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
//
// export const GALLERY_LEFT_ITEMS = [
//   {
//     id: 1,
//     sauce: leftOne,
//     flexGrow: 2,
//   },
//   {
//     id: 2,
//     sauce: leftOne,
//     flexGrow: 1,
//   },
//   {
//     id: 3,
//     sauce: leftOne,
//     flexGrow: 1,
//   },
//   {
//     id: 4,
//     sauce: leftOne,
//     flexGrow: 1,
//   },
//   {
//     id: 5,
//     sauce: leftOne,
//     flexGrow: 1,
//   }
// ];
//
// export const GALLERY_RIGHT_ITEMS = [
//   {
//     id: 1,
//     sauce: leftOne,
//     flexGrow: 1,
//   },
//   {
//     id: 2,
//     sauce: leftOne,
//     flexGrow: 2,
//   }
// ];

/*** OUR HONEY ***/
export const OUR_HONEY_IMGS = [
  {
    id: 1,
    sauce: pHolder,
    alternative: 'an alternative message'
  },
  {
    id: 2,
    sauce: pHolder,
    alternative: 'an alternative message'
  },
  {
    id: 3,
    sauce: pHolder,
    alternative: 'an alternative message'
  },
  {
    id: 4,
    sauce: pHolder,
    alternative: 'an alternative message'
  },
  {
    id: 5,
    sauce: pHolder,
    alternative: 'an alternative message'
  },
  {
    id: 6,
    sauce: pHolder,
    alternative: 'an alternative message'
  },
];
export const OUR_HONEY_PARA = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod';
export const OUR_HONEY_PARA_2 = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod';
export const TYPES_OF_HONEY = [
  {
    id: 1,
    title: 'Forest Honey',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…',
    sauce: <ForestHoney />
  },
  {
    id: 2,
    title: 'Jar Honey',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…',
    sauce: <JarHoney />
  },
  {
    id: 3,
    title: 'Meadow Honey',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…',
    sauce: <MeadowHoney />
  },
  {
    id: 4,
    title: 'Liquid Honey',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…',
    sauce: <CreamedHoney />
  },
];
