/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import { contentStyle, globalStyle } from './PlanningStyle.js';
import withStyles from '../../decorators/withStyles';
import Paper from 'material-ui/lib/paper';

@withStyles(globalStyle)
class PlanningPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Contact Us';
    this.context.onSetTitle(title);

    return (
      <Paper style={contentStyle} rounded={false}>
        <div style={globalStyle}>
          Alors là ça sera le planning
        </div>
      </Paper>
    );
  }

}

export default PlanningPage;
