// Shorthand for $( document ).ready()
$(function() {

    $( ".friends-area" ).hide();
    $( "#fopen" ).click(function() {
      $( ".friends-area" ).fadeToggle( "slow", "linear" );
    });

    $( ".quickm-area" ).hide();
    $( "#qmopen" ).click(function() {
      $( ".quickm-area" ).fadeToggle( "slow", "linear" );
    });

    $( ".wallet-area" ).hide();
    $( "#addopen" ).click(function() {
      $( ".wallet-area" ).slideToggle( "slow", "linear" );
    });

});