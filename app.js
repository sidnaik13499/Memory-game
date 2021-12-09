document.addEventListener('DOMContentLoaded', ()=>{
    const cardArray = [
        {
            name:'fries',
            img: 'images/fries.png'
        },
        {
            name:'fries',
            img: 'images/fries.png'
        },
        {
            name:'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name:'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name:'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name:'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name:'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name:'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name:'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name:'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name:'pizza',
            img: 'images/pizza.png'
        },
        {
            name:'pizza',
            img: 'images/pizza.png'
        },
    ]

    //Randomize array
    cardArray.sort(()=> 0.5- Math.random())

    //Create the grid
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardChosen = [];
    var cardChosenId = [];
    var cardsWon = [];
    var count = 0;

    function createBoard(){
        for(let i=0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src','images/blank.png')
            card.setAttribute('data-id',i);
            card.addEventListener('click',flipcard)
            card.style.border = '0.1px solid black'
            grid.appendChild(card)
        }
        
    }


    //check for matches
    function checkForMatch(){
        count++;
        var cards = document.querySelectorAll('img');
        const optionOneId = cardChosenId[0]
        const optionTwoId = cardChosenId[1]

        if(cardChosen[0] === cardChosen[1] && optionOneId!=optionTwoId){
            alert("You have found a match")
            cards[optionOneId].setAttribute('src','images/white.png');
            cards[optionOneId].style.pointerEvents = "none";
            cards[optionTwoId].setAttribute('src','images/white.png');
            cards[optionTwoId].style.pointerEvents = "none";
            cardsWon.push(cardChosen)
        }else{
            cards[optionOneId].setAttribute('src','images/blank.png');
            cards[optionTwoId].setAttribute('src','images/blank.png');
            alert("Opps! Try again")
        }
        cardChosen = []
        cardChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = `Congratulations! You have found all the matches. You have used ${count} moves to complete the puzzle`
            const btn = document.createElement("button")
            btn.innerHTML = "Play again"
            btn.setAttribute('onClick','window.location.reload();')
            grid.remove();
            const play = document.querySelector('.play');
            play.appendChild(btn)    
        }

    }

    //flip your cards
    function flipcard(){
        var cardId = this.getAttribute('data-id')
        cardChosen.push(cardArray[cardId].name);
        cardChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }

    }
  
    createBoard()

})

