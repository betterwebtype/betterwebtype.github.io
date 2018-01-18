var score = 0;

var surveyJSON = {
 completeText: "Get your score",
 pages: [
  {
   elements: [
    {
     type: "radiogroup",
     choices: [
      {
       value: "A",
       text: "A group of multiple font styles (Helvetica Light, Helvetica Italic etc.) and is also commonly referred to as “Font family”."
      },
      {
       value: "B",
       text: "A single style from a font family, for example Helvetica Bold."
      },
      {
       value: "C",
       text: "Both of the above."
      }
     ],
     correctAnswer: "B",
     isRequired: true,
     name: "What is considered a “font”?"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "A",
       text: "a"
      },
      {
       value: "B",
       text: "b"
      },
      {
       value: "C",
       text: "c"
      }
     ],
     correctAnswer: "C",
     isRequired: true,
     name: "Which of the three paragraphs below do you think is typographically best shaped?"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "A",
       text: "Line height"
      },
      {
       value: "B",
       text: "Leading"
      },
      {
       value: "C",
       text: "x-height"
      },
      {
       value: "D",
       text: "Tracking"
      }
     ],
     correctAnswer: "C",
     isRequired: true,
     name: "What’s the name of the marked part in the image below?"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "A",
       text: "Arm"
      },
      {
       value: "B",
       text: "Tie"
      },
      {
       value: "C",
       text: "Horizontal Bar"
      },
      {
       value: "D",
       text: "Crossbar"
      }
     ],
     correctAnswer: "C",
     isRequired: true,
     name: "What is the name of the marked part in the image below?"
    },
    {
     type: "checkbox",
     choices: [
      {
       value: "A",
       text: "Popularity of the typeface"
      },
      {
       value: "B",
       text: "The content of the website"
      },
      {
       value: "C",
       text: "Reader expectations"
      },
      {
       value: "D",
       text: "Amount of website traffic"
      },
      {
       value: "E",
       text: "The author of the typeface"
      },
      {
       value: "F",
       text: "Language support"
      },
      {
       value: "G",
       text: "Font size in kilobytes"
      }
     ],
     correctAnswer: [
      "B",
      "C",
      "F",
      "G"
     ],
     isRequired: true,
     name: "What should a web designer consider when choosing a typeface for a website?",
     validators: [
      {
       type: "answercount",
       maxCount: 4,
       minCount: 1
      }
     ]
    },
    {
     type: "checkbox",
     choices: [
      {
       value: "A",
       text: "Based on similar x-height"
      },
      {
       value: "B",
       text: "Based on same style classification (Old-style serif, slab serif etc.)"
      },
      {
       value: "C",
       text: "Based on author"
      },
      {
       value: "D",
       text: "Based on overall similarity"
      }
     ],
     correctAnswer: [
      "C",
      "A"
     ],
     isRequired: true,
     name: "Which of the listed methods of combining typefaces are common?",
     validators: [
      {
       type: "answercount",
       maxCount: 2,
       minCount: 1
      }
     ]
    },
    {
     type: "checkbox",
     choices: [
      {
       value: "A",
       text: "Letter-spacing"
      },
      {
       value: "B",
       text: "Kerning"
      },
      {
       value: "C",
       text: "Text alignment"
      },
      {
       value: "D",
       text: "Line length"
      },
      {
       value: "E",
       text: "Height of letters"
      }
     ],
     correctAnswer: [
      "A",
      "B",
      "C"
     ],
     isRequired: true,
     name: "What of the below affects horizontal rhythm in typography?",
     validators: [
      {
       type: "answercount",
       maxCount: 3,
       minCount: 1
      }
     ]
    },
    {
     type: "checkbox",
     choices: [
      {
       value: "A",
       text: "Set the body text font size to 16 pixels"
      },
      {
       value: "B",
       text: "Set different body text font sizes for different screen sizes"
      },
      {
       value: "C",
       text: "Use a scale to define other text sizes"
      },
      {
       value: "D",
       text: "Use what visually looks best for all other text sizes"
      }
     ],
     correctAnswer: [
      "B",
      "C"
     ],
     isRequired: true,
     name: "Which of the below  steps are common good practice in defining font sizes?",
     validators: [
      {
       type: "answercount",
       maxCount: 2,
       minCount: 1
      }
     ]
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "A",
       text: "Old-style"
      },
      {
       value: "B",
       text: "Tabular"
      },
      {
       value: "C",
       text: "Lining"
      },
      {
       value: "D",
       text: "Proportional"
      }
     ],
     correctAnswer: "A",
     isRequired: true,
     name: "What style of figures is the one pictured below?"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "A",
       text: "In documents with lots of numerical values that need to align well, usually in tables"
      },
      {
       value: "B",
       text: "In content where the numerical values need to stand out from the body text"
      },
      {
       value: "C",
       text: "In body text, so the numerical values blend in with lowercase letters better and don’t disrupt the fabric of text"
      },
      {
       value: "D",
       text: "When the website needs to have an antique look"
      }
     ],
     correctAnswer: "C",
     isRequired: true,
     name: "What is the figure style from the question before usually used for?"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "A",
       text: "It’s a symbol that originates from the early typewriters and was designed as a shortcut for writing “and” (one of the most commonly used words)."
      },
      {
       value: "B",
       text: "It’s a combination of letters “e” and “t”, “et” in Latin meaning “and”."
      },
      {
       value: "C",
       text: "It’s a symbolic combination of letters “a” and “d” and is simply a short way of writing “and”."
      }
     ],
     correctAnswer: "B",
     isRequired: true,
     name: "What is the origin of the ampersand (the “&” symbol)?"
    },
    {
     type: "checkbox",
     choices: [
      {
       value: "A",
       text: "Replace the straight quotation marks with the curly ones"
      },
      {
       value: "B",
       text: "Remove the quotation marks altogether"
      },
      {
       value: "C",
       text: "Replace the apostrophe with a single straight quotation mark"
      },
      {
       value: "D",
       text: "Use hanging punctuation so that the first quotation mark hangs outside of the body of text"
      }
     ],
     correctAnswer: [
      "A",
      "D"
     ],
     isRequired: true,
     name: "What would you correct in the paragraph below to make it “typographically correct”?",
     validators: [
      {
       type: "answercount",
       maxCount: 2,
       minCount: 1
      }
     ]
    }
   ],
   name: "page1"
  }
 ],
 requiredText: "",
 showCompletedPage: false,
 showTitle: false,
 title: "Web Typography Quiz"
}

