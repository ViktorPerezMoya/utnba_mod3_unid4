function ponerEstilos(elemHtml,color){
    elemHtml.style.color = 'white';
    elemHtml.style.display = 'flex';
    elemHtml.style.justifyContent = 'center';
    elemHtml.style.fontFamily = 'Arial, sans-serif';
    elemHtml.style.alignItems = 'center';
    elemHtml.style.height = '100px';
    elemHtml.style.width = '100px';
    elemHtml.style.textAlign = 'center';
    elemHtml.style.backgroundColor = color;
}

function cambiarFondo(color){
    document.getElementById('ejercicio1').style.backgroundColor = color;
}

var div = document.createElement("div");
div.setAttribute('id','ejercicio1');

var titulo = document.createElement('h2');
titulo.innerText = "Ejercicio 1";
div.appendChild(titulo);

var cuadro1 = document.createElement("div");
cuadro1.setAttribute('id','cuadro1')
cuadro1.innerHTML = "Rojo";
ponerEstilos(cuadro1,'red');
cuadro1.addEventListener('click',() => cambiarFondo('red'));
div.appendChild(cuadro1);

var cuadro2 = document.createElement("div");
cuadro2.setAttribute('id','cuadro2')
cuadro2.innerHTML = "Azul";
ponerEstilos(cuadro2,'blue');
cuadro2.addEventListener('click',()=>cambiarFondo('blue'));
div.appendChild(cuadro2);

var cuadro3 = document.createElement("div");
cuadro3.setAttribute('id','cuadro3')
cuadro3.innerHTML = "Verde";
ponerEstilos(cuadro3,'green');
cuadro3.addEventListener('click',()=>cambiarFondo('green'));
div.appendChild(cuadro3);

document.body.appendChild(div);

var hr = document.createElement('hr');
document.body.appendChild(hr);
