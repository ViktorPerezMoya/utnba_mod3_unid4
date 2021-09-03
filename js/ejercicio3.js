var alumnos = [
    {  
      nombre: 'Juan Gomez',  
      nota: 7  
    }, {  
      nombre: 'Pedro Rodriguez',  
      nota: 4  
    }, {  
      nombre: 'Roxana García',  
      nota: 8  
    }, {  
      nombre: 'Luciano Lopez',  
      nota: 5  
    }, {  
      nombre: 'Fernanda Gimenez',  
      nota: 6  
    }, {  
      nombre: 'Florencia Martinez',  
      nota: 10  
    }, {  
      nombre: 'Raul Sanchez',  
      nota: 7  
    }, {  
      nombre: 'Sandra Figueroa',  
      nota: 8  
    }  
  ];

var aprovados = [];

var div = document.createElement("div");
div.setAttribute('id','ejercicio3');

var titulo = document.createElement('h2');
titulo.innerText = "Ejercicio 3";
div.appendChild(titulo);

aprovados = alumnos.filter((alumno) => alumno.nota >= 7);

var subtitulo = document.createElement('h3');
subtitulo.innerText = `Hay ${aprovados.length} alumnos aprobados`;
div.appendChild(subtitulo);

var pre = document.createElement('pre');
pre.innerHTML = JSON.stringify(aprovados);
div.appendChild(pre);

document.body.appendChild(div);
