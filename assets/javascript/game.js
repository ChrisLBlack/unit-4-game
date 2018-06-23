$(document).ready(function () {

    var ranNum;
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

    //generate number to be matched to
    function generateNum() {
        return Math.floor(Math.random() * 120);

    }
    //pushing variable to global scale
    ranNum = generateNum();
    console.log(ranNum);
    //writing to screen
    $("#guess-card").text(ranNum);

    //gems random number function
    function generateGemNum() {
        return Math.floor(Math.random() * 12);
    }
    //assiging to global var
    gemNum = generateGemNum();
    console.log(gemNum);

    function checkGem(id){
        for (i = 0; i < gemArray.length; i++){
            if (gemArray[i].id === id){
                console.log("true");
                return true;
            } else {
                console.log('back off')
            }
        }
    }
    checkGem('gem-2');



    $(".gem").on("click", function () {
        checkGem(this.id);
        console.log(this.id);

    });



});