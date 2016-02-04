/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import {contentStyle, globalStyle, liveStyle, tchatStyle, iframeStyle} from './LiveStyle.js';
import withStyles from '../../decorators/withStyles';
import Paper from 'material-ui/lib/paper';

@withStyles(liveStyle)
class LivePage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Rox Cooper on live !';
    this.context.onSetTitle(title);

    return (
      <Paper style={contentStyle} rounded={false}>
        <div style={globalStyle}>
          <div style={liveStyle}>
            <iframe src="http://player.twitch.tv/?channel=Rox_cooper" frameBorder="0" scrolling="no" height="378" width="620" style={iframeStyle}></iframe>
          </div>

          <div style={tchatStyle}>
            <iframe src="http://www.twitch.tv/Rox_cooper/chat?popout=" frameBorder="0" scrolling="no" height="500" width="350" style={iframeStyle}></iframe>
          </div>
        </div>
      </Paper>
    );
  }

}

export default LivePage;