var img1 = '<figure class="paragraph_img"><picture><source srcset="assets/images/p1@2x.jpg 2x, assets/images/p1.jpg" media="(max-width: 450px)"><source srcset="assets/images/p1@2x.jpg 2x, assets/images/p1.jpg"><img src="assets/images/p1.jpg" alt="Paragraph"></picture></figure><figure class="paragraph_img"><picture><source srcset="assets/images/p2@2x.jpg 2x, assets/images/p2.jpg" media="(max-width: 450px)"><source srcset="assets/images/p2@2x.jpg 2x, assets/images/p2.jpg"><img src="assets/images/p2.jpg" alt="Paragraph"></picture></figure><figure class="paragraph_img"><picture><source srcset="assets/images/p3@2x.jpg 2x, assets/images/p3.jpg" media="(max-width: 450px)"><source srcset="assets/images/p3@2x.jpg 2x, assets/images/p3.jpg"><img src="assets/images/p3.jpg" alt="Paragraph"></picture></figure>';

// var img2 = '';

// var img3 = '<figure><picture class=""><source srcset="assets/images/p3@2x.jpg 2x, assets/images/p3.jpg" media="(max-width: 450px)"><source srcset="assets/images/p3@2x.jpg 2x, assets/images/p3.jpg"><img src="assets/images/p3.jpg" alt="Paragraph"></picture></figure>';

var img4 = '<figure><picture class=""><source srcset="assets/images/Anatomy-mobile@2x.jpg 2x, assets/images/Anatomy-mobile.jpg" media="(max-width: 450px)"><source srcset="assets/images/Anatomy@2x.jpg 2x, assets/images/Anatomy.jpg"><img src="assets/images/Anatomy.jpg" alt="Anatomy"></picture></figure>';

var img5 = '<figure><picture class=""><source srcset="assets/images/Anatomy-2-mobile@2x.jpg 2x, assets/images/Anatomy-2-mobile.jpg" media="(max-width: 450px)"><source srcset="assets/images/Anatomy-2@2x.jpg 2x, assets/images/Anatomy-2.jpg"><img src="assets/images/Anatomy-2.jpg" alt="Anatomy"></picture></figure>';

