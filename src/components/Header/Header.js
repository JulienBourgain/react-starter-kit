/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Paper from 'material-ui/lib/paper';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

@withStyles(styles)
class Header extends Component {

  static PropTypes = {
    selectedTab: PropTypes.number,
  };

  render() {
    const headerStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '64px',
      backgroundColor: '#000000',
    };

    const logoStyle = {
      position: 'fixed',
      width: '300px',
      left: '24px',
      lineHeight: '64px',
      color: '#ffffff',
      fontSize: '30px',
    };

    const tabsStyle = {
      position: 'absolute',
      right: '60px',
      bottom: 0,
      width: '425px',
    };

    const tabStyle = {
      height: '64px',
      fontSize: '18px',
      backgroundColor: '#000000',
      color: '#ffffff',
    };

    function handleActive(tab) {
      document.location.href = tab.props.route;
    }

    return (
      <Paper style={headerStyle} zDepth={4} rounded={false}>
          <span style={logoStyle}>ROX COOPER</span>
          <Tabs style={tabsStyle} initialSelectedIndex={this.props.selectedTab}>
            <Tab style={tabStyle} label="LIVE !" value="1" route="/live" onActive={handleActive}/>
            <Tab style={tabStyle} label="PROGRAMMATION" value="2" route="/planning" onActive={handleActive}/>
          </Tabs>
      </Paper>
    );
  }

}

export default Header;
