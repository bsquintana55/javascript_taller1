
    //puntos del taller



    //1 de palabras

    //longitus
    const longitud = document.getElementById('longitud');
    longitud.addEventListener('click', ()=>{

        const palabra = document.getElementById('palabra').value;
        const result = palabra.length;
        alert(`La longitud de las palabra digitada ${palabra} es ${result}`);

    });
  
    //mayuscula
    const mayuscula = document.getElementById('mayuscula');

    mayuscula.addEventListener('click', ()=>{
        const palabra = document.getElementById('palabra').value;
        const result = palabra.toUpperCase();
        alert(`La palabra digitada ${palabra} a mayúscula es ${result}`);
    });


    /*MINUSCULAS*/
    const minuscula = document.getElementById('minuscula');
    minuscula.addEventListener('click', ()=>{
        const palabra = document.getElementById('palabra').value;
        const result = palabra.toLowerCase();
        alert(`La palabra digitada ${palabra} a minúscula es ${result}`);
    });
    /*PRIMERA LETRA */
    const caracter = document.getElementById('caracter');
    caracter.addEventListener('click', ()=>{

        const palabra = document.getElementById('palabra').value;
        const result = palabra.charAt();

        alert(`El primer caracter de la palabra digitada ${palabra} es ${result}`);
    });



