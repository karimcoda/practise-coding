let accordion = document.querySelector('.accordion');
let items = accordion.querySelectorAll('.accordion_item');
let title = accordion.querySelectorAll('.accordion_title');


function nameFunction(){
    let thisItem = this.parentNode;

    items.forEach(item => {
        if (thisItem == item) {
            thisItem.classList.toggle('active');
            return;
        }

        item.classList.remove('active');
    });
}

title.forEach(question => question.addEventListener('click', nameFunction));
