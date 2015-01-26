require.config({
  paths: {
    jQuery: '../bower_components/jquery/dist/jquery.min',
    drake: 'drake'
  }
});

require(['jQuery', 'drake'], function($, _drake) {
  _drake.switchBg(1000);
});
