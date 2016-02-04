/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './App.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../Header';
import Footer from '../Footer';
import MyRawTheme from '../../theme/theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import themeDecorator from 'material-ui/lib/styles/theme-decorator';

@themeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
@withContext
@withStyles(styles)
class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
    selectedTab: PropTypes.number,
  };

  render() {
    return !this.props.error ? (
      <div>
        <Header selectedTab={this.props.selectedTab}/>
        {this.props.children}
        <Footer />
      </div>
    ) : this.props.children;
  }

}

export default App;
