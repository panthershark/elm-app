require('./styles/index.scss');

var Demo = require('./elm/Main.elm');
var app = Demo.Main.embed(document.getElementById('container'));
