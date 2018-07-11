// Level specifications
var allowedMoves = 45;
var allowedTime = '03:00';
var lvlPairs = 14;

// Level success vars
var lvlSuccessTitle = 'Well done';
var lvlFailTitle = 'Not bad';

// cards array holds all cards
let card = document.getElementsByClassName("card");
let cards = [...card];
// console.log(cards);
// console.log(cards.length);

// deck of all cards in game
const deck = document.getElementById("card-deck");

// declaring move variable
let moves = 0;
let counter = document.querySelector(".moves");

// declare pairs variable
let pairsFound = 0;

// declaring variable of matchedCards
let matchedCard = document.getElementsByClassName("match");

 // close icon in modal
 let closeicon = document.querySelector(".close");

 // declare modal
 let modal = document.getElementById("popup1")

 // array for opened cards
var openedCards = [];


// @description shuffles cards
// @param {array}
// @returns shuffledarray
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};


// @description shuffles cards when page is refreshed / loads
document.body.onload = startGame();


// @description function to start a new play
function startGame(){
    // shuffle deck
    cards = shuffle(cards);
    // remove all exisiting classes from each card
    for (var i = 0; i < cards.length; i++){
      deck.innerHTML = "";
      [].forEach.call(cards, function (item) {
          deck.appendChild(item);
      });
      cards[i].classList.remove("show", "open", "match", "disabled", "o-0");
    }
    // reset moves
    moves = 0;
    counter.innerHTML = moves;
    // reset pairs pairs-found
    pairsFound = 0;
    $('.pairs-found').html(pairsFound);
    //reset timer
    second = 0;
    minute = 0;
    hour = 0;
    var timer = document.querySelector(".timer");
    timer.innerHTML = "00:00";
    clearInterval(interval);
}


// @description toggles open and show class to display cards
var displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};


// @description add opened cards to OpenedCards list and check if cards are match or not
function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){
        moveCounter();
        if(openedCards[0].type === openedCards[1].type){
            matched();
            congratulations();
        } else {
            unmatched();
        }
    }
}


// @description when cards match
function matched(){
    pairsFound++;
    $('.pairs-found').html(pairsFound);
    openedCards[1].classList.add("open");
    setTimeout(function(){
      openedCards[0].classList.add("match", "disabled");
      openedCards[1].classList.add("match", "disabled");
    }, 750);
    setTimeout(function(){
      openedCards[0].classList.remove("show", "open", "no-event");
      openedCards[1].classList.remove("show", "open", "no-event");
    }, 1500);
    setTimeout(function() {
      openedCards[0].classList.add("o-0");
      openedCards[1].classList.add("o-0");
      openedCards = [];
    }, 1500);
}


// description when cards don't match
function unmatched(){
  openedCards[1].classList.add("open");
  disable();
    setTimeout(function(){
      openedCards[0].classList.add("unmatched");
      openedCards[1].classList.add("unmatched");
    }, 750);
    setTimeout(function(){
      openedCards[0].classList.add("flipClose");
      openedCards[1].classList.add("flipClose");
      openedCards[0].classList.remove("unmatched", "open", "show");
      openedCards[1].classList.remove("unmatched", "open", "show");
    }, 1500);
    setTimeout(function(){
      openedCards[0].classList.remove("flipClose", "no-event");
      openedCards[1].classList.remove("flipClose", "no-event");
      enable();
      openedCards = [];
    }, 1900);
}


// @description disable cards temporarily
function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add('disabled');
    });
}


// @description enable cards and disable matched cards
function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(var i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }
    });
}


// @description count player's moves
function moveCounter(){
    moves++;
    counter.innerHTML = moves;
    //start timer on first click
    if(moves == 1){
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }
}

function n(n){
    return n > 9 ? "" + n: "0" + n;
}


// @description game timer
var second = 0, minute = 0; hour = 0;
var timer = document.querySelector(".timer");
var timerRead;
var interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = n(minute) + ":" + n(second);
        timerRead = minute + 'm and ' + second + 's';
        second++;
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    }, 1000);
}


// @description congratulations when all cards match, show modal and moves, time and rating
function congratulations(){
    if (pairsFound == lvlPairs){ // Change to match the level cards
        clearInterval(interval);
        finalTime = timer.innerHTML;

        // show congratulations modal
        setTimeout(function(){
          modal.classList.add("show");
        }, 2000);

        //showing move, rating, time on modal
        document.getElementById("finalMove").innerHTML = moves;
        document.getElementById("totalTime").innerHTML = finalTime;
        console.log(finalTime);
        console.log(String(finalTime));

        // Set share links
        var shareTw = 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fbetterwebtype.com%2Ffont-memory-game.html&via=matejlatin&text=I%20completed%20the%20Hard%20mode%20of%20the%20Font%20Memory%20Game%20in%20' + moves + '%20moves%20and%20it%20took%20me%20' + timerRead + '.&hashtags=typography%2C%20webdesign%2C%20BetterWebType';
        var shareFb = 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbetterwebtype.com%2Ffont-memory-game.html&quote=I%20completed%20the%20Hard%20mode%20of%20the%20Font%20Memory%20Game%20in%20' + moves + '%20moves%20and%20it%20took%20me%20' + timerRead + '.';
        $('.game .shareTw').attr("href", shareTw);
        $('.game .shareFb').attr("href", shareFb);

        // check score
        if (moves <= allowedMoves && finalTime <= allowedTime){
          $('#popup1 h2').html(lvlSuccessTitle);
          $('.fmg-btn-next, .level-complete').addClass('show-element');
        } else {
          $('#popup1 h2').html(lvlFailTitle);
          $('.fmg-btn-again, .game-over').addClass('show-element');
        }
    };
}


// @description close icon on modal
function closeModal(){
    closeicon.addEventListener("click", function(e){
        modal.classList.remove("show");
        startGame();
    });
}


// @desciption for user to play Again
function playAgain(){
    modal.classList.remove("show");
    $('.fmg-btn-again, .game-over').removeClass('show-element');
    startGame();
}

// Restart game button
$('.fmg-btn-again').on('click', function (){
  playAgain ();
});

$('.fmg-btn-start').on('click', function(){
  $('.fmg-splash').fadeOut();
});


// loop to add event listeners to each card
for (var i = 0; i < cards.length; i++){
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", cardOpen);
    // card.addEventListener("click", congratulations);
};