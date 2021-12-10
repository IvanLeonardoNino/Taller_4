document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Formulario").addEventListener('submit', ValidarFormulario)
});



//Función encargada de hacer aparecer o desaparecer el div de gustos

function Mostrar() {
    element = document.getElementById("Gustos_Usuario");
    check = document.getElementById("Checkbox1");
    if (check.checked) {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
};


//Función Principal

function ValidarFormulario(evento) {
    evento.preventDefault();

    //----------Nombre----------
    var nombre = document.getElementById('Nombre').value;

    if (nombre.length == 0) {
        alert('El campo nombre está vacío');

    } else {
        if (nombre.length > 25) {
            alert('El campo Nombre debe tener máximo 25 caracteres');

        }
    }
    //----------Apellido----------
    var apellido = document.getElementById('Apellido').value;

    if (apellido.length == 0) {
        alert('El campo Apellido está vacío');

    } else {
        if (apellido.length > 25) {
            alert('El campo Apellido debe tener máximo 25 caracteres');

        }
    }
    //----------Direccion----------
    var direc = document.getElementById('Direccion').value;

    if (direc.length == 0) {
        alert('El campo Direccion está vacío');

    } else {
        if (direc.includes("cll")) {

        } else {
            if (direc.includes("cra")) {

            } else {
                if (direc.includes("av")) {

                } else {
                    if (direc.includes("anv")) {

                    } else {
                        if (direc.includes("trans")) {

                        } else {
                            alert('El campo dirección debe contener alguno de las siguientes palabras cll, cra, av, anv, trans');

                        }
                    }
                }
            }
        }
    }

    //----------Usuario----------
    var usuario = document.getElementById('CcUsuario').value;

    if (usuario.length == 0) {
        alert('El campo Usuario está vacío');

    } else {
        if (usuario.length > 20) {
            alert('El campo usuario debe tener maximo 20 caracteres');

        } else {
            if (usuario.length < 10) {
                alert('El campo usuario debe tener más de 10 caracteres');

            }
        }
    }

    var extranos = "!¡<>«#$%&‘()*+,-_@:;./´'¿?[]{}";

    function tiene_extranos(texto) {
        for (i = 0; i < texto.length; i++) {
            if (extranos.indexOf(texto.charAt(i), 0) != -1) {
                return 1;
            }
        }
        return 0;
    }
    if (tiene_extranos(usuario) != 0) {
        alert('El usuario no puede tener caracteres extraños');

    }

    //----------Contraseña----------

    var password = document.getElementById('CcPaswd').value;

    if (password.length == 0) {
        alert('El campo Contraseña está vacío');

    } else {
        if (password.length > 20) {
            alert('El campo Contraseña debe tener maximo 20 caracteres');

        } else {
            if (password.length < 10) {
                alert('El campo Contraseña debe tener más de 10 caracteres');

            }
        }
    }

    //----------Búsqueda 1.0----------
    /*
        var numeros = "0123456789";
    
        function tiene_numeros(texto) {
            for (i = 0; i < texto.length; i++) {
                if (numeros.indexOf(texto.charAt(i), 0) != -1) {
                    return 1;
                }
            }
            return 0;
        }
    
        if (tiene_numeros(password) == 0) {
            alert('La contraseña debe contener por lo menos un numero');
            
        }
    
        var letras = "abcdefghyjklmnñopqrstuvwxyz";
    
        function tiene_letras(texto) {
            texto = texto.toLowerCase();
            for (i = 0; i < texto.length; i++) {
                if (letras.indexOf(texto.charAt(i), 0) != -1) {
                    return 1;
                }
            }
            return 0;
        }
    
        if (tiene_letras(password) == 0) {
            alert('La contraseña debe contener por lo menos una letra');
            
        }
    
        function tiene_minusculas(texto) {
            for (i = 0; i < texto.length; i++) {
                if (letras.indexOf(texto.charAt(i), 0) != -1) {
                    return 1;
                }
            }
            return 0;
        }
    
        if (tiene_minusculas(password) == 0) {
            alert('La contraseña debe contener minúsculas');
            
        }
    
        var letras_mayusculas = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
    
        function tiene_mayusculas(texto) {
            for (i = 0; i < texto.length; i++) {
                if (letras_mayusculas.indexOf(texto.charAt(i), 0) != -1) {
                    return 1;
                }
            }
            return 0;
        }
    
        if (tiene_mayusculas(password) == 0) {
            alert('La contraseña debe contener mayúsculas');
            
        }
    
        var especiales = "#%/&";
    
        function tiene_especiales(texto) {
            for (i = 0; i < texto.length; i++) {
                if (especiales.indexOf(texto.charAt(i), 0) != -1) {
                    return 1;
                }
            }
            return 0;
        }
    
    
        if (tiene_especiales(password) == 0) {
            alert('La contraseña debe contener por lo menos un carácter especial [#,%,/,&]');
            
        }
    
    */

    //----------Búsqueda 2.0----------

    let datos = [{
            'dato': "0123456789",
            "texto": "La contraseña debe contener por lo menos un numero"
        },
        {
            'dato': "abcdefghyjklmnñopqrstuvwxyz",
            "texto": "La contraseña debe contener por lo menos una letra"
        },
        {
            'dato': "abcdefghyjklmnñopqrstuvwxyz",
            "texto": "La contraseña debe contener minúsculas"
        },
        {
            'dato': "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ",
            "texto": "La contraseña debe contener mayúsculas"
        },
        {
            'dato': "#%/&",
            "texto": "La contraseña debe contener por lo menos un carácter especial [#,%,/,&]"
        }
    ]

    function General(texto, ubi) {

        for (i = 0; i < texto.length; i++) {
            if (datos[ubi].dato.indexOf(texto.charAt(i), 0) != -1) {
                return 1;
            }
        }
        return 0;
    }


    for (let i = 0; i < 5; i++) {
        if (General(password, i) == 0) {
            alert(datos[i].texto);

        }
    }
    //----------Búsqueda 2.0----------


    //----------Comprobar Contraseña----------
    var password2 = document.getElementById('CcPaswd2').value;

    if (password != password2) {
        alert('Las contraseñas no coinciden');
    }

    //----------Email----------

    var email = document.getElementById('Email').value;
    if (email.length == 0) {
        alert('El campo Email está vacío');

    } else {
        if (email.length > 120) {
            alert('El campo Email solo puede contener 120 caracteres');

        }
    }
    this.submit();
}