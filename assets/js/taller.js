
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


    //minuscula
    const minuscula = document.getElementById('minuscula');
    minuscula.addEventListener('click', ()=>{
        const palabra = document.getElementById('palabra').value;
        const result = palabra.toLowerCase();
        alert(`La palabra digitada ${palabra} a minúscula es ${result}`);
    });
   

    //crarcter 1
    const caracter = document.getElementById('caracter');
    caracter.addEventListener('click', ()=>{

        const palabra = document.getElementById('palabra').value;
        const result = palabra.charAt();

        alert(`El primer caracter de la palabra digitada ${palabra} es ${result}`);
    });


//2 temperature

    
        temperature.addEventListener('click', () =>{
            //opcion de usuario
            const opcion = document.getElementById('opcioon').value;
            parseInt(opcion)
            //input
            const tempe = document.getElementById('tempe').value;
            parseFloat(tempe)
            let grado
            parseFloat(grado)
            //faren a cel
            if (opcion==1) {
                grado=((5(tempe-32))/9)

            } 
            // fran a kel
            else if (opcion==2) {
                grado=(((5(tempe-32))/9)+273.15)
            } 
            //cel a faren
            else if (opcion==3){
                grado=(((9*tempe)/5)+32)

            } 
            //cel a kel
            else if (opcion==4){
                grado=(grado+273.15)
                
            } 
            //kel a faren
            else if (opcion==5){
                grado=(((9(tempe-273.15))/5)+32)

            } 
            //kel a cel
            else if (opcion==6){
                grado=(tempe-273.15)

            }


        })


