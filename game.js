import './js/libs/weapp-adapter'
import './js/libs/symbol'
var data = require('./data/sampleData.js');

// use beautiful file in development environment
var Gio = require('./js/libs/gioWX.js');
// use min file in production environment
// var Gio = require('./js/libs/gioWX.min.js');
var controller = new Gio.Controller(canvas);
controller.addData(data);
controller.init();