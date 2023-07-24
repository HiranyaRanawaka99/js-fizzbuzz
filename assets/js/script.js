const fizzBuzzWrapper = document.getElementById('fizzbuzzdom');
let content; 
let classes;

let fizzBuzzElements = '';

//Creo un ciclo da 1 a 100 che stampi FizzBuzz per i multipli di 15, Fizz per i mutipli di 3 e Buzz per i multipli di 5
for(let i=1; i<= 100; i++) {
    //console.log(i);

    if (i % 15 === 0) {
        content = 'FizzBuzz'
        classes = 'fizzbuzz'
        //console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        content = 'Fizz'
        classes = 'fizz'
        //console.log('Fizz');
    } else if (i % 5 === 0) {
        content = 'Buzz'
        classes = 'buzz'

        //console.log('Buzz')
    } else {
        content = i
        //console.log(i)
    }

fizzBuzzElements += `<div class="col"> <div class="box ${classes}">${content}</div></div>` ;

}

//Stmapo nel DOM

fizzBuzzWrapper.innerHTML = fizzBuzzElements;











