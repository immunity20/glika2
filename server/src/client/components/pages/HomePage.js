import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../Hero';
import ProductList from '../ProductList/ProductList';

const Home = () => (
  <div>
    <Helmet>
      <title> Τούρτα Γενεθλίων, Γλυκά βάπτισης γάμου - Το Σταρένιο</title>
    </Helmet>
    <Hero />
    <ProductList.component />
  </div>
);

export default {
  loadData: ProductList.loadData,
  component: Home,
};
