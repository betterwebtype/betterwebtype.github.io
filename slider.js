var wh = $(window).height();
var ww = $(window).width();

$('.slider-image').on('click', function(){
  if (ww >= 768){
    $('#close').fadeIn();
    $('#slider').addClass('fullscreen');
    $('#slider.fullscreen ul').css('height', wh + 'px');
  }
});

$('#close').on('click', function(){
  $('#close').fadeOut();
  $('#slider').removeClass('fullscreen');
  $('#slider ul').css('height', 'auto');
});

var sliderLength = $('#slider ul li').length;
var currentSlide;

function moveLeft(){
  currentSlide = $('li.active').data('number');
  if (currentSlide + 1 > sliderLength){
    var nextSlide = 1;
  } else {
    var nextSlide = currentSlide + 1;
  }
  $('#slide-' + currentSlide).addClass('fadeOutLeft');
  setTimeout(function(){
    $('#slide-' + currentSlide).removeClass();
    $('#pager-' + currentSlide).removeClass();
    $('#slide-' + nextSlide).addClass('animated fadeInRight active');
    $('#pager-' + nextSlide).addClass('active');
  }, 100); 
}

function moveRight(){
  currentSlide = $('li.active').data('number');
  if (currentSlide - 1 == 0){
    var nextSlide = sliderLength;
  } else {
    var nextSlide = currentSlide - 1;
  }
  $('#slide-' + currentSlide).addClass('fadeOutRight');
  setTimeout(function(){
    $('#slide-' + currentSlide).removeClass();
    $('#pager-' + currentSlide).removeClass();
    $('#slide-' + nextSlide).addClass('animated fadeInLeft active');
    $('#pager-' + nextSlide).addClass('active');
  }, 100);
}

$('#next').on('click', moveLeft);
$('#prev').on('click', moveRight);
$("#slider").on( "swipeleft", moveLeft);
$("#slider").on( "swiperight", moveRight);

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == '37') {
    moveRight();
  }
  else if (e.keyCode == '39') {
    moveLeft();
  } else if (e.keyCode == '27') {
    $('#close').fadeOut();
    $('#slider').removeClass('fullscreen');
    $('#slider ul').css('height', 'auto');
  }
};

function addPagers(){
  currentSlide = $('li.active').data('number');
  for (i = 1; i <= sliderLength; i++) {
    var pager = '<a href="javascript:void(0)" id="pager-' + i + '" data-slide="' + i + '">a</a>';
    $('#pager').append(pager);
  };
  $('#pager-' + currentSlide).addClass('active');
};

addPagers();

function goToSlide(slide){
  currentSlide = $('.active').data('number');
  if (slide < currentSlide){
  $('#slide-' + currentSlide).addClass('fadeOutRight');
  setTimeout(function(){
    $('#slide-' + currentSlide).removeClass();
    $('#pager-' + currentSlide).removeClass();
    $('#slide-' + slide).addClass('animated fadeInLeft active');
    $('#pager-' + slide).addClass('active');
  }, 100); } else if (slide > currentSlide) {
    $('#slide-' + currentSlide).addClass('fadeOutLeft');
  setTimeout(function(){
    $('#slide-' + currentSlide).removeClass();
    $('#pager-' + currentSlide).removeClass();
    $('#slide-' + slide).addClass('animated fadeInRight active');
    $('#pager-' + slide).addClass('active');
  }, 100);
  }
}

$('#pager a').on('click', function(){
  var slideNumber = $(this).data('slide');
  goToSlide(slideNumber);
});