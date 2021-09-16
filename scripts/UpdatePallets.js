"use strict";
exports.__esModule = true;
var fs = require("fs-extra");
var STYLE_DIR = '../src/styles/';
var PALLET_FILE = STYLE_DIR + "/pallet.scss";
function runScript() {
    var primary = {
        primary: {
            light: '#ffd95b',
            main: '#ffa726',
            dark: '#c77800'
        }
    }.primary;
    if (!fs.readdirSync(STYLE_DIR)) {
        fs.mkdirsSync(STYLE_DIR);
    }
    var data = "$primary-light: " + primary.light + ";\n$primary-main: " + primary.main + ";\n$primary-dark: " + primary.dark + ";";
    fs.writeFileSync(PALLET_FILE, data);
}
runScript();
