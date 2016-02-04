
import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import Spacing from 'material-ui/lib/styles/spacing';

class MyTheme {
  static spacing = Spacing;
  static fontFamily = 'Roboto, sans-serif';
  static palette = {
    primary1Color: Colors.cyan700,
    primary2Color: Colors.cyan700,
    primary3Color: Colors.grey600,
    accent1Color: Colors.blueA200,
    accent2Color: Colors.blueA400,
    accent3Color: Colors.blueA100,
    textColor: Colors.fullWhite,
    alternateTextColor: '#303030',
    canvasColor: '#202020',
    borderColor: ColorManipulator.fade(Colors.fullWhite, 0.3),
    disabledColor: ColorManipulator.fade(Colors.fullWhite, 0.3),
  };
}

export default MyTheme;
