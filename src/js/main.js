/*eslint-env jquery*/
// If page is homepage
$(function () {
  if ($('body').is('.home')) {
    // Animate tutorial image on scroll + mobile fixed button behavior
    var el;
    var bottom;
    var h = window.innerHeight;

    $(window).on('load', function(){
      el = $('.bottom-cta-tag');
      bottom = el.position().top + el.outerHeight(true);
    });

    animateOnScroll('.lesson-img', 'slide-in-fwd-bottom', 1);

    $(window).on('scroll', function() {
      var y_scroll_pos = window.pageYOffset;
      var scrollBottom = y_scroll_pos + h - 60;

      if (scrollBottom >= bottom){
        $('#mobile-signup').removeClass('mobile-signup').addClass('animated infinite pulse');
      }

      if (scrollBottom < bottom){
        $('#mobile-signup').removeClass('animated infinite pulse').addClass('mobile-signup');
      }
    });

    $('.scrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });
  } // End of if statement
}); // End of homepage stuff

// If page is book page
$(function(){
  if($('body').is('.book-page')){

    // Animate example website image
    animateOnScroll('.lesson-img', 'slide-in-fwd-bottom', 1);

    // Animate book features
    animateChildrenOnScroll('.animate-features', 'fadeIn', 0.5, 0.5);

  }
}); // End of book page stuff

// If page has a form
$(function(){
  if($('body').is('.hasForm')){

// Get data from URL
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  var varEmail = getParameterByName('email');
  var varName = getParameterByName('name');
  var varSurname = getParameterByName('surname');
  var varReferral = getParameterByName('r');

  // Prefill form
  $('#FNAME').val(varName);
  $('#LNAME').val(varSurname);
  $('#EMAIL').val(varEmail);
  $('#REFERRAL').val(varReferral);

  // If referral URL, change source to 'REFERRAL'
  var refInput = $('#REFERRAL').val().length;

  if (refInput > 0){
    $('#JOINED').val('Referral');
    var refURL = '/sign-up?r=' + varReferral;
    $('#mobile-signup').attr('href', refURL);
  }

  // Determine the signup endpoint
  var signupURL;

  if (refInput > 0){
    signupURL = 'https://endpoint.betterwebtype.com/mc-end-point-referral.php';
  } else {
    signupURL = 'https://endpoint.betterwebtype.com/mc-end-point.php';
  }


  // Button spinner behavior
  var myButton = document.getElementById('myButton');

  myButton.addEventListener('click', function() {
    if ($('#FNAME').val().length === 0 || $('#LNAME').val().length === 0 || $('#EMAIL').val().length === 0) {
      $('#myButton').addClass('loading');
      setTimeout( function(){ $('#myButton').removeClass('loading'); }, 500);
    } else {
      $('#myButton').addClass('loading');
    }
  }, false);



  (function(window, document) {
    'use strict';

    // On form submit
    $(document).on('submit', 'form', function(e) {
      var $this = $(this);
      $.ajax({
        type: 'GET',
        url: signupURL,
        data: $this.serialize(),
        dataType: 'jsonp',
        contentType: 'application/json; charset=utf-8',
        error: function(err) {
          console.log(err);
          console.log('error');
          $('#msgContent').html('<h3>Oops!</h3><p>Something went wrong, please try again later. If the problem persists, try <a href="http://eepurl.com/ba-WxL">signing up here</a>.</p>');
          setTimeout( function(){ $('#myButton').removeClass('loading'); }, 500);
          $('#msg').fadeIn(300);
          if ( $('body').hasClass('triangle')){
            setTimeout(function(){$('.score').animate({
              scrollTop: $('#msgContent').offset().top
            }, 500); }, 400);
          } else {
            setTimeout(function(){$('html, body').animate({
              scrollTop: $('#msgContent').offset().top
            }, 500); }, 400);
          }
        },
        success: function(data) {
          if (data.status == 'pending' && data.merge_fields.JOINED == 'Sample'){
            if (varEmail == null) {
              window.location.href = 'almost-finished-sample';
            } else {
              return;
            }
          } else if (data.status == 'pending') {
            console.log(data);
            if (varEmail == null) {
              window.location.href = 'almost-finished';
            } else {
              return;
            }
          } else if (data.status == 'subscribed') {
            if (varEmail == null) {
              console.dir(data);
              window.location.href = 'thanks-subscribed';
            } else {
              return;
            }
          } else {
            console.log(data);
                  // console.log(data);
                  // var msg = data.msg;
                  // var msgReadable = msg.replace('0 -', '');
                  // $('#msgContent').html('<h3>Oops!</h3><p>' + msgReadable + '</p>');
                  $('#msgContent').html('<h3>Oops!</h3><p>Something went wrong.</p>');
                  $('#msg').fadeIn(300);
                  $('#myButton').removeClass('loading');
                }
              }
            });
      return false;
    });

  }(window, document));
  } // End of if statement
}); // End of form stuff

// Scroll to anchor
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});

// Animate children on scroll
function animateChildrenOnScroll(parent, animation, delay, triggerDelay, trigger) {
  if (triggerDelay == null) {
    triggerDelay = 0
  }
  if (trigger == null) {
    trigger = parent;
  }
  if (delay == null) {
    delay = 0;
  }
  var triggerPoint = $(trigger).offset().top;
  console.log(triggerPoint);
  var scrollPosition;
  var children = $(parent).children();

  $(window).on('scroll', function () {
    scrollPosition = window.pageYOffset + window.innerHeight;
    console.log(scrollPosition);

    if (scrollPosition > triggerPoint) {
      for (i = 0; i < children.length; i++) {
        var calculateDelay = triggerDelay + (i * delay) + 's';

        $(children[i]).css("animation-delay", calculateDelay).removeClass('o-0').addClass(animation);
      }
    }
  });
}

function animateOnScroll(element, animation, triggerDelay, trigger) {
  if (trigger == null) {
    trigger = element;
  }

  var triggerPoint = $(trigger).position().top;
  var scrollPosition;

  $(window).on('scroll', function () {
    scrollPosition = window.pageYOffset + window.innerHeight;
    var calculateDelay = triggerDelay + 's';

    if (scrollPosition > triggerPoint) {
      $(element).css("animation-delay", calculateDelay).removeClass('o-0').addClass(animation);
    }
  });
}

// GA
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-36131831-5', 'auto');
ga('send', 'pageview');

// HOTJAR
// (function(h,o,t,j,a,r){
//       h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
//       h._hjSettings={hjid:92378,hjsv:5};
//       a=o.getElementsByTagName('head')[0];
//       r=o.createElement('script');r.async=1;
//       r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
//       a.appendChild(r);
//     })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');