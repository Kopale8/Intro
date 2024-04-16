$(document).ready(function(){
  // window.location.href = "/pages/home.html";

  $( "#headerPlaceHolder" ).load( "/components/header.html" , function( response, status, xhr ) {
    if ( status == "error" ) {
      var msg = "Sorry but there was an error: ";
      $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
    }
  });


  $( "#footerPlaceHolder" ).load( "/components/footer.html" , function( response, status, xhr ) {
    if ( status == "error" ) {
      var msg = "Sorry but there was an error: ";
      $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
    }
  });


})