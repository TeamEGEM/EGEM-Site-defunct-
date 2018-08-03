// Shorthand for $( document ).ready()
$(function() {

    $( ".friends-area" ).hide();
    $( "#friendmenu_open" ).click(function() {
      $( ".friends-area" ).slideToggle( "slow", "linear" );
    });

    $( "#quickmenu_open" ).click(function() {
      $( ".quickm-area" ).slideToggle( "slow", "linear" );
    });

    $( ".wallet-area" ).hide();
    $( "#walletmenu_open" ).click(function() {
      $( ".wallet-area" ).slideToggle( "slow", "linear" );
    });

});
