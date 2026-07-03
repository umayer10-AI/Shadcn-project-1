import Banner from '@/components/my/Banner';
import Categories from '@/components/my/Categories';
import FeaturedBooks from '@/components/my/FeaturedBooks';
import Stats from '@/components/my/Stats';
import Testimonials from '@/components/my/Testimonials';
import WhyChooseUs from '@/components/my/WhyChooseUs';
import React from 'react';

const page = () => {
  return (
    <div className=''>
      <Banner></Banner>
      <FeaturedBooks></FeaturedBooks>
      <Categories></Categories>
      <WhyChooseUs></WhyChooseUs>
      <Stats></Stats>
      <Testimonials></Testimonials>
    </div>
  );
};

export default page;