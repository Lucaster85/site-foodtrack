import * as React from 'react';

import Seo from '../UI/seo';
import Layout from '../UI/layout';
import MenuSection from '../components/Menu/menu';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <MenuSection />
  </Layout>
)

export default IndexPage;