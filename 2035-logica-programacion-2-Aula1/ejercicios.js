function texto(p1 , texto){
    let p1HTML = document.querySelector(p1);
    p1HTML.innerHTML = texto;
}

texto('h1' , '¡Hola, mundo!');


function nombre(nom){
    console.log('¡Hola, ' + nom + '!');
}

console.log(nombre('Miguel'));

function dobleNumber(numero){
    console.log(numero*2);
}

console.log(dobleNumber(5));

function promedio(x, y , z){
    
    let prom = (x + y + z)/3;
    console.log(prom);
}

promedio(5,8,3);

function max(x, y){
    let max = x;
    
    if(y > max){
        max = y;
    }
    console.log(max);

}

max(5,8);

function multiplicarPorSiMismo(x){
    console.log(x*x);
}

multiplicarPorSiMismo(6);