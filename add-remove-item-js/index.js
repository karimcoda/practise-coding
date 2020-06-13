var inputHeadingText = document.querySelector('#inputH').value,
    inputText = document.querySelector('#inputP').value,
    itemsList = document.querySelector('.items'),
    addItem = document.querySelector('#add'),
    removeItem = document.querySelector('#remove'),
    selectAll = document.querySelector('.all');

    function addNewItem() {
        const   createitem = document.createElement('div'),
                createTextH = document.createTextNode(inputHeadingText),
                createTextP = document.createTextNode(inputText),
                createDivContent = document.createElement('div'),
                createbtn = document.createElement('a'), 
                createHeading = document.createElement('h2'),
                createPara = document.createElement('p'),
                createTextBtn = document.createTextNode('X');

        createitem.setAttribute('class', 'item');
        createDivContent.setAttribute('class', 'text'),
        createbtn.setAttribute('class', 'del');

        createbtn.appendChild(createTextBtn);

        createHeading.appendChild(createTextH);
        createPara.appendChild(createTextP);

        createDivContent.appendChild(createHeading);
        createDivContent.appendChild(createPara);

        createitem.appendChild(createDivContent);
        createitem.appendChild(createbtn); 

        itemsList.appendChild(createitem);
        
        createbtn.addEventListener('click', del_Item);

    }

    function removeNewItem() {
        itemsList.innerHTML = '';
        removeItem.classList.remove('colorRedBtn');
        itemsList.classList.remove('active');
    }

    function select_All() {
            itemsList.classList.toggle('active');
            removeItem.classList.toggle('colorRedBtn');
            
            
        
    }

    if (itemsList.classList.contains = 'active'){
        removeItem.addEventListener('click', removeNewItem);
        
    }
        

    addItem.addEventListener('click', addNewItem);
    selectAll.addEventListener('click', select_All);

    function del_Item(e){
        e.target.parentElement.style.display = 'none';
    }

