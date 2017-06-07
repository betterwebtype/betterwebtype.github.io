var level;
var attempt = -1;
var score;
var userTopScore = 0;
var outOf;
var multiplier;
var maxScore;
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
// console.log(h);

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
  cv: [1.6, 650, 18],
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
  cv: [1.5, 650, 20],
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
  iv: [1.35, 750, 16],
  cv: [1.35, 500, 16],
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
  iv: [1, 800, 22],
  cv: [1.65, 800, 22],
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
  font: "Baskerville",
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
  iv: [1.4, 500, 20],
  cv: [1.4, 500, 15],
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
  cv: [1.5, 550, 17],
  piq: 0,
  maxScore: 10,
  font: "Baskerville",
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
    // console.log("Attempt:" + attempt);
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
      setTimeout(function(){
        $('.form-triangle').fadeIn();
        if ( h <= 710 ){
          $('.arrow').fadeIn().addClass('bounce infinite animated');
        }
      }, 8500);
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
    // console.log("Top score: " + userTopScore);
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

$(".score").on( 'scroll', function(){
   $('.arrow').fadeOut();
});