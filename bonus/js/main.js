const myMain = document.querySelector("main");
const classChecker = document.createElement('div');


for (i=1; i<=36; i++){

    var cardNumber = Math.floor((Math.random()*100) + 1) ;

    if (classChecker.classList.contains(`card${cardNumber}`) === false && cardNumber <=36){

        let myArticle = document.createElement('article');
        myMain.append(myArticle);
        myArticle.innerHTML = `<img class="card${cardNumber}" src="img/${cardNumber}.webp" alt="Immagine">`;

        myArticle.classList.add(`card${cardNumber}`);
        classChecker.classList.add(`card${cardNumber}`);

    } else  {
        i--;
    }
}

for (i=19; i<=36; i++){
    const card = document.querySelector(`img.card${i}`);
    card.classList.replace(`card${i}`, `card${i-18}`);
}


for (i=1; i<=36; i++){
    
    const cardBox = document.querySelector(`article.card${i}`);
    const card = document.querySelector(`article.card${i} img`);

    cardBox.addEventListener ('click',
        function(){
            card.classList.add(`faceUp`);

            var faceUpChecker = document.querySelectorAll('.faceUp');
            // console.log(faceUpChecker);

            if(faceUpChecker.length == 2){

                faceUpChecker.item(0).classList.remove(`faceUp`);
                faceUpChecker.item(1).classList.remove(`faceUp`);

                if(faceUpChecker.item(0).classList.value === faceUpChecker.item(1).classList.value){

                    faceUpChecker.item(0).style.display = "block";
                    faceUpChecker.item(1).style.display = "block";

                    // console.log(faceUpChecker.item(0).classList.value);
                    // console.log(faceUpChecker.item(1).classList.value);
                }
            }
        }
    )
}