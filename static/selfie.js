function  takePic() {
	$.ajax({
      type: 'GET',
      url: '/send',
      async: false,
      data: {pic: true},
      success: function( data ) {
      	$("#target").attr("src","data:image/jpg;base64," + data);
        json_data = jQuery.parseJSON(data);
        console.log(data);
        console.log(json_data);
      }
	});  
}
