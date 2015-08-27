import React from 'react';

export default class Footer extends React.Component {

 static get propTypes() {
   return {
        setOne: React.PropTypes.array,
        setTwo: React.PropTypes.array,
        setFour: React.PropTypes.array,
    };
 }

 render() {
    return (
      <footer className="ec-footer">
         <div className="ec-footer-container">
            {this.props.setOne ? (
               <nav className="ec-footer-set-one">
                  <ul>
                     {this.props.setOne.map((link) => {
                       return (<li key={link.linkTitle}><a href={link.linkPath}>{link.linkTitle}</a></li>);
                     })}
                  </ul>
               </nav>
            ) : null }
            {this.props.setTwo ? (
            <nav className="ec-footer-set-two">
               <ul>
                  {this.props.setTwo.map((link) => {
                    return (<li key={link.linkTitle}><a href={link.linkPath}>{link.linkTitle}</a></li>);
                  })}
               </ul>
             </nav>
            ) : null }
             <nav className="ec-footer-set-three">
               <h2 className="ec-footer-set-three-header">Follow us bar should be here</h2>
             </nav>
          </div>
          <div className="ec-footer-set-four">
            <div className="ec-footer-bottom-wrapper">
               {this.props.setFour ? (
               <ul>
                  {this.props.setFour.map((link) => {
                    return (<li key={link.linkTitle}><a href={link.linkPath}>{link.linkTitle}</a></li>);
                  })}
               </ul>
               ) : null }
               <p>Copyright © The Economist Newspaper Limited 2015. <br />All rights reserved.</p>
          </div>
         </div>
      </footer>
    );
  }
}
