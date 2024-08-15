function IMC(peso, altura){
    return peso/(altura*altura);
}

console.log(IMC(74,1.73));

function factorial(x){
    let facotrial=1;
    for(let i=1; i<=x ; i++) {
        facotrial *= i;
    }
    return facotrial;
}

console.log(factorial(parseInt(prompt("Ingrese un numero: "))));

function dolares(x){
    let tasaCambio = 4.80;
    return x*tasaCambio;
}

console.log(dolares(parseInt(prompt("Ingrese la cantidad de dolares: "))));

function rectangulo(x,y){
    return `El area es ${x*y} y el perimetro es ${2*x+2*y}`;
}

console.log(rectangulo(5,10));

function circulo(radio){
    return `El area es ${Math.PI*radio*radio} y el perimetro es ${2*Math.PI*radio}`;
}

console.log(circulo(5));


function tablaMultiplicar(x){
    let tabla = '';
    for(let i=1; i<=x; i++){
        tabla += `${x} x ${i} = ${x*i}\n`;
    }
    return tabla;
}

console.log(tablaMultiplicar(5));