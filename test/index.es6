import Footer from '../index.es6';
import React from 'react/addons';
let TestUtils = React.addons.TestUtils;
let expect = chai.expect;

describe(`A Footer`, () => {
  describe(`could have a nav tag with class footer-left`, () => {
    it(`should contain a ul with 3 children if the component
       receive an array of 3 elements in the contact prop`,() => {
        let footer = TestUtils.renderIntoDocument(<Footer contact={[{},{},{}]} company={[{},{},{}]} legal={[{},{},{}]} />);
        let nav = TestUtils.findRenderedDOMComponentWithClass(footer, 'footer-left');
        console.log(nav);
        expect(nav.length).toBe(1);
     });
    it(`should contain a ul with 3 children also if the component receive an
      array of 4 or more elements in the contact prop but trigger a console
      warning`,() => {

    });
    it(`should not be present if the component prop contact
       is not setted`,() => {

    });
  });

  describe(`could have a nav tag with class footer-right`,() => {
    it(`should contain a ul with 3 children if the
       component receive an array of
     3 elements in the company prop`,() => {

     });
    it(`should contain a ul with 6 children also if
       the component receive an array of
    7 or more elements in the company prop but
     trigger a console warning`,() => {

    });
    it(`should not be present if the component company contact is not
       setted`,() => {

    });
  });

  describe(`could have a nav tag with class footer-bottom`,() => {
    it(`should contain a ul with 3 children if the component receive an array
       of 2 elements in the legal prop`,() => {

     });
  });
});
