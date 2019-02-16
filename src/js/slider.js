//   document.onkeydown = checkKey;

//   function checkKey(e) {
//     e = e || window.event;
//     if (e.keyCode == '37') {
//       moveRight();
//     }
//     else if (e.keyCode == '39') {
//       moveLeft();
//     }
//   };


function nextSlide(element, direction, sliderLength, animationSpeed) {
  var nextSlide;
  resetCurrentSlide(element);

  if (direction == 'next') {
    if (currentSlide + 1 == sliderLength) {
      nextSlide = 0;
      goToSlide(element, animationSpeed, nextSlide);
    } else {
      nextSlide = currentSlide + 1;
      goToSlide(element, animationSpeed, nextSlide);
    }
  } else if (direction == 'previous') {
    if (currentSlide == 0) {
      nextSlide = sliderLength - 1;
      goToSlide(element, animationSpeed, nextSlide);
    } else {
      nextSlide = currentSlide - 1;
      goToSlide(element, animationSpeed, nextSlide);
    }
  }
};

function goToSlide(element, animationSpeed, id) {
  if (id == null) {
    var id = event.srcElement.id;
  }
  var targetSlide = $(element + ' .slides').children();

  // Fade out children of current slide first
  animateChildren(element + ' .slides .active .slide-content', 'fadeOut', 0.3);

  // Update pager immediately
  $(element + ' .pager .active').removeClass();
  $(element + ' #' + id).addClass('active');

  // Wait [animation time] to remove the fadeOut classes
  setTimeout(function(){
    $(element + ' .slides .active .slide-content div').removeClass('fadeOut');
  }, animationSpeed)

  // Wait [animation time + 1ms] to add fadeIn classes
  setTimeout(function(){
    $(element + ' .slides .active').removeClass();
    // $(element + ' .slides .active .slide-content div').removeClass('fadeOut');
    
    $(targetSlide[id]).addClass('active');
    animateChildren(element + ' .slides .active .slide-content', 'fadeIn', 0.3);
  }, animationSpeed + 1);

  resetCurrentSlide(element);
};

function resetCurrentSlide(element) {
  currentSlide = parseInt($(element + ' .pager li.active').attr("id"));
};

function constructSliderNav(element, sliderLength) {

  $(element).append('<ul class="pager"></ul>');
  for (i = 0; i < sliderLength; i++) {
    if (i == 0) {
      $(element + ' ul.pager').append('<li id="' + i + '" class="active">' + i + '</li>');
      resetCurrentSlide(element);
    } else {
      $(element + ' ul.pager').append('<li id="' + i + '">' + i + '</li>');
    }
  }
};

function slider(element, animationSpeed) {
  var sliderLength = $(element + ' ul li').length;
  var currentSlide;

  constructSliderNav(element, sliderLength);

  $(element + ' ul.pager li').on('click', function (event) {
    goToSlide(element, animationSpeed);
  });

  $(element + ' .prev').on('click', function () {
    nextSlide(element, 'previous', sliderLength, animationSpeed);
  });

  $(element + ' .next').on('click', function () {
    nextSlide(element, 'next', sliderLength, animationSpeed);
  });

  // Swipe interactions for mobile
  var myElement = $(element)[0];
  
  var mc = new Hammer(myElement);

  mc.on("swipeleft", function() {
    nextSlide(element, 'next', sliderLength, animationSpeed);
  });

  mc.on("swiperight", function() {
    nextSlide(element, 'previous', sliderLength, animationSpeed);
  });
};