
// Button colors and game pattern variables
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStarted = false;

// play button audio on click
function playAudio(btnColor) {
    var audioPath = 'sounds/' + btnColor + '.mp3';
    (new Audio(audioPath)).play();
}

// get next color of sequence
function nextSequence() {

    level++;
    $('h1').text('Level ' + level);
    var randomNumber = Math.floor(Math.random() * 3);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $('#' + randomChosenColor).fadeOut(100).fadeIn(100);
    playAudio(randomChosenColor);
}

// on button click: 
//   1) animate button
//   2) play button audio
$('.btn').click(function () {
    var userChosenColor = this.id
    userClickedPattern.push(userChosenColor);
    playAudio(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log('success');
        
        // if sequence (level) is finished
        if (currentLevel == gamePattern.length - 1) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
            userClickedPattern = [];
        }
    } else {
        playAudio('wrong');
        $('body').addClass('game-over');
        setTimeout(function () {$('body').removeClass('game-over')}, 200);
        $('#level-title').text('Game Over, Press Any Key to Restart');
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    gameStarted = false;
    userClickedPattern = [];
}

function animatePress(currentColor) {
    $('#' + currentColor).addClass('pressed');
    setTimeout(function() { $('#' + currentColor).removeClass('pressed')
    }, 100);
}

$(document).keydown(function() {
    if (!gameStarted) {
        gameStarted = true;
        nextSequence();
    }
})
