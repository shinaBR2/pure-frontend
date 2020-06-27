import React from 'react';
import Language from './Language';
import { FormattedMessage } from 'gatsby-plugin-intl';

class Header extends React.Component {
  render() {
    return (
      <div>
        This is the primary header on top!
        <div>
          <FormattedMessage id="layout.gettingStarted" />
        </div>
        <Language />
      </div>
    );
  }
}

export default Header;
