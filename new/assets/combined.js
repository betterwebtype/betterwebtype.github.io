(function(window, document) {
  'use strict';

  var flip = 0;

  function toggleGrid() {
    var body = document.getElementsByTagName('body')[0];
    var button = document.getElementById('btnToggleGrid');

    if (flip === 0) {
      body.classList.add('grid');
      button.textContent = 'Turn Double Grid On';
      button.classList.add('double-grid');
      flip = 1;
    } else if (flip === 1) {
      body.classList.add('grid-double');
      button.textContent = 'Turn Grid Off';
      button.classList.remove('double-grid');
      button.classList.add('grid-off');
      flip = 2;
    } else if (flip === 2) {
      body.classList.remove('grid');
      body.classList.remove('grid-double');
      button.classList.remove('grid-off');
      button.textContent = 'Turn Grid On';
      flip = 0;
    }
  }

  document.getElementById('btnToggleGrid').onclick = toggleGrid;


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

}(window, document));
