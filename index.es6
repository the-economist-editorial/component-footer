import React from 'react';

export default class Footer extends React.Component {

 render() {
    return (
      <footer className="ec-footer">
        {this.props.children}
      </footer>
    );
  }
}
