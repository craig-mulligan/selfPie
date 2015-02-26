function  takePic() {
  $.ajax({
      type: 'GET',
      url: '/send',
      async: false,
      data: {pic: true},
      success: function( data ) {
        $(".container").html('<a href="#" class="btn-big-red" onclick="takePic()"></a>');
      }
  });  
}

function loop() {
  $(".body").html();
  $(".body").toggleClass("active");
}