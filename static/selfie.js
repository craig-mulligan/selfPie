function  takePic() {
	$.ajax({
      type: 'GET',
      url: '/send',
      async: false,
      data: {pic: true},
      success: function( data ) {
        json_data = jQuery.parseJSON(data);
        console.log(data);
        console.log(json_data);
      }
	});  
}
