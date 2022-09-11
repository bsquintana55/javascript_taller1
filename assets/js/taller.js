
        //puntos del taller



        //1 de palabras

        //longitus
        let longitud = document.getElementById('longitud');
        longitud.addEventListener('click', ()=>{

            let palabra = document.getElementById('palabra').value;
            let result = palabra.length;
            alert(`La longitud de las palabra digitada ${palabra} es ${result}`);

        });
    
        //mayuscula
        let mayuscula = document.getElementById('mayuscula');

        mayuscula.addEventListener('click', ()=>{
            let palabra = document.getElementById('palabra').value;
            let result = palabra.toUpperCase();
            alert(`La palabra digitada ${palabra} a mayúscula es ${result}`);
        });


        //minuscula
        let minuscula = document.getElementById('minuscula');
        minuscula.addEventListener('click', ()=>{
            let palabra = document.getElementById('palabra').value;
            let result = palabra.toLowerCase();
            alert(`La palabra digitada ${palabra} a minúscula es ${result}`);
        });
    

        //crarcter 1
        let caracter = document.getElementById('caracter');
        caracter.addEventListener('click', ()=>{

            let palabra = document.getElementById('palabra').value;
            let result = palabra.charAt();

            alert(`El primer caracter de la palabra digitada ${palabra} es ${result}`);
        });

    

    //2
    let temperature = document.getElementById('cal');
    temperature.addEventListener('click', ()=>{

        let opcion = document.getElementById('opcion').value;
        let usua = document.getElementById('tempe').value
        parseInt(opcion);
        parseFloat(usua);
        
        if (opcion==1) {
        let grado=((5*(usua-32))/9);
        alert(`los ${usua} grados Fahrenheit a Celsius son: ${grado}`);

        } 
        // fran a kel
        else if (opcion==2) {
            let grado=(((5*(usua-32))/9)+273.15);
            alert(`los ${usua} grados Fahrenheit a Kelvin son: ${grado}`);

        } 
        //cel a faren
        else if (opcion==3){
            let grado=(((9*usua)/5)+32);
            alert(`los ${usua} grados Celsius a Fahrenheit son: ${grado}`);


        } 
        //cel a kel
        else if (opcion==4){
            let  grado=(usua+273.15);
            alert(`los ${usua} grados Celsius a Kelvin son: ${grado}`);

            
        } 
        //kel a faren
        else if (opcion==5){
            let grado=(((9*(usua-273.15))/5)+32);
            alert(`los ${usua} grados Kelvin a Fahrenheit son: ${grado}`);

        } 
        //kel a cel
        else if (opcion==6){
            let  grado=(usua-273.15);
            alert(`los ${usua} grados Kelvin a Celsius son: ${grado}`);


        }
    })

    //3


        let triangulo = document.getElementById('trian');
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



        let hallar = document.getElementById('hallar');
        hallar.addEventListener('click', ()=>{   

      let nombre = document.getElementById('nombre').value;
      parseInt(nombre)
      let apellido = document.getElementById('apellido').value;
      parseInt(apellido)
      let materia = document.getElementById('materia').value;
      parseInt(materia)


            if(nombre==1 && apellido==1 && materia==1){
                alert("Has elegido bien, felicidades ")
            }else if(nombre==2 && apellido==2 && materia==2){
                alert("Has elegido bien, felicidades ")
            }else if(nombre==3 && apellido==3 && materia==3){
                alert("Has elegido bien, felicidades ")
            }else if(nombre==4 && apellido==4 && materia==4){
                alert("Has elegido bien, felicidades ")
            }else if(nombre==5 && apellido==5 && materia==5){
                alert("Has elegido bien, felicidades ")
            }else if(nombre==6 && apellido==6 && materia==6){
                alert("Has elegido bien, felicidades ")
            }else if(nombre==7 && apellido==7 && materia==7 || materia==8){
                  alert("Has elegido bien, felicidades ")
            }else{
                alert("mmh no esta correcto, prueba otra vez ")
            }    
})





// 5


//cuadrado
let AC = document.getElementById('AC');
AC.addEventListener('click',()=>{
      let LC = document.getElementById('LC').value;
      parseFloat(LC);
      let r = (LC*LC);
      alert(`El Área del cuadrado es: ${r}`)
      
})

let PC = document.getElementById('PC');
PC.addEventListener('click',()=>{
      let DC = document.getElementById('DC').value;
      parseFloat(DC);
      let r = (DC*4);

      alert(`El périmetro del cuadrado es: ${r}`)
      
})



//triangulo
let AT = document.getElementById('AT');
AT.addEventListener('click', ()=>{
      let BT = document.getElementById('BT').value;
      let UT = document.getElementById('UT').value;
      parseFloat(BT,UT)

   let r = (BT*UT)/2;

      alert(`El area del triangulo es: ${r}`);
});

let PT = document.getElementById('PT');
PT.addEventListener('click', ()=>{
      let L1 = document.getElementById('L1').value
      let L2 = document.getElementById('L2').value
      let L3 = document.getElementById('L3').value
     parseInt(L1, L2, L3)

      let r =  parseFloat(L1)+parseFloat(L2)+parseFloat(L3);

      alert(`El perimetro del triangulo es: ${r}`);  
});




//Circulo
let AI = document.getElementById('AI');
const pi= 3.14
 AI.addEventListener('click',()=>{

      let RC = document.getElementById('RC').value;
      parseInt(RC)
      let r = pi* (parseFloat(RC)*2);

      alert(`El area del circulo es: ${r.toFixed(2)}`);

 });    

 let PI = document.getElementById('PI');
 PI.addEventListener('click',()=>{
      let I = document.getElementById('I').value;

      let r = (pi*2)*parseFloat(I);
      alert(`El perimetro del circulo es: ${r.toFixed(2)}`);
 });






//rectangulo
let AR = document.getElementById('RA');
AR.addEventListener('click', ()=>{
      let BR = document.getElementById('BR').value;
      let AR = document.getElementById('AR').value;
      
      r= parseFloat(BR)*parseFloat(AR);
      alert(`La base del rectangulo es: ${r}`);
});

let PR = document.getElementById('PR');
PR.addEventListener('click', ()=>{
      let BP = document.getElementById('BP').value;
      let AP = document.getElementById('AP').value;
     
      r= (parseFloat(BP)+parseFloat(AP))*2;
      alert(`El perimetro del rectangulo es: ${r}`);
})






