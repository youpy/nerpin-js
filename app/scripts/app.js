/*global define */
define(['nerpin', 'nerpin-item/micron', 'data', 'jquery'], function (Nerpin, Micron, data, $) {
  'use strict';

  var m = null, o = null;   // m = MIDIAccess object for you to make calls on
  navigator.requestMIDIAccess(onsuccesscallback, onerrorcallback);

  function onsuccesscallback(access) {
    console.log(access.getOutputs());
    m = access;
    o = m.getOutput(2);           // grab first output device
    // o.send( [ 0x90, 0x45, 0x7f ] );     // full velocity note on A4 on channel zero
    // o.send( [ 0x80, 0x45, 0x7f ], window.performance.now() + 1000 );  // full velocity A4 note off in one second.
  };

  function onerrorcallback( err ) {
    console.log("uh-oh! Something went wrong!  Error code: " + err.code );
  }

  var nerpin  = new Nerpin(data, Micron),
      $canvas = $('.nerpin-canvas'),
      $popup  = $('.popup'),
      items   = nerpin.items();
  
  $.each(items, function(_, item) {
    var $item = $('<div class="item"></div>');

    $item.css({
      'width' : (100 / items.length) + '%'
    });

    $item.data('nerpin-item', item);

    $canvas.append($item);
  });

  $('body').on('mousemove', function($event) {
    var $item      = $($event.target), 
        y          = $event.pageY,
        height     = $item.height(),
        scale      = (height - y) / height,
        nerpinItem = $item.data('nerpin-item'),
        values;

    $popup.text(nerpinItem.name + ' = ' + scale);
    $popup.show();

    values = nerpinItem.valuesAt(scale);
    $.each(values, function(i, value) {
      o.send([176, value[0], value[1]]);
    });
  });

  return Nerpin;
});
