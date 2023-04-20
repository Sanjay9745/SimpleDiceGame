function play(){
    var randomPlayer1 = Math.floor(Math.random()*6)+1;
    var randomPlayer2 = Math.floor(Math.random()*6)+1;
    var img1 = document.querySelector(".player1 img");
    var img2 = document.querySelector(".player2 img");
    imageSelector(randomPlayer1,img1);
    imageSelector(randomPlayer2,img2);
    winner(randomPlayer1,randomPlayer2);
}
function imageSelector(num,player){
    for(var i=1;i<=6;i++){
        if(num===i){
            player.setAttribute("src","dice/dice "+i+".png");
        }else{
            console.log("Something went wrong");
        }
    }
   
}
function winner(player1,player2){
    if(player1>player2){
        document.querySelector("#winner").innerHTML="Winner is Player 1";
    }else if(player1<player2){
        document.querySelector("#winner").innerHTML="Winner is Player 2";
    }else{
        document.querySelector("#winner").innerHTML="Draw Try Again";
    }
}