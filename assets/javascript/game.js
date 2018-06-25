$(document).ready(function () {
//Global Variables to be used later
    var ranNum;
    var wins = 0;
    var losses = 0;
    var gemNum1 = {
        id: "gem-1",
        randomNum: 0
    };
    var gemNum2 = {
        id: "gem-2",
        randomNum: 0
    };
    var gemNum3 = {
        id: "gem-3",
        randomNum: 0
    };
    var gemNum4 = {
        id: "gem-4",
        randomNum: 0
    };
    var gemArray = [gemNum1, gemNum2, gemNum3, gemNum4];

    var currentScore = 0;

    //generate number to be matched to
    function generateNum() {
        return Math.floor(Math.random() * 120);

    }
    //pushing variable to global var
    ranNum = generateNum();


    //writing to screen
    $("#guess-card").text("Number To Match: " + ranNum);

    //gems random number function
    function generateGemNum() {
        return Math.floor(Math.random() * 12);
    }
    //assiging to global var
    gemNum = generateGemNum();

    function checkGem(id) {
        for (i = 0; i < gemArray.length; i++) {
            if (gemArray[i].id === id) {
                return true;
            }
        }
    }

    //function to reset the game if won/loss
    function resetGame() {
        ranNum = generateNum();
        for (i = 0; i < gemArray.length; i++) {
            gemArray[i].randomNum = 0;
        }
        currentScore = 0;
        $("#guess-card").text("Number to Match: " + ranNum);
    }
    //score handler
    function handleScore() {
        $("#winner").text("Wins: " + wins);
        $("#loser").text("Losses: " + losses)
    }

    //sorts the crystals random numbers a stores them to global variables until reset
    $(".gem").on("click", function () {
        if (checkGem(this.id)) {
            for (j = 0; j < gemArray.length; j++) {
                if (gemArray[j].id === this.id && gemArray[j].randomNum === 0) {
                    gemArray[j].randomNum = generateGemNum();
                    currentScore = currentScore + gemArray[j].randomNum;
                } else if (gemArray[j].id === this.id) {
                    currentScore = currentScore + gemArray[j].randomNum;
                }
            }

        }

        //conditionals for wins/losses to reset game
        if (currentScore === ranNum) {
            wins++;
            resetGame();
            handleScore();

        } else if (currentScore > ranNum) {
            losses++;
            resetGame();
            handleScore();
        }
        $("#final-score").text(currentScore);
    });

});