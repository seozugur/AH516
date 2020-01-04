$(document).ready(function($) {
    $("#slider1").slider();

    var handle = $( "#custom-handle" );
    $( "#slider2" ).slider({
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
      }
    });

    $( "#slider-range" ).slider({
        range: true,
        min: 1420,
        max: 1919,
        values: [ 1500, 1800 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
        }
      });
      $( "#amount" ).val( "" + $( "#slider-range" ).slider( "values", 0 ) +
        " - " + $( "#slider-range" ).slider( "values", 1 ) );

});