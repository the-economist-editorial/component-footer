import Footer from '../index.es6';
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

describe(`A Footer`, () => {
  describe(`could have a nav tag with class ec-footer-set-one`, () => {
    it(`should contain a ul with 3 children if the component
       receive an array of 3 elements in the contact prop`,() => {
        const footer = TestUtils.renderIntoDocument(
           <Footer contact={[{
             link_title: "Advertise",
             link_path: "http:\/\/www.economistgroupmedia.com"
           },
           {
             link_title: "Reprints",
             link_path: "http:\/\/www.economist.com\/rights\/"
           },
           {
             link_title: "Careers",
             link_path: "http:\/\/jobs.economist.com"
           }]} />
        );
        const tag = TestUtils.findRenderedDOMComponentWithClass(footer, 'ec-footer-set-one');
        tag.should.be.a('object');
        const list = TestUtils.scryRenderedDOMComponentsWithTag(footer, 'li');
        list.length.should.equal(3);
     });
    it(`should contain a ul with 3 children also if the component receive an
      array of 4 or more elements in the contact prop but trigger a console
      warning`,() => {

    });
    it(`should not be present if the component prop contact
       is not setted`,() => {
          const footer = TestUtils.renderIntoDocument(
             <Footer/>
          );
          let search = TestUtils.scryRenderedDOMComponentsWithClass(footer, 'ec-footer-set-one');
          search.length.should.equal(0);
    });
  });

  describe(`could have a nav tag with class ec-footer-set-two`,() => {
    it(`should contain a ul with 3 children if the
       component receive an array of
     3 elements in the company prop`,() => {
        const footer = TestUtils.renderIntoDocument(
           <Footer company={[{
             link_title: "Advertise",
             link_path: "http:\/\/www.economistgroupmedia.com"
           },
           {
             link_title: "Reprints",
             link_path: "http:\/\/www.economist.com\/rights\/"
           },
           {
             link_title: "Careers",
             link_path: "http:\/\/jobs.economist.com"
           }]} />
        );
        const tag = TestUtils.findRenderedDOMComponentWithClass(footer, 'ec-footer-set-two');
        tag.should.be.a('object');
        const list = TestUtils.scryRenderedDOMComponentsWithTag(footer, 'li');
        list.length.should.equal(3);
     });
    it(`should contain a ul with 6 children also if
       the component receive an array of
    7 or more elements in the company prop but
     trigger a console warning`,() => {

    });
    it(`should not be present if the props company is not  setted`,() => {
          const footer = TestUtils.renderIntoDocument(
             <Footer/>
          );
          let search = TestUtils.scryRenderedDOMComponentsWithClass(footer, 'ec-footer-set-two');
          search.length.should.equal(0);
    });
  });

  describe(`could have a nav tag with class footer-bottom`,() => {
    it(`should contain a ul with 3 children if the component receive an array
       of 2 elements in the legal prop`,() => {

     });
  });
});
