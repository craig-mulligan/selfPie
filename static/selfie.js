function  takePic() {
	$.ajax({
      type: 'GET',
      url: '/send',
      async: false,
      data: {pic: true},
      success: function( data ) {
        $('.image-container').html("<img src='"+data.url+"'>");
        console.log(data)
      }
	});  
}
