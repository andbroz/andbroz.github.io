import * as React from 'react';

import Seo from '../components/seo';

const NotFoundPage = () => (
  <div className="w-screen h-screen bg-green-300 flex justify-center flex-col items-center ">
    <Seo title="404: Not found" />
    <div className="w-2/3 h-2/6 from-yellow-300 bg-opacity-80 text-center text-purple-700 flex justify-center flex-col rounded-lg bg-gradient-to-t animate-pulse">
      <h1 className="text-6xl m-4 font-bold">404: Not Found</h1>
      <p className="m-4 text-3xl">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </div>
  </div>
);

export default NotFoundPage;
