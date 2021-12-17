const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	Name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    Lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	Email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}


const validar = () => {
    switch (e.target.name) {

        case "Name":

            console.log('FUNCIONA')

        break;

    }
}

inputs.forEach( () => {

    inputs.addEventListener('keyup', validar);
    inputs.addEventListener('blur', validar);
    })


