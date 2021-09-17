document.addEventListener('DOMContentLoaded', () => {
    let body = document.querySelector('body');
const createElement = (Element, className, append) => {
    let Element = document.createElement("Element");
    Element.className=className;
    append.appendChild(Element);
    return Element;

}

const divCon = createElement('div', 'header-container', body);
const divRo = createElement('div', 'row', divCon);
divRo.id = 'firstrow';
const divCo1 = createElement('div', 'col-12 text-center', divRo);
divCo1.id = 'column1';

const btn = createElement('button', 'btn col-4 btn-lg btn-outline-secondary px-2 py-2 mx-2 my-4', divCo1);
const btnTxt = document.createTextNode('Add Square');
btn.appendChild(btnTxt);

const divRo2 = createElement ('div', 'row', divCon);
const divCo2 =createElement('div', 'col-12', divRo2);
divCo2.id = 'column2';

let idCount = 0;
   
const addSquare = () => {
    const divSquare = createElement('div', 'div-square', divCo2); 
    idCount += 1;
    divSquare.id = idCount; 

    const divHead = createElement('h1', 'h1 text-center text-light justify-content-center align-items-center mt-4', divSquare);
    divHead.style.visibility = 'hidden';
    const divTxt = document.createTextNode(idCount);
    divHead.appendChild(divTxt);

    const showTxt = () => { divHead.style.visibility = 'visible'; } 
    divSquare.addEventListener('mouseover', showTxt); 
    
    const hideTxt = () => { divHead.style.visibility = 'hidden'; } 
    divSquare.addEventListener('mouseout', hideTxt); 

    const Colors = [ '#007bff', '#6c757d', '#28a745', '#dc3545', '#ffc107', '#17a2b8', '#f8f9fa', '#343a40' ];

  
    const getRandomColor = () => {
        const RandomColor = Colors[ Math.floor (Math.random() * Colors.length) ];
        return RandomColor;
    }

  
    divSquare.addEventListener('click', () => {
        const thisRandomColor = getRandomColor();
        divSquare.style.backgroundColor = thisRandomColor;
    })

    divSquare.addEventListener('dblclick', () => { 
        const divSquareId = parseInt(divSquare.id);
        
        if(divSquareId % 2 === 0 &&  divSquare.nextElementSibling === null) {
            alert(`No square after square #${divSquareId}`);
        
        } else if(divSquareId % 2 === 0 &&  divSquare.nextElementSibling !== null) {
            const nextDivSquare = divSquare.nextElementSibling;
            const nextDivSquareId = parseInt(nextDivSquare.id);
            alert(`Equality!`);
            alert(`Void square #${nextDivSquareId}!`);
            divCo2.removeChild(nextDivSquare);
        }
        
        if(divSquareId % 2 !== 0 && divSquare.previousSibling === null) {
            alert(`No square before square #${divSquareId}`);
        

    }
})

// 'click' event handler on <button>
btn.addEventListener('click', addSquare); 
}

}
)