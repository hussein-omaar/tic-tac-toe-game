//SELECTORS
let ticTac = document.querySelector('.tic-tac');
let box = document.querySelectorAll('.box');
let player1 = 'o';
let player2 = 'x';
let playerTurn;
let winningMessage = document.querySelector('.Xwinning-message');
let oWinningMessage = document.querySelector('.Owinning-message');
let OWinningTimes = document.querySelector('.o-winning-times');
let XWinningTimes = document.querySelector('.x-winning-times');
let ties = document.querySelector('.tiest-counter')
let xRestart = document.querySelector('.x-btn');
let oRestart = document.querySelector('.o-btn');
let restart = document.querySelector('.fa-arrow-rotate-right');
let oTurn = document.getElementById('o-turn');
let xTurn = document.getElementById('x-turn');




//EVENTLISTENERS
xRestart.addEventListener('click', playAgain);
oRestart.addEventListener('click', playAgain)
restart.addEventListener('click', restartGame);




//Remove Hidden Class
xTurn.classList.remove('hide');




//FUNCTIONS

function restartGame() {


    for (let z = 0; ticTac.children.length; z++) {

        ticTac.children[z].classList.remove('o');
        ticTac.children[z].classList.remove('x');

        box.forEach(ele => {


            ele.addEventListener('click', handleClick, { once: true });

        })


    }
}



function playAgain() {


    for (let j = 0; j < ticTac.children.length; j++) {


        ticTac.children[j].classList.remove('o');
        ticTac.children[j].classList.remove('x');
        oWinningMessage.classList.add('hide');
        winningMessage.classList.add('hide');


        box.forEach(ele => {

            ele.addEventListener('click', handleClick, { once: true });

        })

    }
}


box.forEach(ele => {

    ele.addEventListener('click', handleClick, { once: true });


})

function handleClick(e) {

    let targetedElement = e.target;

    const currentClass = playerTurn ? player1 : player2;

    placeMark(targetedElement, currentClass);
    switchPlayer();
    playerX();
    playerO();


}

function placeMark(targetedElement, currentClass) {


    targetedElement.classList.add(currentClass);

}

function switchPlayer() {


    playerTurn = !playerTurn
}

function playerX() {


    if (ticTac.children[3].classList.contains('x') && (ticTac.children[4].classList.contains('x')) && (ticTac.children[5].classList.contains('x'))) {


        winningMessage.classList.remove('hide');
        XWinningTimes.textContent++;
        ties.textContent++;
        oTurn.classList.remove('hide');
        xTurn.classList.add('hide');

        box.forEach(ele => {

            ele.removeEventListener('click', handleClick, { once: true })

        })

    }


    if (ticTac.children[6].classList.contains('x') && (ticTac.children[7].classList.contains('x')) && (ticTac.children[8].classList.contains('x'))) {

        winningMessage.classList.remove('hide');
        XWinningTimes.textContent++;
        ties.textContent++;
        oTurn.classList.remove('hide');
        xTurn.classList.add('hide');



        box.forEach(ele => {

            ele.removeEventListener('click', handleClick, { once: true })

        })
    }
    if (ticTac.children[9].classList.contains('x') && (ticTac.children[10].classList.contains('x')) && (ticTac.children[11].classList.contains('x'))) {


        winningMessage.classList.remove('hide');
        XWinningTimes.textContent++;
        ties.textContent++;
        oTurn.classList.remove('hide');
        xTurn.classList.add('hide');

        box.forEach(ele => {

            ele.removeEventListener('click', handleClick, { once: true })


        })
    }


    if (ticTac.children[3].classList.contains('x') && (ticTac.children[7].classList.contains('x')) && (ticTac.children[11].classList.contains('x'))) {


        winningMessage.classList.remove('hide');
        XWinningTimes.textContent++;
        ties.textContent++;
        oTurn.classList.remove('hide');
        xTurn.classList.add('hide');


        box.forEach(ele => {

            ele.removeEventListener('click', handleClick, { once: true })

        })
    }
    if (ticTac.children[5].classList.contains('x') && (ticTac.children[7].classList.contains('x')) && (ticTac.children[9].classList.contains('x'))) {


        winningMessage.classList.remove('hide');
        XWinningTimes.textContent++;
        ties.textContent++;
        oTurn.classList.remove('hide');
        xTurn.classList.add('hide');


        box.forEach(ele => {

            ele.removeEventListener('click', handleClick, { once: true })

        })
    }
    if (ticTac.children[9].classList.contains('x') && (ticTac.children[10].classList.contains('x')) && (ticTac.children[11].classList.contains('x'))) {


        winningMessage.classList.remove('hide');
        XWinningTimes.textContent++;
        ties.textContent++;
        oTurn.classList.remove('hide');
        xTurn.classList.add('hide');


        box.forEach(ele => {

            ele.removeEventListener('click', handleClick, { once: true })

        })
    }


    if (ticTac.children[3].classList.contains('x') && (ticTac.children[6].classList.contains('x')) && (ticTac.children[9].classList.contains('x'))) {


        winningMessage.classList.remove('hide');
        XWinningTimes.textContent++;
        ties.textContent++;
        oTurn.classList.remove('hide');
        xTurn.classList.add('hide');


        box.forEach(ele => {

            ele.removeEventListener('click', handleClick, { once: true })

        })
    }
    if (ticTac.children[4].classList.contains('x') && (ticTac.children[7].classList.contains('x')) && (ticTac.children[10].classList.contains('x'))) {


        winningMessage.classList.remove('hide');
        XWinningTimes.textContent++;
        ties.textContent++;
        oTurn.classList.remove('hide');
        xTurn.classList.add('hide');


        box.forEach(ele => {

            ele.removeEventListener('click', handleClick, { once: true })

        })
    }
    if (ticTac.children[5].classList.contains('x') && (ticTac.children[8].classList.contains('x')) && (ticTac.children[11].classList.contains('x'))) {


        winningMessage.classList.remove('hide');
        XWinningTimes.textContent++;
        ties.textContent++;
        oTurn.classList.remove('hide');
        xTurn.classList.add('hide');



        box.forEach(ele => {

            ele.removeEventListener('click', handleClick, { once: true })

        })
    }

}


