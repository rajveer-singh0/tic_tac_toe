let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".restart")
let winningmsg = document.querySelector(".winnermsg")


let count = 0;
let  Oturn = true;

const winpattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(Oturn){
            Oturn = false
            box.innerText = "O";
        }

        else{
            Oturn = true;
            box.innerText = "X";
        }
        
        box.disabled = true;
        count++;
        
        let itwinner = iswinner();
        if(count === 9 && !itwinner){
            draw();
        }
    })    
})

const iswinner = () =>{
    for(pattern of winpattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != '' && pos2 != '' && pos3 != ''){
            if(pos1 === pos2 && pos2 === pos3){
                winner(pos1);
                console.log(`winner is ${pos1}`);
                return true;
            }
        }
    }
}

const draw = ()=>{
    winningmsg.style.display = 'block';
    winningmsg.innerText = "it`s Draw "
}

const winner = (pos) =>{
    winningmsg.style.display = 'block';
    winningmsg.innerText = `${pos} Won`
}

reset.addEventListener("click", ()=>{
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
        winningmsg.style.display = 'none';
    })
})