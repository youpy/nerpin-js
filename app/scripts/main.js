require.config({
  paths: {
    jquery: '../components/jquery/jquery',
    bootstrap: 'vendor/bootstrap',
    webmidiapi: '../components/WebMIDIAPI/index'
  },
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    }
  }
});

require(['app', 'jquery', 'bootstrap', 'webmidiapi'], function (app, $) {
  'use strict';
  // use app here
  console.log(app);
  console.log('Running jQuery %s', $().jquery);
});


