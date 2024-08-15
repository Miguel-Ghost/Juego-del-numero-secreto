//1
let listaGenerica = [];

//2
let lenguagesDeProgramacion = [
    'JavaScript',
    'C',
    'C++',
    'Kotlin',
    'Python'
];

console.log(lenguagesDeProgramacion);

//3
lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('GoLang');

console.log(lenguagesDeProgramacion);

//4
function mostrarProgramacion(x){
    for(let i=0; i<x.length; i++){
        console.log(x[i]);
    }
}
mostrarProgramacion(lenguagesDeProgramacion);

//5
function inversoProgramacion(x){
    for(let i=x.length-1; i>=0; i--) {
        console.log(x[i]);
    }
}

inversoProgramacion(lenguagesDeProgramacion);

//6
function promedio(x){
    let total=0;
    for(let i=0; i<x.length;i++) {
        total += x[i];
    }
    return total/x.length;
}

console.log(promedio([1,2,3,4,5,6,7,8,9,10]));

//7
function maxMin(x){
    let min=x[0];
    let max=0;

    for(let i=0; i<x.length; i++){
        if(x[i]<min){
            min=x[i];
        }
        if(x[i]>max){
            max=x[i];
        }
    }

    return `El minimo elemento es ${min} y el maximo elemento es ${max}`;
}

console.log(maxMin([4,8,9,10,55,89,55,11,12,13,21,1]));

//8

function sumaElementos(x){
    let total=0;
    for(let i=0; i<x.length;i++) {
        total += x[i];
    }
    return total;
}

console.log(sumaElementos([1,2,3,4,5,6,7,8,9,10]));

//9
function encontrarNumero(x,y){
    let encontrado = false;
    let posicion;
    for(let i=0; i<x.length; i++){
        if(x[i]== y){
           encontrado = true;
           posicion = i;
        }
    }

    if(encontrado){
        return `El numero ${y} se encuentra en la posicion ${posicion}`;
    }
    else{
        return -1;
    }
}

console.log(encontrarNumero([1,2,3,4,5,6,7,8,9,10], 5));

//10
function sumarElementosListados(x,y){
    if(x.length!=y.length){
        return 'Deben tener el mismo tiene de elementos.';
    }else{
        let z=[];
        for(let i=0; i<x.length;i++){
            z.push(x[i]+y[i]);
        }

        return z;
    }
        
}

console.log(sumarElementosListados([1,2,3,4,5],[6,7,8,9,10]));
//11
function cuadradoLista(x){
    let z=[];
    for(let i=0; i<x.length;i++){
        z.push(x[i]*x[i]);
    }

    return z;
}

console.log(cuadradoLista([1,2,3,4,5,6,7,8,9,10]));