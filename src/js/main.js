// If page is homepage
$(function(){
  if($('body').is('.home')){

  // Animate tutorial image on scroll + mobile fixed button behavior
  var triggerPoint;
  var el;
  var bottom;
  var h = window.innerHeight;

  $(window).on('load', function(){
    triggerPoint = $('.popularity .button-secondary').position();
    el = $('.bottom-cta-tag');
    bottom = el.position().top + el.outerHeight(true);
  });

  $(window).on('scroll', function() {
    triggerPoint = $('.popularity .button-secondary').position();
    var y_scroll_pos = window.pageYOffset;
    var scrollBottom = y_scroll_pos + h - 60;

    if(y_scroll_pos > triggerPoint.top) {
      $('.lesson-img').addClass('slide-in-fwd-bottom');
    }

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

// If page has a form
$(function(){
  if($('body').is('.hasForm')){

// Get data from URL
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
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
    var refURL = "/sign-up?r=" + varReferral;
    $('#mobile-signup').attr("href", refURL);
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

  myButton.addEventListener("click", function() {
    if ( $('#FNAME').val().length === 0 || $('#LNAME').val().length === 0 || $('#EMAIL').val().length === 0 ){
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
        type: "GET",
        url: signupURL,
        data: $this.serialize(),
        dataType: 'jsonp',
        contentType: "application/json; charset=utf-8",
        error: function(err) {
          console.log(err);
          console.log('error');
          $('#msgContent').html('<h3>Oops!</h3><p>Something went wrong, please try again later. If the problem persists, try <a href="http://eepurl.com/ba-WxL">signing up here</a>.</p>');
          setTimeout( function(){ $('#myButton').removeClass('loading'); }, 500);
          $('#msg').fadeIn(300);
          if ( $('body').hasClass('triangle')){
            setTimeout(function(){$('.score').animate({
              scrollTop: $("#msgContent").offset().top
            }, 500); }, 400);
          } else {
            setTimeout(function(){$('html, body').animate({
              scrollTop: $("#msgContent").offset().top
            }, 500); }, 400);
          }
        },
        success: function(data) {
          if (data.status == 'pending' && data.merge_fields.JOINED == 'Sample'){
            if (varEmail == null) {
              window.location.href = "almost-finished-sample";
            } else {
              return;
            }
          } else if (data.status == 'pending') {
            console.log(data);
            if (varEmail == null) {
              window.location.href = "almost-finished";
            } else {
              return;
            }
          } else if (data.status == 'subscribed' && data.merge_fields.SAMPLE == 'Yes') {
            if (varEmail == null) {
              console.dir(data);
              window.location.href = "sample-sent";
            } else {
              return;
            }
          } else if (data.status == 'subscribed') {
            if (varEmail == null) {
              console.dir(data);
              window.location.href = "thanks-subscribed";
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

// GA
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-36131831-5', 'auto');
ga('send', 'pageview');

// HOTJAR
// (function(h,o,t,j,a,r){
    //   h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    //   h._hjSettings={hjid:92378,hjsv:5};
    //   a=o.getElementsByTagName('head')[0];
    //   r=o.createElement('script');r.async=1;
    //   r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    //   a.appendChild(r);
    // })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');