import React from 'react';
import Footer from './index.es6';
import Navigation from '@economist/component-navigation';
import data from './data.js';
// Information mapping
const contact = [];
const company = [];
const legal = [];
// Temporary mapping need, strategy need to be evaluated
for (const { linkPath: href, linkTitle: text } of data.contact) {
  contact.push({ href: href, text: text, title: text });
}
for (const { linkPath: href, linkTitle: text } of data.company) {
  company.push({ href: href, text: text, title: text });
}
for (const { linkPath: href, linkTitle: text } of data.legal) {
  legal.push({ href: href, text: text, title: text });
}

export default (
  <Footer>
    <div className="ec-footer-container">
      <Navigation list={contact} className="ec-footer-set-one" />
      <Navigation list={company} className="ec-footer-set-two" />
      <h2 className="ec-footer-set-three-header">Follow us bar should be here</h2>
    </div>
    <div className="ec-footer-set-four">
      <div className="ec-footer-bottom-wrapper">
        <Navigation list={legal} className="ec-footer-set-four" />
        <p>Copyright © The Economist Newspaper Limited 2015. <br />All rights reserved.</p>
      </div>
    </div>
  </Footer>
);
