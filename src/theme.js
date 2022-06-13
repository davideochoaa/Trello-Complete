import jss from "jss";
import preset from 'jss-preset-default';


jss.setup(preset());
jss.createStyleSheet({'@global ol,ul': {listStyleType:'none'}},).attach();
export const themeList = {
lightTheme : {
   spacing: 8,
   colors: {
      primary: '#ffffff',
      secondary: '#ebecf0',
      white: '#fff',
      black: '#000',
      text: 'black',
      card: 'white'
   }

},

darkTheme : {
   spacing: 8,
   colors: {
      primary: '#051076',
      secondary: '#303030',
      ternar: '#000',
      black: '#0000',
      white: '#ffff',
      text: 'black',
      card: 'black'
   }

},
purpleTheme : {
   spacing: 8,
   colors: {
      primary: '#f5a',
      secondary: '#ff0000',
      ternar: '#000',
      black: '#0000',
      white: '#ffff',
      text: 'black',
      card: 'black',
   }
},
}