function playerO() {



    if (ticTac.children[3].classList.contains('o') && (ticTac.children[4].classList.contains('o')) && (ticTac.children[5].classList.contains('o'))) {



        oWinningMessage.classList.remove('hide');

        OWinningTimes.textContent++;
        ties.textContent++;
        xTurn.classList.remove('hide');
        oTurn.classList.add('hide');
        box.forEach(ele => {

            ele.removeEventListener('click', handleClick, { once: true })

        })
    }


    if (ticTac.children[6].classList.contains('o') && (ticTac.children[7].classList.contains('o')) && (ticTac.children[8].classList.contains('o'))) {


        oWinningMessage.classList.remove('hide');
        OWinningTimes.textContent++;
        ties.textContent++;
        xTurn.classList.remove('hide');
        oTurn.classList.add('hide');


        box.forEach(ele => {

            ele.removeEventListener('click', handleClick, { once: true })

        })
    }


    if (ticTac.children[9].classList.contains('o') && (ticTac.children[10].classList.contains('o')) && (ticTac.children[11].classList.contains('o'))) {



        oWinningMessage.classList.remove('hide');
        OWinningTimes.textContent++;
        ties.textContent++;
        xTurn.classList.remove('hide');
        oTurn.classList.add('hide');


        box.forEach(ele => {

            ele.removeEventListener('click', handleClick, { once: true })

        })
    }
    if (ticTac.children[3].classList.contains('o') && (ticTac.children[7].classList.contains('o')) && (ticTac.children[11].classList.contains('o'))) {


        oWinningMessage.classList.remove('hide');
        OWinningTimes.textContent++;
        ties.textContent++;
        xTurn.classList.remove('hide');
        oTurn.classList.add('hide');


        box.forEach(ele => {

            ele.removeEventListener('click', handleClick, { once: true })

        })
    }


    if (ticTac.children[5].classList.contains('o') && (ticTac.children[7].classList.contains('o')) && (ticTac.children[9].classList.contains('o'))) {


        oWinningMessage.classList.remove('hide');
        OWinningTimes.textContent++;
        ties.textContent++;
        xTurn.classList.remove('hide');
        oTurn.classList.add('hide');


        box.forEach(ele => {

            ele.removeEventListener('click', handleClick, { once: true })

        })
    }
    if (ticTac.children[9].classList.contains('o') && (ticTac.children[10].classList.contains('o')) && (ticTac.children[11].classList.contains('o'))) {


        oWinningMessage.classList.remove('hide');
        OWinningTimes.textContent++;
        ties.textContent++;
        xTurn.classList.remove('hide');
        oTurn.classList.add('hide');


        box.forEach(ele => {

            ele.removeEventListener('click', handleClick, { once: true })

        })
    }
    if (ticTac.children[3].classList.contains('o') && (ticTac.children[6].classList.contains('o')) && (ticTac.children[9].classList.contains('o'))) {


        oWinningMessage.classList.remove('hide');
        OWinningTimes.textContent++;
        ties.textContent++;
        xTurn.classList.remove('hide');
        oTurn.classList.add('hide');


        box.forEach(ele => {

            ele.removeEventListener('click', handleClick, { once: true })

        })
    }


    if (ticTac.children[4].classList.contains('o') && (ticTac.children[7].classList.contains('o')) && (ticTac.children[10].classList.contains('o'))) {


        oWinningMessage.classList.remove('hide');
        OWinningTimes.textContent++;
        ties.textContent++;
        xTurn.classList.remove('hide');
        oTurn.classList.add('hide');


        box.forEach(ele => {

            ele.removeEventListener('click', handleClick, { once: true })

        })
    }
    if (ticTac.children[5].classList.contains('o') && (ticTac.children[8].classList.contains('o')) && (ticTac.children[11].classList.contains('o'))) {


        oWinningMessage.classList.remove('hide');
        OWinningTimes.textContent++;
        ties.textContent++;
        xTurn.classList.remove('hide');
        oTurn.classList.add('hide');


        box.forEach(ele => {

            ele.removeEventListener('click', handleClick, { once: true })

        })
    }

}
