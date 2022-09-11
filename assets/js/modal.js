    /*Acceder al botón para abrir el modal */


    //cuadrado area
    //boton de la card
    let areac=document.getElementById("areac");

    //Acceder al botón Cerrar de la ventana modal
    let cerrarea=document.getElementById("areacerrar");

    //Acceder ventana modal del area
    let areacua=document.getElementById("ventanaARE");

    areac.addEventListener("click",()=>{
        areacua.style.display="block";
    })

    cerrarea.addEventListener("click",()=>{
        areacua.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
    if(e.target==areacua){
        areacua.style.display="none"; 
    }
    })



    //cuadrado perimetro
    //boton de la card
    let perimetro=document.getElementById("perimetro");
    //Acceder ventana modal del area
    let venperi=document.getElementById("ventanaPERI");
    //Acceder al botón Cerrar de la ventana modal
    let pericerrar=document.getElementById("pericerrar");

    //boton y despues ventana
    perimetro.addEventListener("click",()=>{
        venperi.style.display="block";
    })

    pericerrar.addEventListener("click",()=>{
        venperi.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
    if(e.target==venperi){
        venperi.style.display="none"; 
    }
    })

    /////////////////////////////////////////////////////////////////////////////


    //triangulo area
    //boton de la card
    let areat=document.getElementById("areat");
    //Acceder ventana modal del area
    let venareaT=document.getElementById("venareaT");
    //Acceder al botón Cerrar de la ventana modal
    let areacerrarT=document.getElementById("areacerrarT");

    //boton y despues ventana
    areat.addEventListener("click",()=>{
        venareaT.style.display="block";
    })

    areacerrarT.addEventListener("click",()=>{
        venareaT.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
    if(e.target==venareaT){
        venareaT.style.display="none"; 
    }
    })



    //triangulo perimetro
    //boton de la card
    let pert=document.getElementById("pert");
    //Acceder ventana modal del area
    let venperiT=document.getElementById("venperiT");
    //Acceder al botón Cerrar de la ventana modal
    let pericerrarT=document.getElementById("pericerrarT");

    //boton y despues ventana
    pert.addEventListener("click",()=>{
        venperiT.style.display="block";
    })

    pericerrarT.addEventListener("click",()=>{
        venperiT.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
    if(e.target==venperiT){
        venperiT.style.display="none"; 
    }
    })



/////////////////////////////////////////////////////////////////////////////


    //CIRCULO area
    //boton de la card
    let areal=document.getElementById("areal");
    //Acceder ventana modal del area
    let venareL=document.getElementById("venareL");
    //Acceder al botón Cerrar de la ventana modal
    let areacerrarL=document.getElementById("areacerrarL");

    //boton y despues ventana
    areal.addEventListener("click",()=>{
        venareL.style.display="block";
    })

    areacerrarL.addEventListener("click",()=>{
        venareL.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
    if(e.target==venareL){
        venareL.style.display="none"; 
    }
    })


    //CIRCULO perimetro
    //boton de la card
    let peril = document.getElementById("peril");
    //Acceder ventana modal del area
    let venperiL = document.getElementById("venperiL");
    //Acceder al botón Cerrar de la ventana modal
    let pericerrarL = document.getElementById("pericerrarL");

    //boton y despues ventana
    peril.addEventListener("click",()=>{
        venperiL.style.display="block";
    })

    pericerrarL.addEventListener("click",()=>{
        venperiL.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
    if(e.target==venperiL){
        venperiL.style.display="none"; 
    }
    })



    
/////////////////////////////////////////////////////////////////////////////


    //rectangulo area
    //boton de la card
    let arear=document.getElementById("arear");
    //Acceder ventana modal del area
    let venareR=document.getElementById("venareR");
    //Acceder al botón Cerrar de la ventana modal
    let areacerrarR=document.getElementById("areacerrarR");

    //boton y despues ventana
    arear.addEventListener("click",()=>{
        venareR.style.display="block";
    })

    areacerrarR.addEventListener("click",()=>{
        venareR.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
    if(e.target==venareR){
        venareR.style.display="none"; 
    }
    })


    //RECTANGULO perimetro
    //boton de la card
    let perir = document.getElementById("perir");
    //Acceder ventana modal del area
    let venperiR = document.getElementById("venperiR");
    //Acceder al botón Cerrar de la ventana modal
    let pericerrarR = document.getElementById("pericerrarR");

    //boton y despues ventana
    perir.addEventListener("click",()=>{
        venperiR.style.display="block";
    })

    pericerrarR.addEventListener("click",()=>{
        venperiR.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
    if(e.target==venperiR){
        venperiR.style.display="none"; 
    }
    })


