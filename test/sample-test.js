var tape = require("tape"),
  d3 = require('../build/d3-fusiontext');

tape('Check if the label function exists', function (test) {
  test.equal(typeof d3.textBlock().label, 'function');
  test.end();
});
