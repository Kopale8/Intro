$(document).ready(function(){

    
    $('#public_information').click(function(){
      console.log('inside function')
      $( "#mainPlaceHolder" ).load( "pages/public_information.html" , function( response, status, xhr ) {
        if ( status == "error" ) {
          var msg = "Sorry but there was an error: ";
          $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
        }
      });
    })
  
  })