if ($('#slider').length > 0) { 
  
  var sliderLength = $('#slider ul li').length;
  var currentSlide;

  // Slide animations
  function slideRight(slide){
    $('#slide-' + currentSlide).addClass('fadeOutRight');
    setTimeout(function(){
      $('#slider .active').removeClass();
      $('#pager-' + currentSlide).removeClass();
      $('#slide-' + slide).addClass('animated fadeInLeft active');
      $('#pager-' + slide).addClass('active');
    }, 100);
  };

  function slideLeft(slide){
    $('#slide-' + currentSlide).addClass('fadeOutLeft');
    setTimeout(function(){
      $('#slider .active').removeClass();
      $('#pager-' + currentSlide).removeClass();
      $('#slide-' + slide).addClass('animated fadeInRight active');
      $('#pager-' + slide).addClass('active');
    }, 100);
  };

  // Next slide + direction
  function moveLeft(){
    currentSlide = $('li.active').data('number');
    if (currentSlide + 1 > sliderLength){
      var nextSlide = 1;
    } else {
      var nextSlide = currentSlide + 1;
    }
    slideLeft(nextSlide);
  }

  function moveRight(){
    currentSlide = $('li.active').data('number');
    if (currentSlide - 1 == 0){
      var nextSlide = sliderLength;
    } else {
      var nextSlide = currentSlide - 1;
    }
    slideRight(nextSlide);
  }

  // Go to slide function
  function goToSlide(slide){
    currentSlide = $('.active').data('number');
    if (slide < currentSlide){
      slideRight(slide);
    } else if (slide > currentSlide) {
      slideLeft(slide);
    }
  };

  // Event listeners
  $('#next-slide').on('click', moveLeft);
  $('#prev-slide').on('click', moveRight);

  document.onkeydown = checkKey;

  function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
      moveRight();
    }
    else if (e.keyCode == '39') {
      moveLeft();
    }
  };

  // Swipe interactions for mobile
  var myElement = document.getElementById('slider');
  var mc = new Hammer(myElement);

  mc.on("swipeleft", function() {
    moveLeft();
  });

  mc.on("swiperight", function() {
    moveRight();
  });

  $('#pager a').on('click', function(){
    var slideNumber = $(this).data('slide');
    goToSlide(slideNumber);
  });

  // Add slider pagers function
  $( document ).ready(function() {
    currentSlide = $('li.active').data('number');
    for (i = 1; i <= sliderLength; i++) {
      var pager = '<a href="javascript:void(0)" id="pager-' + i + '" data-slide="' + i + '">a</a>';
      $('#pager').append(pager);
    };
    $('#pager-' + currentSlide).addClass('active');
  });

}