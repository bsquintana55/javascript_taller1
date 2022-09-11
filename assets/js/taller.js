
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

    

    //2
    const temperature = document.getElementById('cal');
    temperature.addEventListener('click', ()=>{

        const opcion = document.getElementById('opcion').value;
        const usua = document.getElementById('tempe').value
        parseInt(opcion);
        parseFloat(usua);
        
        if (opcion==1) {
        const grado=((5*(usua-32))/9);
        alert(`los ${usua} grados Fahrenheit a Celsius son: ${grado}`);

        } 
        // fran a kel
        else if (opcion==2) {
            const grado=(((5*(usua-32))/9)+273.15);
            alert(`los ${usua} grados Fahrenheit a Kelvin son: ${grado}`);

        } 
        //cel a faren
        else if (opcion==3){
            const grado=(((9*usua)/5)+32);
            alert(`los ${usua} grados Celsius a Fahrenheit son: ${grado}`);


        } 
        //cel a kel
        else if (opcion==4){
            const  grado=(usua+273.15);
            alert(`los ${usua} grados Celsius a Kelvin son: ${grado}`);

            
        } 
        //kel a faren
        else if (opcion==5){
            const grado=(((9*(usua-273.15))/5)+32);
            alert(`los ${usua} grados Kelvin a Fahrenheit son: ${grado}`);

        } 
        //kel a cel
        else if (opcion==6){
            const  grado=(usua-273.15);
            alert(`los ${usua} grados Kelvin a Celsius son: ${grado}`);


        }
    })

    //3


        const triangulo = document.getElementById('trian');
        triangulo.addEventListener('click', () =>{

            let lado1 = document.getElementById('ladoiz').value;
            parseFloat(lado1)
            let lado2 = document.getElementById('ladode').value;
            parseFloat(lado2)
            let lado3 = document.getElementById('ladoaba').value;
           parseFloat(lado3)

           if (lado1==lado2 && lado1==lado3) {
            alert(`Su triangulo es equilatero, ya que todos los lados son del mismo tamaño`)
           
           } else if( lado1==lado2 || lado2==lado3 || lado1==lado3) {   
            alert(`Su triangulo es isósceles, ya que dos de los lados son del mismo tamaño`)
           
           }
           else {
            alert(`Su triangulo es escaleno, ya que ninguno de los lados son del mismo tamaño`)
           
           }
        })
