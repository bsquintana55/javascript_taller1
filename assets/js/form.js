const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
 
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@+[misena]+.[edu]+.[c]+[o]$/,
    //fecha: /^[0-9]+[0-9]+[0-9]+[0-9]+[0000-2002]$/,
    contraseña1:  /^(([a-z]{1,})([A-Z]{1,})([0-9]{1,})){1,10}$/, // 4 a 12 digitos.
    contraseña2: /^(([a-z]{1,})([A-Z]{1,})([0-9]{1,})){1,10}$/, // 4 a 12 digitos.


}

const campos = {
    nombre:false,
    apellido:false,
    correo:false,
	//fecha:false,
    contraseña1:false,
    contraseña2:false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
	
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
        case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
       // case "fecha":
		//	validarCampo(expresiones.fecha, e.target, 'fecha');
		//break;
        case "contraseña1":
			validarCampo(expresiones.contraseña1, e.target, 'contraseña1');
			validarcontraseña2();
		break;
		case "contraseña2":
			validarcontraseña2();
		break;
		
	
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}



const validarcontraseña2 = () => {
	const inputcontraseña1 = document.getElementById('contraseña1');
	const inputcontraseña2 = document.getElementById('contraseña2');

	if(inputcontraseña1.value !== inputcontraseña2.value){

		document.getElementById(`grupo__contraseña2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__contraseña2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__contraseña2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__contraseña2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__contraseña2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['contraseña1'] = false;

	} else {

		document.getElementById(`grupo__contraseña2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__contraseña2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__contraseña2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__contraseña2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__contraseña2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['contraseña1'] = true; 

	}
}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
}); 



formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if( campos.nombre && campos.apellido && campos.correo /* && campos.fecha*/ && campos.contraseña1 && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');

		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});

	} else { 
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}

});