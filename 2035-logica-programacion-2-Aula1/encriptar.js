const textareaInput = document.getElementById('encriptar');
const textareaOutput = document.querySelector('.evaluar');
const btnEncriptar = document.getElementById('botonencriptar');
const btnDesencriptar = document.getElementById('botonesdesencriptar');
const btnCopiar = document.querySelector('.btn-copiar');
const tarjetaContenedor = document.querySelector('.tarjeta-contenedor');


function encriptar(texto){
    let resultado = '';
    for (let i = 0; i < texto.length; i++){
        switch (texto[i]){ 
            case 'a': resultado = resultado + 'ai'; 
                break;
            case 'e': resultado = resultado + 'enter';
                break;
            case 'i': resultado = resultado + 'imes';
                break;
            case 'o': resultado = resultado + 'ober';
                break;
            case 'u': resultado = resultado + 'ufat';
                break;
        
            default: resultado = resultado + texto[i];
                break;
        }
    }

    return resultado;
}

console.log(encriptar('Hola como estas?'));

function desincriptar(texto){
    let resultado = '';
    let i = 0;
    while(i < texto.length) {
        if(texto[i] === 'e' && texto[i+1] === 'n' && texto[i+2]=== 't' && texto[i+3] === 'e' && texto[i+4] === 'r'){
            resultado = resultado + 'e';
            i = i + 5;
        } else if (texto[i]=== 'i' && texto[i+1]=== 'm' && texto[i+2]=== 'e' && texto[i+3]=== 's'){
            resultado = resultado + 'i';
            i = i + 4;
        } else if (texto[i]=== 'a' && texto[i+1]=== 'i'){
            resultado = resultado + 'a';
            i = i + 2;   
        } else if (texto[i]=== 'o' && texto[i+1]=== 'b' && texto[i+2]=== 'e' && texto[i+3]=== 'r'){
            resultado = resultado + 'o';
            i = i + 4;
        } else if (texto[i]=== 'u' && texto[i+1]=== 'f' && texto[i+2]=== 'a' && texto[i+3]=== 't'){
            resultado = resultado + 'u';
            i = i + 4;
        } else {
            resultado = resultado + texto[i];
            i++;
        } 
    }
    return resultado;
}

function mostrarResultado(texto) {
    textareaOutput.value = texto;
    textareaOutput.style.display = 'block';
    btnCopiar.style.display = 'block';
    tarjetaContenedor.style.display = 'none';
}


btnEncriptar.addEventListener('click', () => {
    const textoOriginal = textareaInput.value;
    const textoEncriptado = encriptar(textoOriginal);
    mostrarResultado(textoEncriptado);
});


btnDesencriptar.addEventListener('click', () => {
    const textoEncriptado = textareaInput.value;
    const textoDesencriptado = desincriptar(textoEncriptado);
    mostrarResultado(textoDesencriptado);
});

btnCopiar.addEventListener('click', () => {
    textareaOutput.select();
    document.execCommand('copy');
});

