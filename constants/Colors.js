const tintColor = '#2f95dc';
const gold = ['#edc140', '#D5AF38', '#b7952d'];
const red = ['#ff2b00', '#de300d', '#962c17'];
const green = ['#29e636', '#02d18b', '#00BD7D', '#008a5b'];
const white = ['#fff', '#fefefe', '#f9fcfc', '#f5f1f0'];
const grey = ['#e8e8e8', '#ccc', '#6e6e6e'];
const yellow = ['#ffff70', '#EAEB5E', '#666804'];
const black = '#000000';

const defaultTheme = {
  backgroundColor: white[2],

  tabIconDefault: grey[1],
  tabIconSelected: tintColor,
  tabBar: white[1],

  errorBackground: red[1],
  errorText: white[0],

  warningBackground: yellow[1],
  warningText: yellow[2],

  noticeBackground: tintColor,
  noticeText: white[0],

  positiveNumber: green[0],
  negativeNumber: red[0],

  header: green[2],
  headerTint: white[0],
  headerText: white[0],
  headerIcon: white[0],

  cardHeader: grey[2],
  cardBackground: white[0],

  submitButton: green[2],
  submitButtonText: white[0],
  submitButtonOverlay: green[3],

  defaultIcon: grey[0],

  customTextBoxBorder: grey[0],
  customTextBoxText: black,
  customTextBoxIcon: grey[2],

  customButtonOverlay: grey[1],

  dashboardButton: white[0],
  dashboardButtonText: green[2],
  dashboardButtonOverlay: green[1],

  walletScreenLink: green[2],
  walletScreenIcon: gold[1],

  shadow: black
};

export default defaultTheme;
