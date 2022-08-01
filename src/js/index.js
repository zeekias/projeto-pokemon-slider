const btnGo = document.getElementById('btn-go');
const btnBack = document.getElementById('btn-back');
const cards = document.querySelectorAll('.card');
let currentCard = 0;

btnGo.addEventListener('click', () => {
    goCard();
});

btnBack.addEventListener('click', () => {
    backCard();
});

function goCard() {
    removeSelected();
    if(currentCard === cards.length - 2){
        disableButton(btnGo);
    }
    ableButton(btnBack);
    currentCard++;
    cards[currentCard].classList.add("selected");

}

function backCard(){
    removeSelected();
    if(currentCard === 1){
        disableButton(btnBack);
    }
    ableButton(btnGo);
    currentCard--;
    cards[currentCard].classList.add("selected");
}

function removeSelected() {
    const cardSelected = document.querySelector('.selected');
    cardSelected.classList.remove("selected");
}

function disableButton(btn){
    btn.setAttribute("disabled", "true");
    btn.style.opacity = "0";
    btn.style.cursor = "auto";
}

function ableButton(btn){
    btn.style.opacity = "1";
    btn.removeAttribute("disabled");
    btn.style.cursor = "pointer";
}