var img6 = '<figure><picture class=""><source srcset="assets/images/Figures-mobile@2x.jpg 2x, assets/images/Figures-mobile.jpg" media="(max-width: 450px)"><source srcset="assets/images/Figures@2x.jpg 2x, assets/images/Figures.jpg"><img src="assets/images/Figures.jpg" alt="Figures"></picture></figure>';

var img7 = '<figure><picture class=""><source srcset="assets/images/quotes-mobile.jpg 2x, assets/images/quotes-mobile.jpg" media="(max-width: 450px)"><source srcset="assets/images/quotes@2x.jpg 2x, assets/images/quotes.jpg"><img src="assets/images/quotes.jpg" alt="Quotes"></picture></figure>';

// Check the score
function checkQuizScore(s){
  // Get answers data from quiz
  var quizResults = s.data;

  // Turn object into an array + get length
  var ra = Object.values(quizResults);
  var rl = ra.length;
  i = 0;

  // Go through answers
  while (i < rl) {
    var a = ra[i];
    var ca = surveyJSON.pages[0].elements[i].correctAnswer;
    if (a.constructor == Array){
      var al = Object.values(a).length;
      for ( var j = 0; j < al; j++){
        if (ca.indexOf(a[j]) > -1){
          score = score + 5;
        }
      }
    } else {
      if (a == ca){
        score = score + 5;
      }
    }
    i++;
  }

  // Show results
  showScore();
}

// Show the score
function showScore(){
  var title;
  var msg;
  var cta;
  var style;
  var shareTw = 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fbetterwebtype.com%2Fweb-typography-quiz&via=%40matejlatin&text=I%20scored%20' + score + '/100%20in%20the%20web%20typography%20quiz&hashtags=typography%2C%20webdesign';
  var shareFb = 'https://www.facebook.com/sharer/sharer.php?u=betterwebtype.com/web-typography-quiz&quote=I%20scored%20' + score + '/100%20on%20the%20web%20typography%20quiz.';

  if (score < 50) {
    title = 'Oh no!';
    msg = 'Oh no! It seems you don’t know much about web typography. No worries, we can fix that!'
    cta = '7 free lessons that will help you understand web typography.';
    style = 'bad';
  } else if (score >= 50 && score < 75){
    title = 'Not bad';
    msg = 'Not bad, you know some stuff when it comes to web typography but could be better.'
    cta = '7 free lessons that will help you understand web typography.';
    style = 'average';
  } else if (score >= 75){
    title = 'Well done';
    msg = 'Well done, you know your shit when it comes to web typography.'
    cta = '7 free lessons that will help you understand web typography even better.';
    style = 'good';
  }

  $('body').addClass('fixed_position');
  $('.quiz_results .msg').append(msg);
  $('.quiz_results .cta').append(cta);
  $('.quiz_results .quiz_score span').append(score);
  $('.quiz_results .quiz_score span').attr('data-count', score);
  $('.quiz_results .quiz_score').addClass(style);
  $('.quiz_results .shareTw').attr("href", shareTw);
  $('.quiz_results .shareFb').attr("href", shareFb);
  $('.quiz_results').fadeIn(300);
  setTimeout(function(){
    $('.quiz_score, .msg').addClass('animated fadeIn');
  }, 300);
  setTimeout(function(){
    $('.counter').each(function () {
      $(this).prop('Counter',0).animate({
        Counter: $(this).text()
      }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
      });
    });
  }, 300);
  setTimeout(function(){
    $('.share_title, .shareTw, .shareFb').addClass('animated fadeIn');
  }, 600);
  setTimeout(function(){
    $('.course_hr').addClass('animated fadeIn');
  }, 900);
  setTimeout(function(){
    $('.course_title').addClass('animated fadeInUpBig');
  }, 1100);
  setTimeout(function(){
    $('.cta').addClass('animated fadeInUpBig');
  }, 1300);
  setTimeout(function(){
    $('.course_button').addClass('animated fadeInUpBig');
  }, 1500);
}

$('.take_quiz').on('click', function(){
  $('.intro-wrap').fadeOut(300);
  setTimeout(function(){
    $('.quiz').fadeIn(300);
    $('html, body').animate({scrollTop : 0},300);
  }, 300);
});

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
  model: survey,
  onComplete: checkQuizScore
});

$('#sq_101').parent().append(img1);
$('#sq_102').append(img4);
$('#sq_103').append(img5);
$('#sq_108').append(img6);
$('#sq_111').append(img7);