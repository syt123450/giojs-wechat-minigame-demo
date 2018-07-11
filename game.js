import './js/weapp-adapter'
import './js/symbol'
var data = require('./data/sampleData.js');

// use beautiful file in development environment
var Gio = require('./js/gio.wx.js');
// use min file in production environment
// var Gio = require('./js/gio.wx.min.js');
var controller = new Gio.Controller(canvas);
controller.addData(data);
controller.init();