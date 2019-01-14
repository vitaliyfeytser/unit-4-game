
var crystal1;
var crystal2;
var crystal3;
var crystal4;



var userWins;
var userLosses;



$(document).ready(function(){

    // Generate random number between 19 and 120

    // Math.floor(Math.random() * (max - min + 1)) + min;
    function randNumFunc() {
        var randNum = Math.floor(Math.random() * 102) + 19;
        console.log("randNum :" + randNum);
        $( "#random-num" ).html(randNum);
    }
    randNumFunc();

    // Generate random numbers for crystals between 1 and 9
    function crystalRandGen () {
        crystal1 = Math.floor(Math.random() * 9) + 1;
        crystal2 = Math.floor(Math.random() * 9) + 1;
        crystal3 = Math.floor(Math.random() * 9) + 1;
        crystal4 = Math.floor(Math.random() * 9) + 1;
        console.log("crystal1 :" + crystal1);
        console.log("crystal2 :" + crystal2);
        console.log("crystal3 :" + crystal3);
        console.log("crystal4 :" + crystal4);
    };
    crystalRandGen();

    // Add clicked crystal number to corresponding crystal variable

    var crystalSum = 0;

    $('#crystal1').click(function() {
        crystalSum = crystalSum + crystal1;
        console.log("crystalSum :" + crystalSum);
        $( "#crystal-sum" ).html(crystalSum);
    });

    $('#crystal2').click(function() {
        crystalSum = crystalSum + crystal2;
        console.log("crystalSum :" + crystalSum);
        $( "#crystal-sum" ).html(crystalSum);
    });

    $('#crystal3').click(function() {
        crystalSum = crystalSum + crystal3;
        console.log("crystalSum :" + crystalSum);
        $( "#crystal-sum" ).html(crystalSum);
    });

    $('#crystal4').click(function() {
        crystalSum = crystalSum + crystal4;
        console.log("crystalSum :" + crystalSum);
        $( "#crystal-sum" ).html(crystalSum);
    });


    // Compare the random number to crystaSum

    if (randNum > crystalSum) {
        alert("Sorry, you lose!");
        userLosses = userLosses + 1;
        console.log("userLosses :" + userLosses);
    };

    if (randNum > crystalSum) {
        alert("You won!");
        userWins = userWins + 1;
        console.log("userWins :" + userWins);
    };

    


});