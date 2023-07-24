//STAMPA CON NODI

//devo creare una col e poi mettere dentro box

const colEl = document.createElement('div');
console.classList.add('col');

//creo il box 

const boxEl = document.createElement('div');
boxEl.className = 'box' + classes;
boxEl.innerText = content;

//Metto la box dentro al container
colEl.appendChild(boxEl);

fizzBuzzWrapper.appendChild (colEl);
