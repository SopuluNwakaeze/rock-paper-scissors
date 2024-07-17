function computersChoice(){
    var choiceArray = ["rock","paper","scissors"];
    var random = Math.random();
    if(random <= 0.3333333333333333){
        return choiceArray[0];
    }
    if( 0.666666666666666 >= random >= 0.333333333333333){
        return choiceArray[1];
    }
    else{
        return choiceArray[2];
    }
}

console.log(computersChoice())