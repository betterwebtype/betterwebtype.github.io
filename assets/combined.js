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
console.log(varEmail);
var varName = getParameterByName('name');
console.log(varName);
var varSurname = getParameterByName('surname');
console.log(varSurname);

// Prefill form
$('#FNAME').val(varName);
$('#LNAME').val(varSurname);
$('#EMAIL').val(varEmail);

var myButton = document.getElementById('myButton');

// Button spinner behavior
myButton.addEventListener("click", function() {
  // myButton.className = myButton.className + ' loading';
  if ( $('#FNAME').val().length === 0 || $('#LNAME').val().length === 0 || $('#EMAIL').val().length === 0 ){
    $('#myButton').addClass('loading');
    setTimeout( function(){ $('#myButton').removeClass('loading'); }, 500);
  } else {
    $('#myButton').addClass('loading');
  }
}, false);


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

  // document.getElementById('btnToggleGrid').onclick = toggleGrid;

  // $(document).on('submit', 'form', function(e) {
  //   var $this = $(this);
  //   $.ajax({
  //     type: "GET",
  //     url: 'https://betterwebtype.us2.list-manage.com/subscribe/post-json?c=?',
  //     data: $this.serialize(),
  //     dataType: 'json',
  //     contentType: "application/json; charset=utf-8",
  //     error: function(err) {
  //       console.log('error');
  //         $('#msgContent').html('<h3>Oops!</h3><p>Something went wrong, please try again later. Get in touch if the problem persists. <a href="http://twitter.com/matejlatin">@matejlatin</a></p>');
  //         $('#msg').fadeIn(300);
  //       },
  //         success: function(data) {
  //           if (data.result != "success") {
  //               var msg = data.msg;
  //               var msgReadable = msg.replace('0 -', '')
  //               $('#msgContent').html('<h3>Oops!</h3><p>' + msgReadable + '</p>');
  //               $('#msg').fadeIn(300);
  //               // $('.curtain').scrollTop(0);
  //             } else {
  //               window.location.href = "almost-finished.html";
  //             }
  //             $('#btnClose').on('click', function(){
  //               $('#msg').fadeOut(300);
  //               $('#msgContent').removeClass().addClass('animated zoomOut');
  //           });
  //           }
  //         });
  //   return false;
  // });


  $(document).on('submit', 'form', function(e) {
    var $this = $(this);
    $.ajax({
      type: "GET",
      url: 'http://bwt-mc-bwt.1d35.starter-us-east-1.openshiftapps.com/mc-end-point.php',
      data: $this.serialize(),
      dataType: 'jsonp',
      contentType: "application/json; charset=utf-8",
      error: function(err) {
        console.log(err);
        console.log('error');
        $('#msgContent').html('<h3>Oops!</h3><p>Something went wrong, please try again later. Get in touch if the problem persists. <a href="http://twitter.com/matejlatin">@matejlatin</a></p>');
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
        if (data.status == 'subscribed' || data.status == 'pending') {
          console.log(data);
          if (varEmail == null) {
            window.location.href = "almost-finished.html";
          } else {
            return;
          }
        } else {
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

  // $('form.form-join-bwt').on('submit',function(e) {
  //   // Highjack the submit button, we will do it ourselves
  //   e.preventDefault();
  //   // uncomment next line & check console to see if button works
  //   // console.log('submit button worked!');
  //   // store all the form data in a variable
  //   var formData = $(this).serialize();
  //   // Let's make the call!
  //   // Replace the path to your own endpoint!
  //   $.getJSON('http://bwt-mc-bwt.1d35.starter-us-east-1.openshiftapps.com/mc-end-point.php', formData ,function(data) {
  //     // uncomment next line to see your data output in console
  //     console.log(data);

  //     // If it worked...
  //     if(data.status === 'subscribed') {
  //       // Let us know!
  //       alert('Thanks!');
  //     } else {
  //       // Otherwise tell us why it didn't
  //       alert("oops error: " + data.detail);
  //     }
  //   });
  // });

  $('#link-contact').on('click', function(){
    $('#msg').fadeIn(300);
    $('body').addClass('no-scroll');
    $('.curtain').removeClass('show-overflow');
    $.get("contact.html", function (data) {
      $('#msgContent').empty().append(data).removeClass().addClass('animated zoomIn');
    });
  });

  $('#link-privacy').on('click', function(){
    $('body').addClass('no-scroll');
    $('.curtain').addClass('show-overflow');
    $('#msg').fadeIn(300);
    $.get("privacy-policy.html", function (data) {
      $('#msgContent').empty().append(data).removeClass().addClass('animated zoomIn');
      $('.curtain').scrollTop(0);
    });
  });

  $('#link-terms').on('click', function(){
    $('body').addClass('no-scroll');
    $('.curtain').addClass('show-overflow');
    $('#msg').fadeIn(300);
    $.get("terms.html", function (data) {
      $('#msgContent').empty().append(data).removeClass().addClass('animated zoomIn');
      $('.curtain').scrollTop(0);
    });
  });

  $('#icon-close').on('click', function(){
    $('#msg').fadeOut(300);
    $('#msgContent').removeClass().addClass('animated zoomOut');
    $('body').removeClass('no-scroll');
  });

}(window, document));


// DROPCAP

/*
Copyright 2014 Adobe Systems Incorporated. Licensed under the Apache 2.0 License.
http://www.apache.org/licenses/LICENSE-2.0.html
*/

(function() {
  "use strict";

// Reference terms: http://blogs.wayne.edu/bcam/wp-content/blogs.dir/308/files/2013/09/glyphterms.gif

var TEST_GLYPH = "X";
var TEST_SIZE = 100;
var TEST_SIZE_PX = TEST_SIZE + "px";
var ZEROPX = "0px";
var LINEHEIGHT_DEFAULT = 1.15; // Blink fallback

var _fontMetricsCache = {};

function getLineMetrics(css) {
  var fontSize = parseFloat(css.fontSize);
  var lineHeight = (css.lineHeight==='normal')?(LINEHEIGHT_DEFAULT*fontSize):parseFloat(css.lineHeight);

  return {
    leading: (lineHeight - fontSize),
    lineHeight: lineHeight,
    fontSize: fontSize
  };
}

function createTestContainingBlock(document) {
  var div = document.createElement('div');

    div.style.position = "fixed"; // To make containing block and out of flow
    div.style.padding = ZEROPX;
    div.style.opacity = "0";      // So we don't see it; we need to be attached to the current doc to get layout info. Can't be display:none either
    div.style.fontSize = TEST_SIZE_PX;
    div.style.lineHeight = "1";

    document.body.appendChild(div);
    return div;
  }

  function newTestGlyph(container) {
    var span = container.ownerDocument.createElement('span');
    span.textContent = TEST_GLYPH;
    if (container) {
      container.appendChild(span);
    }
    return span;
  }

  function destroyTestContainingBlock(element) {
    element.ownerDocument.body.removeChild(element);
  }

  function measureCapHeightRatio(testParent, fontFamily, width, height) {
    // We use canvas to figure out the ratio of cap-height to overall font height.
    // This helps us figure out the factor by which to grow our drop cap's font
    // size to fill the entire drop cap float.
    //
    // Because some browsers may not position the baseline at the same height in
    // canvas vs HTML we will detect both the cap line and the baseline using a
    // capital 'E'

    var ratio = -1;
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    testParent.appendChild(canvas);

    var ctx = canvas.getContext('2d');
    ctx.font = TEST_SIZE_PX +" "+fontFamily;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.textBaseline = "top";
    ctx.fillText('E',0,0);

    // Grab the central column of pixels
    var middleYline = ctx.getImageData(Math.ceil(canvas.width/2), 0, 1, canvas.height);
    var bottomL = null;

    function _isBlack(imageData, pxIndex) {
      var firstByte = pxIndex*4;
      var red = imageData.data[firstByte];
      var green = imageData.data[firstByte + 1];
      var blue = imageData.data[firstByte + 2];

      return (red===0 || green===0 || blue===0)?true:false;
    }

    // From the bottom, go up until we fnd the first black pixel
    for (var y = canvas.height-1; y >= 0; y--) {
      if (_isBlack(middleYline, y)) {
        bottomL = y;
        break;
      }
    }

    // From the top, go down until the first black pixel
    for (var y = 0; y < canvas.height; y++) {
      if (_isBlack(middleYline, y)) {
        ratio = (bottomL + 1 - y)/height;
        break;
      }
    }

    return ratio;
  }

  function getFontMetrics(document, fontFamily) {
    var ret = _fontMetricsCache[fontFamily];
    if (ret) {
      return ret;
    }

    ret = { baselineRatio: undefined, capHeightRatio: undefined };

    /*
        The injected markup looks like:

        <p style="position:fixed; padding:0; opacity:0; line-height:1; font-size: 100px; font-family:...;">
            <span style="font-size:0px">X</span>
            <span>X</span>
        </p>
        */

        var testBlock = createTestContainingBlock(document);
        testBlock.style.fontFamily = fontFamily;

        var zeroX = newTestGlyph(testBlock);
        zeroX.style.fontSize = ZEROPX;
        var largeX = newTestGlyph(testBlock);

        ret.baselineRatio = zeroX.offsetTop/TEST_SIZE;
        try {
          ret.capHeightRatio = measureCapHeightRatio(testBlock, fontFamily, largeX.offsetWidth, TEST_SIZE);
        } catch(e) {
          throw new Error('[dropcap.js] Error computing font metrics: '+ e.message);
        } finally {
          destroyTestContainingBlock(testBlock);
        }

        _fontMetricsCache[fontFamily] = ret;

        return ret;
      }

      var DCJS_DESCENDER_CLASS = "dcjs-descender";

      function toPxLength(pxNumber) {
        return pxNumber + "px";
      }

      function hasDescenderClass(dcapElement) {
    // Note: classList not supported in IE9
    if (dcapElement.classList.contains(DCJS_DESCENDER_CLASS)) {
      return true;
    }
  }

  function isDescenderChar(dcapElement) {
    var descenders = "gjpqQ";

    if (descenders.indexOf(dcapElement.textContent) === -1) {
      return false;
    }
    return true;
  }

  function resetDropcapStyle(element) {
    if (element.dcapjs) {
      element.style.cssFloat = "";
      element.style.padding = "";
      element.style.fontSize = "";
      element.style.lineHeight = "";
      element.style.marginTop = "";
    }
  }

  function layoutDropcap(dropcapElement, heightInLines, baselinePos) {
    if (!baselinePos) {
      baselinePos = heightInLines;
    }

    if(baselinePos==1 && heightInLines==1) {
            // First baseline and one-line tall? Reset any dropcap.js
            // styling and let the browser lay it out
            resetDropcapStyle(dropcapElement);
            return;
          }

          var doc = dropcapElement.ownerDocument;
          var dcap = dropcapElement;
          var par = dcap.parentNode;
          var dcapCSS = window.getComputedStyle(dcap);
          var parCSS = window.getComputedStyle(par);

        // Compute all our metrics
        var dcapFontMetrics = getFontMetrics(doc, dcapCSS.fontFamily);
        var parFontMetrics = getFontMetrics(doc, parCSS.fontFamily);
        var dcapCapHeightRatio = dcapFontMetrics.capHeightRatio;
        var parLineMetrics = getLineMetrics(parCSS);

        // We compute size and position for the main use-case: the drop cap
        // extend from the baseline of the nth line to the cap line of the
        // first line. Then adjust as needed if heightInLines != baslinePos
        //
        // For the height, we take the line height of all n lines then substract:
        // 1. The half-leading for the first and nth line
        // 2. The space below the baseline of the nth line
        // 3. The space between the ascender line and the cap line

        var ascend = (parFontMetrics.baselineRatio - parFontMetrics.capHeightRatio)*parLineMetrics.fontSize;

        var dcapHeightInPx = (heightInLines*parLineMetrics.lineHeight) - parLineMetrics.leading - ascend - ((1-parFontMetrics.baselineRatio)*parLineMetrics.fontSize);
        var dcapFontSizeInPx = (dcapHeightInPx/dcapCapHeightRatio);

        dcap.dcapjs = true;
        if (dcapCSS.direction=='rtl') {
          dcap.style.cssFloat = "right";
        }
        else {
          dcap.style.cssFloat = "left";
        }
        dcap.style.padding = ZEROPX;
        dcap.style.fontSize = toPxLength(dcapFontSizeInPx);
        dcap.style.lineHeight = ZEROPX;

        // Push the float down by the first line's half-leading + the space between
        // cap line and ascender line
        var verticalOffset = parLineMetrics.leading/2 + ascend;
        // If the dropcap is raised by n lines, we need to drag it up accordingly
        // (or down is it's sized down...)
        verticalOffset -= ((heightInLines - baselinePos)*parLineMetrics.lineHeight);
        dcap.style.marginTop = toPxLength(verticalOffset);

        // Is the drop cap raised? Adjust its parent paragraph's top margin by the
        // height of the rise
        if (heightInLines > baselinePos) {
          var parMarginTop = parseFloat(parCSS.marginTop);
          par.style.marginTop = toPxLength(parMarginTop + (-1*verticalOffset));
        }

        // Is it a descender? Make our float taller
        var descendAdjust = 0;

        if (isDescenderChar(dcap)) {
            // Can we tell the dropcap has a descender?
            // Estimate the amount of space below the baseline
            descendAdjust = dcapFontSizeInPx*(1-dcapFontMetrics.baselineRatio);
          } else if (hasDescenderClass(dcap)) {
            // Did the author tell us to treat this dropcap as a descender?
            // Then make the float font-size high
            // Note: the result may generally be too tall; experience will show
            // whether this is useful
            descendAdjust = dcapFontSizeInPx - dcapHeightInPx;
          }

          dcap.style.height = toPxLength(dcapHeightInPx + descendAdjust);


        // The baseline of an empty inline-block is its bottom
        // margin edge. Because the dropcap span is a float, it
        // creates a BFC preventing such an inline-block to 'bleed'
        // outside its boundary like an anonymous inline glyph can.
        // The inline block we create below acts a strut that pulls
        // the baseline of the dropcap element's anymous glyph down
        //to the bottom of the span
        var strut = dcap.dcapjsStrut;
        if (!strut) {
          strut=doc.createElement("span");
          strut.style.display = "inline-block";
          dcap.appendChild(strut);
          dcap.dcapjsStrut = strut;
        }
        strut.style.height = toPxLength(dcapHeightInPx);

      }

      function getCSSPropertyName(property) {
        var _supportElement = (window.document.body)?window.document.body:document.createElement('div');
        function _supported(p) {
          return p in _supportElement.style;
        }

    // Check for unprefixed first...
    if (_supported(property)) {
      return property;
    }

    // ...then look for prefixed version...
    var prefix = ['-webkit-', '-moz-', '-ms-', '-o'];
    for (var i=0; i < prefix.length; i++) {
      var name = prefix[i]+property;
      if (_supported(name)) {
        return name;
      }
    }

    return null;
  }

  var global;
  if (typeof window !== 'undefined') {
    global = window;
  } else if (typeof exports !== 'undefined') {
    global = exports;
  } else {
    global = this;
  }
  global.Dropcap = {

    options: {
      runEvenIfInitialLetterExists: true,
    },

    layout: function(dropcapRef, heightInLines, baselinePos) {
      if (this.options.runEvenIfInitialLetterExists == false) {
        var initialLetter = getCSSPropertyName('initial-letter');
        if (initialLetter) {
          return;
        }
      }

      if (heightInLines < 1 || (baselinePos && baselinePos < 1)) {
        throw new RangeError("Dropcap.layout expects the baseline position and height to be 1 or above");
      }

      if (dropcapRef instanceof HTMLElement) {
        layoutDropcap(dropcapRef, heightInLines, baselinePos);
      } else if (dropcapRef instanceof NodeList) {
        var forEach = Array.prototype.forEach;
        forEach.call(dropcapRef, function(dropcap) {
          layoutDropcap(dropcap, heightInLines, baselinePos);
        });
      } else {
        throw new TypeError("Dropcap.layout expects a single HTMLElement or a NodeList");
      }
    }
  };

})();

/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
    settings = $.extend({
      'minFontSize' : Number.NEGATIVE_INFINITY,
      'maxFontSize' : Number.POSITIVE_INFINITY
    }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
var level;
var attempt = -1;
var score;
var userTopScore = 0;
var outOf;
var multiplier;
var maxScore;

var levels = [
{
  id: "01",
  iv: [1.2, 500, 18],
  cv: [1.45, 500, 18],
  piq: 0,
  maxScore: 10,
  font: "Georgia",
  fallbackFont: "Serif",
  instructions: "Adjust the line-height to what you think best matches other parameters.",
  parameters: [
  {
    id: "lh",
    name: "line-height",
    adjust: true,
    values: [1.2, 1.8, 0.05]
  },
  {
    id: "lw",
    name: "max-width",
    adjust: false
  },
  {
    id: "fs",
    name: "font-size",
    adjust: false
  }
  ]
},
{
  id: "02",
  iv: [1.6, 400, 18],
  cv: [1.6, 630, 18],
  piq: 1,
  maxScore: 15,
  font: "Georgia",
  fallbackFont: "Serif",
  instructions: "Adjust the line width to what you think best matches other parameters.",
  parameters: [
  {
    id: "lh",
    name: "line-height",
    adjust: false
  },
  {
    id: "lw",
    name: "max-width",
    adjust: true,
    values: [300, 750, 10]
  },
  {
    id: "fs",
    name: "font-size",
    adjust: false
  }
  ]
},
{
  id: "03",
  iv: [1.3, 350, 20],
  cv: [1.3, 350, 16],
  piq: 2,
  maxScore: 5,
  font: "Georgia",
  fallbackFont: "Serif",
  instructions: "Adjust the font size to what you think best matches other parameters.",
  parameters: [
  {
    id: "lh",
    name: "line-height",
    adjust: false,
    values: [0.95, 2.2, 0.05]
  },
  {
    id: "lw",
    name: "max-width",
    adjust: false,
    values: [100, 1000, 1]
  },
  {
    id: "fs",
    name: "font-size",
    adjust: true,
    values: [11, 22, 1]
  }
  ]
},
{
  id: "04",
  iv: [2, 650, 20],
  cv: [1.55, 650, 20],
  piq: 0,
  maxScore: 10,
  font: "Georgia",
  fallbackFont: "Serif",
  instructions: "Adjust the line-height to what you think best matches other parameters.",
  parameters: [
  {
    id: "lh",
    name: "line-height",
    adjust: true,
    values: [1.3, 2.2, 0.05]
  },
  {
    id: "lw",
    name: "max-width",
    adjust: false,
    values: [100, 1000, 1]
  },
  {
    id: "fs",
    name: "font-size",
    adjust: false,
    values: [12, 29, 1]
  }
  ]
},
{
  id: "05",
  iv: [1.4, 750, 16],
  cv: [1.4, 500, 16],
  piq: 1,
  maxScore: 15,
  font: "Georgia",
  fallbackFont: "Serif",
  instructions: "Adjust the line width to what you think best matches other parameters.",
  parameters: [
  {
    id: "lh",
    name: "line-height",
    adjust: false,
    values: [0.95, 2.2, 0.05]
  },
  {
    id: "lw",
    name: "max-width",
    adjust: true,
    values: [300, 1000, 10]
  },
  {
    id: "fs",
    name: "font-size",
    adjust: false,
    values: [12, 29, 1]
  }
  ]
},
{
  id: "06",
  iv: [1.85, 750, 29],
  cv: [1.85, 750, 23],
  piq: 2,
  maxScore: 5,
  font: "Georgia",
  fallbackFont: "Serif",
  instructions: "Adjust the font size to what you think best matches other parameters.",
  parameters: [
  {
    id: "lh",
    name: "line-height",
    adjust: false,
    values: [0.95, 2.2, 0.05]
  },
  {
    id: "lw",
    name: "max-width",
    adjust: false,
    values: [100, 1000, 1]
  },
  {
    id: "fs",
    name: "font-size",
    adjust: true,
    values: [12, 29, 1]
  }
  ]
},
{
  id: "07",
  iv: [1, 750, 22],
  cv: [1.65, 750, 22],
  piq: 0,
  maxScore: 10,
  font: "Merriweather",
  fallbackFont: "Serif",
  instructions: "Adjust the line-height to what you think best matches other parameters.",
  parameters: [
  {
    id: "lh",
    name: "line-height",
    adjust: true,
    values: [0.9, 1.8, 0.05]
  },
  {
    id: "lw",
    name: "max-width",
    adjust: false,
    values: [100, 1000, 1]
  },
  {
    id: "fs",
    name: "font-size",
    adjust: false,
    values: [12, 29, 1]
  }
  ]
},
{
  id: "08",
  iv: [1.5, 250, 18],
  cv: [1.5, 600, 18],
  piq: 1,
  maxScore: 15,
  font: "Libre Baskerville",
  fallbackFont: "Serif",
  instructions: "Adjust the line width to what you think best matches other parameters.",
  parameters: [
  {
    id: "lh",
    name: "line-height",
    adjust: false,
    values: [0.95, 2.2, 0.05]
  },
  {
    id: "lw",
    name: "max-width",
    adjust: true,
    values: [100, 1000, 10]
  },
  {
    id: "fs",
    name: "font-size",
    adjust: false,
    values: [12, 29, 1]
  }
  ]
},
{
  id: "09",
  iv: [1.45, 500, 20],
  cv: [1.45, 500, 15],
  piq: 2,
  maxScore: 5,
  font: "Merriweather",
  fallbackFont: "Serif",
  instructions: "Adjust the font size to what you think best matches other parameters.",
  parameters: [
  {
    id: "lh",
    name: "line-height",
    adjust: false,
    values: [0.95, 2.2, 0.05]
  },
  {
    id: "lw",
    name: "max-width",
    adjust: false,
    values: [100, 1000, 1]
  },
  {
    id: "fs",
    name: "font-size",
    adjust: true,
    values: [10, 24, 1]
  }
  ]
},
{
  id: "10",
  iv: [1.1, 550, 17],
  cv: [1.55, 550, 17],
  piq: 0,
  maxScore: 10,
  font: "Libre Baskerville",
  fallbackFont: "Serif",
  instructions: "Adjust the line-height to what you think best matches other parameters.",
  parameters: [
  {
    id: "lh",
    name: "line-height",
    adjust: true,
    values: [0.9, 2.1, 0.05]
  },
  {
    id: "lw",
    name: "max-width",
    adjust: false,
    values: [100, 1000, 1]
  },
  {
    id: "fs",
    name: "font-size",
    adjust: false,
    values: [12, 29, 1]
  }
  ]
}
];

var numOfLevels = levels.length;


function startGame() {
  score = 0;
  outOf = 0;
  level = -1;
  // attempt++;
  if (attempt == -1){
    $(".triangle-game").fadeOut();
    setTimeout(function(){ $('.instructions').fadeIn(); }, 1000);
    setTimeout(function(){ $('.instructions .start').addClass('animated infinite pulse'); }, 5000);
    attempt++;
  } else {
    attempt++;
    $('.instructions').fadeOut();
    console.log("Attempt:" + attempt);
    $('#userScore').html(score);
    setTimeout(function(){ $('.outOf').html(outOf); }, 1200);
    $('#triangleBg').attr('stroke', '#353D44').removeClass('glow');
    $('#triangle').attr('stroke', '#F15D64');
    loadLevel();
  }
}

function loadLevel() {
  $('body').removeClass('hide-overflow');
  $('#next-level').fadeOut();
  $('#tryAgain').fadeOut();
  $('.book-msg').fadeOut();
  $('.form-triangle').fadeOut();
  setTimeout(function(){
    $(".score").fadeOut();
    $('#score').css('color', '#fff');
    $('.tweet-score .btn-tweet').remove();
   }, 1200);
  $(".tweet-score").fadeOut();
  $(".slider").remove();
  $('text.fs, text.lw, text.lh').attr('opacity', 0.4);
  level++;
  maxScore = levels[level].maxScore;

  // Update instructions
  $("#level-id").html(levels[level].id);
  $("#instructions").html(levels[level].instructions);
  $("#font").val(levels[level].font);

  var ivLh = levels[level].iv[0];
  var ivLw = levels[level].iv[1];
  var ivFs = levels[level].iv[2];
  var ivFont = levels[level].font + ", " + levels[level].fallbackFont;

  $(".result").css({
    "line-height": ivLh + "rem",
    width: ivLw + "px",
    "font-size": ivFs + "px",
    "font-family": ivFont
  });

  // Go through the level parameters
  for (i = 0; i < 3; i++) {
    var sliderValues;
    var paramString = levels[level].parameters[i].id;
    var paramId = "#" + paramString;
    var sliderName;

    // Set initial values
    if (paramString != "lh") {
      $(paramId).val(levels[level].iv[i] + "px");
    } else {
      $(paramId).val(levels[level].iv[i]);
    }

    // If param. adjustable add slider
    if (levels[level].parameters[i].adjust) {
      multiplier = levels[level].parameters[i].values[2];
      $(paramId).after(
        '<div class="slider slider-' +
        levels[level].parameters[i].id +
        '"></div>'
        );

      sliderValues = levels[level].parameters[i].values;
      sliderName = ".slider-" + paramString;

      $(sliderName).slider({
        value: levels[level].iv[i],
        min: sliderValues[0],
        max: sliderValues[1],
        step: sliderValues[2],
        change: function(e,ui){
          if (level == 0){
            $('#check').addClass('animated fadeInUpBig');
            $('.ui-slider-handle').removeClass('animated infinite pulse');
          }
        }
      });
    }
    if (level == 0){
      $('.ui-slider-handle').addClass('animated infinite pulse');
    }
  }

  $(".slider-lh").slider({
    slide: function(event, ui) {
      $("#lh").val(ui.value);
      $(".result").css("line-height", ui.value);
    }
  });

  $(".slider-lw").slider({
    slide: function(event, ui) {
      $("#lw").val(ui.value + "px");
      $(".result").css("width", ui.value);
    }
  });

  $(".slider-fs").slider({
    slide: function(event, ui) {
      $("#fs").val(ui.value + "px");
      $(".result").css("font-size", ui.value);
    }
  });

  // Show level
  $(".level").fadeIn();
}

function checkScore() {
  $('body').addClass('hide-overflow');

  var finalScore;
  var piq = levels[level].piq;
  var correctValue = levels[level].cv[piq]
  var sliderValue = $( ".slider" ).slider( "option", "value" );
  var result = Math.abs(correctValue - sliderValue);
  var r = Math.round((correctValue - sliderValue) / multiplier);


  if (result / multiplier < maxScore){
    finalScore = Math.round(maxScore - result / multiplier);
  } else {
    finalScore = 0;
  }

  var scoreMsg;
  var counterColour;
  var colourPositive = '#24D7D1';
  var colourNeutral = '#EAD079';
  var colourNegative = '#F15D64';

  if (maxScore == 5){
    if (maxScore - finalScore == 0){
      scoreMsg = "Perfect!";
      counterColour = colourPositive;
    } else if (maxScore - finalScore == 1){
      scoreMsg = "Well done";
      counterColour = colourPositive;
    } else if (maxScore - finalScore == 2){
      scoreMsg = "Not bad";
      counterColour = colourNeutral;
    } else if (maxScore - finalScore == 3){
      scoreMsg = "Could be better";
      counterColour = colourNeutral;
    } else if (maxScore - finalScore == 4){
      scoreMsg = "Way off";
      counterColour = colourNegative;
    } else if (maxScore - finalScore >= 5){
      scoreMsg = "Not even close";
      counterColour = colourNegative;
    }
  } else if (maxScore == 10 || maxScore == 15) {
    if (maxScore - finalScore == 0){
      scoreMsg = "Perfect!";
      counterColour = colourPositive;
    } else if (maxScore - finalScore >= 10){
      scoreMsg = "Way off!";
      counterColour = colourNegative;
    } else if (maxScore - finalScore >= 7){
      scoreMsg = "Could be better";
      counterColour = colourNegative;
    } else if (maxScore - finalScore >= 5){
      scoreMsg = "Not quite there";
      counterColour = colourNeutral;
    } else if (maxScore - finalScore >= 3){
      scoreMsg = "Not bad";
      counterColour = colourNeutral;
    } else if (maxScore - finalScore >= 1){
      scoreMsg = "Well done";
      counterColour = colourPositive;
    }
  }

  score = score + finalScore;
  outOf = outOf + maxScore;

  $('.scoreMsg').html(scoreMsg);
  setTimeout(function(){
    $('#userScore').html(score);
    $('.outOf').html(outOf);
  }, 1000);

  if (piq == 0){
    triangleResult = r / 2 * 10;
  } else if (piq == 2){
    triangleResult = -(r * 10);
  } else {
    triangleResult = (sliderValue- correctValue) / 2;
  }

  if (piq == 0 || piq == 2){
    if (Math.abs(triangleResult) > 60 && triangleResult < 0){
      triangleResult = -60;
    } else if (triangleResult > 60){
      triangleResult = 60;
    }
  } else {
    if (Math.abs(triangleResult) > 30 && triangleResult < 0){
      triangleResult = -30;
    } else if (triangleResult > 30) {
      triangleResult = 30;
    }
  }

  var triangle = document.getElementById('triangleAnimation');
  var tri = document.getElementById('triangle');
  var piqClass = levels[level].parameters[piq].id;
  var triangleCoordinates;

  var animTime = 300 + Math.abs(triangleResult) * 10 + 'ms';
  tri.setAttribute('points', '150,23 207,111 93,111');
  $('text.' + piqClass).attr('opacity', 1);

  if (triangleResult == 0){
    triangle.setAttribute('to','150,23 207,111 93,111');
    setTimeout(function(){ $('#triangleId').addClass('animated pulse2'); }, 2000);
    setTimeout(function(){ $('#triangleId').removeClass('animated pulse2'); }, 3000);
  } else {
    if (piq != 1){
      var tip = 150 + triangleResult;
      // tri.setAttribute('points', '120,13 177,101 63,101');
      setTimeout(function(){
        triangleCoordinates = tip + ',23 207,111 93,111';
        triangle.setAttribute('to',triangleCoordinates);
        triangle.setAttribute('dur',animTime);
        tri.setAttribute('points',triangleCoordinates);
      }, 2000);
    } else {
      var b = 207 + triangleResult;
      var c = 93 - triangleResult;
      // tri.setAttribute('points', '120,13 177,101 63,101');
      setTimeout(function(){
        triangleCoordinates = '150, 23 ' + b + ',111 ' + c + ', 111';
        triangle.setAttribute('to',triangleCoordinates);
        triangle.setAttribute('dur',animTime);
        tri.setAttribute('points',triangleCoordinates);
      }, 2000);
    }
  }

  setTimeout(function(){ triangle.beginElement(); }, 2000);

  $('.score h1').html('Level ' + levels[level].id);
  $('#score').html("<span class='counter' data-count='" + finalScore + "'>0</span>/" + maxScore).css('color', counterColour);
  $('.score hr').show();

  var countTime = 300 + Math.abs(triangleResult) * 10;

  function animateScore(){
    $('.anim').removeClass('fadeOutUpBig').addClass('animated');

    setTimeout(function(){
      $('.counter').each(function() {
        var $this = $(this),
        countTo = $this.attr('data-count');

        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },

        {
          duration: countTime,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          //alert('finished');
        }

      });
      });
    }, 2000);
  };

  $(".score").fadeIn();

  animateScore();

// Show next level link or final score
if (level < numOfLevels - 1){
  setTimeout(function(){ $('#next-level').fadeIn(); }, 4000);
} else {
    // Hide last level score
    setTimeout(function(){ $('.score-content').fadeOut(); }, 4000);

    // Final score attributes
    var triangleColour;
    var finalScoreTitle;
    var finalScoreResult;

    if (score <= 50){
      triangleColour = '#CD7F32';
      counterColour = colourNegative;
      finalScoreTitle = "Oops, you seem to be a";
      finalScoreResult = "Type newbie";
    } else if (score <= 85) {
      triangleColour = '#E8E8E2';
      counterColour = colourNeutral;
      finalScoreTitle = "Not bad, you’re a";
      finalScoreResult = "Type geek wannabe";
    } else {
      triangleColour = '#FFC300';
      counterColour = colourPositive;
      finalScoreTitle = "Well done you’re a";
      finalScoreResult = "Proper type geek";
    }

    // Book message
    var bookMsg;
    // var bookSwitch = 0;

    if( varEmail != null ){
      bookMsg = "<table><tbody><tr><td><img src='assets/images/better-web-type-book-cover-small.jpg' width='119'></td><td><h2>Get a chance to win a free <span>Better Web Type</span> book</h2><p><em>All you have to do is tweet your best score. The higher the score, the better the chance to win the free book.</em></p></td></tr></tbody></table>";
    } else {
      bookMsg = "<table><tbody><tr><td><img src='assets/images/better-web-type-book-cover-small.jpg' width='119'></td><td><h2>Get a chance to win the book <span>join Better Web Type</span></h2><p><em>You’ll get an occasional newsletter about producing better web typography and access to a free email course.</em></p></td></tr></tbody></table>";
    }

    // Show final score
    setTimeout(function(){
      tri.setAttribute('points','150,23 207,111 93,111');
      triangle.setAttribute('to','150,23 207,111 93,111');
      $('.score hr').hide();
      $('#triangleBg').attr('stroke', triangleColour).addClass('glow');
      $('#triangle').attr('stroke', triangleColour);
      $('svg text').attr('opacity', 0);
      $('.score-content h1').html(finalScoreTitle);
      $('.scoreMsg').html(finalScoreResult);
      $('#score').html("<span class='counter' data-count='" + score + "'>0</span>" + "/" + outOf).css('color', counterColour);
      $('#final-score').html(score);
      $('.outOf').html(outOf);
      $('.score-content').show();
      $('.book-msg').html(bookMsg);
      animateScore();
    }, 4500);
    var tweetUrl = "<a href='https://twitter.com/intent/tweet?url=https%3A%2F%2Fbetterwebtype.com%2Ftriangle&via=matejlatin&text=I%20scored%20" + score + "/" + outOf + "%20in%20the%20Perfect%20Paragraph%20game.%20Can%20you%20do%20better%20than%20me%3F%20&hashtags=BetterWebType' class='btn-tweet floatCenter' target='_blank'>Tweet this</a>";
    setTimeout(function(){ $('.tweet-score').append(tweetUrl).fadeIn(); }, 6000);
    setTimeout(function(){ $('#tryAgain').fadeIn(); }, 8000);
    setTimeout(function(){ $('.book-msg').fadeIn(); }, 8500);
    if( varEmail == null ){
      setTimeout(function(){ $('.form-triangle').fadeIn(); }, 8500);
    }

    // Update top score
    if (score > userTopScore){
      userTopScore = score;
    }
    // $('#FNAME').val(varName);
    // $('#LNAME').val(varSurname);
    // $('#EMAIL').val(varEmail);
    $('#ATTEMPT').val(attempt);
    $('#TOPSCORE').val(userTopScore);
    console.log("Top score: " + userTopScore);
    if( varEmail != null ){
      // submit form
      setTimeout(function(){ $('#theForm').submit(); }, 8500);
    }
  }
}

// Links
$(".start").click(function(e) {
  e.preventDefault();
  startGame();
  return false;
});

$("#tryAgain").click(function(e) {
  e.preventDefault();
  $('.anim').addClass('animated fadeOutUpBig');
  startGame();
  return false;
});

$("#check").click(function(e) {
  e.preventDefault();
  checkScore();
  return false;
});

$("#next-level").click(function(e) {
  e.preventDefault();
  $('.anim').addClass('animated fadeOutUpBig');
  loadLevel();
  return false;
});