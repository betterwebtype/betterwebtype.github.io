
$(document).on('submit', 'form', function(e) {
	var $this = $(this);
	$.ajax({
		type: "GET",
		url: 'http://betterwebtype.us2.list-manage2.com/subscribe/post-json?c=?',
		data: $this.serialize(),
		dataType: 'json',
		contentType: "application/json; charset=utf-8",
		error: function(err) {
	      	// $('article, footer').addClass('blurEffect');
	      	$('#msg').fadeIn(300);
	      	$('#msgContent').empty().append('<h2 class="bold">Something is not working.</h2><p>Try again later.</p><a href="javascript:void(0)" id="btnClose" class="button">OK, got it</a>').removeClass().addClass('animated zoomIn');
	      	$('#btnClose').on('click', function(){
		      	// $('article, footer').removeClass('blurEffect');
		      	$('#msg').fadeOut(300);
		      	$('#msgContent').removeClass().addClass('animated zoomOut');
		      });
	      },
	      success: function(data) {
	      	if (data.result != "success") {
	          	// $('article, footer').addClass('blurEffect');
	          	$('#msg').fadeIn(300);
	          	var msg = data.msg;
	          	var msgReadable = msg.replace('0 -', '')
	          	$('#msgContent').empty().append('<h2 class="bold">Something Went Wrong.</h2><p>' + msgReadable + '<p/><a href="javascript:void(0)" id="btnClose" class="button">OK, got it</a>').removeClass().addClass('animated zoomIn');
	          } else {
	          	window.location.href = "almost-finished";
	          }
	          $('#btnClose').on('click', function(){
		      	// $('article, footer').removeClass('blurEffect');
		      	$('#msg').fadeOut(300);
		      	$('#msgContent').removeClass().addClass('animated zoomOut');
		      });
	      }
	  });
return false;
});