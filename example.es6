import React from 'react';
import Footer from './index.es6';
import Navigation from '@economist/component-navigation';
import data from './data.js';

export default (
  <Footer>
    <div className="ec-footer-container">
      <Navigation list={data.contact} className="ec-footer-set-one" />
      <Navigation list={data.company} className="ec-footer-set-two" />
      <h2 className="ec-footer-set-three-header">Follow us bar should be here</h2>
    </div>
    <div className="ec-footer-set-four">
      <div className="ec-footer-bottom-wrapper">
        <Navigation list={data.legal} className="ec-footer-set-four" />
        <p>Copyright © The Economist Newspaper Limited 2015. <br />All rights reserved.</p>
      </div>
    </div>
  </Footer>
);
