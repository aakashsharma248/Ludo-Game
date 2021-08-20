console.log("This is the file for my ludo program");

let getNumber=()=>{
    let player1=Math.floor(Math.random()*6)+1;
    let player1dice=`images/dice${player1}.png`;
    document.getElementById("check1").setAttribute('src',player1dice);

    let player2=Math.floor(Math.random()*6)+1;
    let player2dice=`images/dice${player2}.png`;
    document.getElementById("check2").setAttribute('src',player2dice);

    let text=document.getElementById("topHeading");
    if(player1>player2) 
    {
        text.innerHTML="Player 1 WON :)";
    }
    else if(player1<player2)
    {
        text.innerHTML="Player 2 WON :)";
    }
    else{
        text.innerHTML="DRAW :)";
    }
}