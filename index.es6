import React from 'react';

export default class Footer extends React.Component {

  render() {
    return (
      <footer class="ec-footer">
  <div class="ec-footer-container">
    <nav class="ec-footer-set-one">
      <ul>
      {this.props.contact.map(function(link){
        return (<li key={link.link_title}><a href={link.link_path}>{link.link_title}</a></li>)
      })}
      </ul>
    </nav>
    <nav class="ec-footer-set-two">
      <ul>
      {this.props.company.map(function(link){
        return (<li key={link.link_title}><a href={link.link_path}>{link.link_title}</a></li>)
      })}
      </ul>
    </nav>
    <nav class="ec-footer-set-three">
      <h2 class="ec-footer-set-three-header">Follow us</h2>
    </nav>
  </div>
  <div class="ec-footer-set-four">
    <div class="ec-footer-bottom-wrapper">
      <ul>
      {this.props.legal.map(function(link){
        return (<li key={link.link_title}><a href={link.link_path}>{link.link_title}</a></li>)
      })}
      </ul>
      <p>Copyright © The Economist Newspaper Limited 2015. <br />All rights reserved.</p>
    </div>
  </div>
</footer>
    )
  }
}
