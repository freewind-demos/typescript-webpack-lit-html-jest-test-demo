import * as $ from 'jquery'

const {default: hello} = require('./hello')

$('#main').text(hello('webpack'))
