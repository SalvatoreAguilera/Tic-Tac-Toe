
function newGame() {
    var boxes = document.getElementsByClassName("box");
        
    for(let i =0; i<9; i++){

        boxes[i].innerHTML = " ";
        count = 0;
    }
//input for each box
    for(let i=0;i<9;i++){
        var count = 0;
        boxes[i].addEventListener("click",e => {
            count++;   
            if(count % 2 !== 0){
            boxes[i].innerHTML = "X";       
            }
            else {
                boxes[i].innerHTML = "O";                
            }
            if(winningConditions(boxes)){
                alert("WE HAVE A WINNER");
                
            }
        }, {once : true});
    }
}

function winningConditions(boxes){
    const toWin = [
        [0,1,2],[3,4,5],
        [6,7,8],[0,4,8],
        [2,4,6],[0,3,6],
        [1,4,7],[2,5,8]
    ]
    for(let i=0;i<toWin.length;i++){
        const [a,b,c] = toWin[i];
        if(boxes[a].innerHTML !== " " && boxes[a].innerHTML === boxes[b].innerHTML && boxes[b].innerHTML === boxes[c].innerHTML){
            return true;
        }
    }
    return false;
}




