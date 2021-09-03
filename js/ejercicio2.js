var contador = 0;

var div = document.createElement("div");
div.setAttribute('id','ejercicio2');

var titulo = document.createElement('h2');
titulo.innerText = "Ejercicio 2";
div.appendChild(titulo);

var parr = document.createElement('p');
parr.innerText = 'Total de caracteres ingresados: '+contador;
div.appendChild(parr);

var textArea = document.createElement('textarea');
textArea.rows = 5;
textArea.style.width = '100%';
textArea.addEventListener('keyup', (event) => {
    if(event.keyCode >= 32 && event.keyCode <= 126)
        contador++;
    parr.innerText = `Total caracteres ingresados: ${contador}. Largo del texto en textarea ${textArea.value.toString().length}`;
});
div.appendChild(textArea);

document.body.appendChild(div);

var hr = document.createElement("hr");
document.body.appendChild(hr);