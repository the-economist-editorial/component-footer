import React from 'react';
// Limiting number of menu voices to preserve layout
const CONTACT_MAX_ITEMS = 3;
const COMPANY_MAX_ITEMS = 6;
let maxLength = function(props, propName, componentName, location) {
   let err = '';
   if(props['contact']){
      if (props['contact'].length>CONTACT_MAX_ITEMS) {
        err += 'Contact can accept a maximun of ' + CONTACT_MAX_ITEMS + ' elements.\n';
      }
   }
   if(props['company']){
      if (props['company'].length>COMPANY_MAX_ITEMS) {
         err += 'Company can accept a maximun of ' + COMPANY_MAX_ITEMS + ' elements.\n';
      }
   }
   if(err) {
      return new Error(err);
   }
}

export default class Footer extends React.Component {

 static get propTypes() {
     return {
        contact: React.PropTypes.array,
        company: React.PropTypes.array,
        legal: React.PropTypes.array,
        maxLength: maxLength
    }
 }

 render() {
    return (
      <footer className="ec-footer">
         <div className="ec-footer-container">
            {this.props.contact ? (
               <nav className="ec-footer-set-one">
                  <ul>
                     {this.props.contact.map(function(link){
                       return (<li key={link.link_title}><a href={link.link_path}>{link.link_title}</a></li>)
                     })}
                  </ul>
               </nav>
            ) : null }
            {this.props.company ? (
            <nav className="ec-footer-set-two">
               <ul>
                  {this.props.company.map(function(link){
                    return (<li key={link.link_title}><a href={link.link_path}>{link.link_title}</a></li>)
                  })}
               </ul>
             </nav>
            ) : null }
             <nav className="ec-footer-set-three">
               <h2 className="ec-footer-set-three-header">Follow us</h2>
               Set component bar here
             </nav>
          </div>
          <div className="ec-footer-set-four">
            <div className="ec-footer-bottom-wrapper">
               {this.props.legal ? (
               <ul>
                  {this.props.legal.map(function(link){
                    return (<li key={link.link_title}><a href={link.link_path}>{link.link_title}</a></li>)
                  })}
               </ul>
               ) : null }
               <p>Copyright © The Economist Newspaper Limited 2015. <br />All rights reserved.</p>
          </div>
         </div>
      </footer>
    )
  }
}
