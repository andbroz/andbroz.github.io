import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <div className="w-screen h-screen bg-purple-700 flex flex-col justify-center items-center text-white gap-5">
      <h1 className="text-6xl font-bold">Hi! My name is Andrzej.</h1>
      <p className="text-3xl">I am Full Stack Web Developer.</p>
    </div>
  </>
);

export default IndexPage;
