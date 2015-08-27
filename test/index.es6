import Footer from '../index.es6';
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;
describe(`A Footer`, () => {
  describe(`it's a React component`, () => {
    it('is compatible with React.Component', () => {
      Footer.should.be.a('function').and.respondTo('render');
    });
    it('renders a React element', () => {
      React.isValidElement(<Footer/>).should.equal(true);
    });
  });
  describe(`could have a nav tag with class ec-footer-set-one`, () => {
    it(`it should contain a ul with 3 children if the component receive an array
       of 3 elements in the setOne prop`, () => {
         const footer = TestUtils.renderIntoDocument(
           <Footer setOne={[ {
             linkTitle: 'Advertise',
             linkPath: 'http:\/\/www.economistgroupmedia.com',
           },
           {
             linkTitle: 'Reprints',
             linkPath: 'http:\/\/www.economist.com\/rights\/',
           },
           {
             linkTitle: 'Careers',
             linkPath: 'http:\/\/jobs.economist.com',
           } ]} />
        );
         const tag = TestUtils.findRenderedDOMComponentWithClass(footer, 'ec-footer-set-one');
         tag.should.be.a('object');
         const list = TestUtils.scryRenderedDOMComponentsWithTag(footer, 'li');
         list.length.should.equal(3);
       });
    it(`it should not be present if the component prop setOne
       is not setted`, () => {
         const footer = TestUtils.renderIntoDocument(
           <Footer/>
         );
         const search = TestUtils.scryRenderedDOMComponentsWithClass(footer, 'ec-footer-set-one');
         search.length.should.equal(0);
       });
  });

  describe(`could have a nav tag with class ec-footer-set-two`, () => {
    it(`it should contain a ul with 3 children if the
       component receive an array of
     3 elements in the setTwo prop`, () => {
       const footer = TestUtils.renderIntoDocument(
           <Footer setTwo={[ {
             linkTitle: 'Advertise',
             linkPath: 'http:\/\/www.economistgroupmedia.com',
           },
           {
             linkTitle: 'Reprints',
             linkPath: 'http:\/\/www.economist.com\/rights\/',
           },
           {
             linkTitle: 'Careers',
             linkPath: 'http:\/\/jobs.economist.com',
           } ]} />
        );
       const tag = TestUtils.findRenderedDOMComponentWithClass(footer, 'ec-footer-set-two');
       tag.should.be.a('object');
       const list = TestUtils.scryRenderedDOMComponentsWithTag(footer, 'li');
       list.length.should.equal(3);
     });
    it(`should not be present if the props setTwo is not  setted`, () => {
      const footer = TestUtils.renderIntoDocument(
             <Footer/>
          );
      const search = TestUtils.scryRenderedDOMComponentsWithClass(footer, 'ec-footer-set-two');
      search.length.should.equal(0);
    });
  });

  describe(`could have a nav tag with class footer-bottom`, () => {
    it(`should contain a ul with 3 children if the component receive an array
      of 3 elements in the setFour prop`, () => {
        const footer = TestUtils.renderIntoDocument(
            <Footer setFour={[ {
              linkTitle: 'Advertise',
              linkPath: 'http:\/\/www.economistgroupmedia.com',
            },
            {
              linkTitle: 'Reprints',
              linkPath: 'http:\/\/www.economist.com\/rights\/',
            },
            {
              linkTitle: 'Careers',
              linkPath: 'http:\/\/jobs.economist.com',
            } ]} />
         );
        const tag = TestUtils.findRenderedDOMComponentWithClass(footer, 'ec-footer-set-four');
        tag.should.be.a('object');
        const list = TestUtils.scryRenderedDOMComponentsWithTag(footer, 'li');
        list.length.should.equal(3);
      });
  });
});
