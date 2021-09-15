import * as fs from 'fs-extra';

const STYLE_DIR = '../src/styles/';
const PALLET_FILE = `${STYLE_DIR}/pallet.scss`;

function runScript() {
  const { primary } = {
    primary: {
      light: '#ffd95b',
      main: '#ffa726',
      dark: '#c77800',
    },
  };

  if (!fs.readdirSync(STYLE_DIR)) {
    fs.mkdirsSync(STYLE_DIR);
  }

  const data = `$primary-light: ${primary.light};\n$primary-main: ${primary.main};\n$primary-dark: ${primary.dark};`;
  fs.writeFileSync(PALLET_FILE, data);
}

runScript();
