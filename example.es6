import React from 'react';
import Footer from './index.es6';
import data from './data.js';

export default (
  <div>
    <Footer setOne={data.contact} setTwo={data.company} setFour={data.legal} />
  </div>
);
