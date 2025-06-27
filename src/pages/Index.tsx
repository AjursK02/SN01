
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import TopChoices from '@/components/TopChoices';
import LookTracker from '@/components/LookTracker';
import CategoryBrowser from '@/components/CategoryBrowser';
import Newsletter from '@/components/Newsletter';
import StealTheirStyles from '@/components/StealTheirStyles';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <StealTheirStyles />
      <CategoryBrowser />
      <TopChoices />
      <LookTracker />
      <Newsletter />
    </Layout>
  );
};

export default Index;
