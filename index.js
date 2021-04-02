var player_1 = 0;
var player_2 = 0;

function diceGame(){
    player_1 = Math.ceil(Math.random()*6);
    player_2 = Math.ceil(Math.random()*6);

//-----------------------------------------------------------PLAYER2-------------------------------------------------------------------------------
    
    if(player_1 === 1){
        document.querySelectorAll("img")[0].setAttribute("src", "dice1.png");
        }
        
    else if(player_1 === 2){
        document.querySelectorAll("img")[0].setAttribute("src", "dice2.png");
        }

    else if(player_1 === 3){
        document.querySelectorAll("img")[0].setAttribute("src", "dice3.png");
        }

    else if(player_1 === 4){
        document.querySelectorAll("img")[0].setAttribute("src", "dice4.png");
        }

    else if(player_1 === 5){
        document.querySelectorAll("img")[0].setAttribute("src", "dice5.png");
        }
    
    else if(player_1 === 6){
        document.querySelectorAll("img")[0].setAttribute("src", "dice6.png");
        }

//-----------------------------------------------------------PLAYER2-------------------------------------------------------------------------------

    if(player_2 === 1){
        document.querySelectorAll("img")[1].setAttribute("src", "dice1.png");
        }
            
    else if(player_2 === 2){
        document.querySelectorAll("img")[1].setAttribute("src", "dice2.png");
        }
    
    else if(player_2 === 3){
        document.querySelectorAll("img")[1].setAttribute("src", "dice3.png");
        }

    else if(player_2 === 4){
        document.querySelectorAll("img")[1].setAttribute("src", "dice4.png");
        }
    
    else if(player_2 === 5){
        document.querySelectorAll("img")[1].setAttribute("src", "dice5.png");
        }

    else if(player_2 === 6){
        document.querySelectorAll("img")[1].setAttribute("src", "dice6.png");
        }


    if(player_1 > player_2){
        document.querySelector("h2").textContent = "Player 1 wins!";
    }

    else if(player_1 < player_2){
        document.querySelector("h2").textContent = "Player 2 wins!";
    }

    else if(player_1 = player_2){
        document.querySelector("h2").textContent = "It's a Draw!";
    }
}