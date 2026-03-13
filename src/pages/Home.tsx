import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturesStrip } from '../components/FeaturesStrip';
import { FeaturedCollection } from '../components/FeaturedCollection';
import { PopularCategories } from '../components/PopularCategories';
import { PlantCareTips } from '../components/PlantCareTips';
import { Testimonials } from '../components/Testimonials';
import { Newsletter } from '../components/Newsletter';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturesStrip />
      <PopularCategories />
      <FeaturedCollection />
      <PlantCareTips />
      <Testimonials />
      <Newsletter />
    </>
  );
};
