import React from 'react';
import PageHeader from '../common/PageHeader.js';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <PageHeader title="About"/>
        <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
      </div>
    );
  }
}

export default AboutPage;
