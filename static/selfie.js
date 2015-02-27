function  takePic() {
  $.ajax({
      type: 'GET',
      url: '/send',
      async: false,
      data: {pic: true},
      success: function( data ) {
        console.log("great success!");
      }
  });  
}
