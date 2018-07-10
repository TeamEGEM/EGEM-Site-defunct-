// Shorthand for $( document ).ready()
$(function() {

    $( ".friends-area" ).hide();
    $( "#friendmenu_open" ).click(function() {
      $( ".friends-area" ).fadeToggle( "slow", "linear" );
    });

    $( "#quickmenu_open" ).click(function() {
      $( ".quickm-area" ).fadeToggle( "slow", "linear" );
    });

    $( ".wallet-area" ).hide();
    $( "#walletmenu_open" ).click(function() {
      $( ".wallet-area" ).slideToggle( "slow", "linear" );
    });

});
