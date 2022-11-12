var usuarios = [
    {
        id: 1,
        nombre: "Goku",
        imagenPerfil: "assets/img/profile-pics/goku.jpg",
        coronas: 2,
        vidas: 5,
        resultados: [
            {
                category: 1,
                correctas: 4,
                incorrectas: 1,
                aprobadas: false,
            },
            {
                category: 2,
                correctas: 5,
                incorrectas: 0,
                aprobadas: true,
            },
            {
                category: 3,
                correctas: 5,
                incorrectas: 0,
                aprobadas: true,
            }
        ]
    },
    {
        id: 2,
        nombre: "videl",
        imagenPerfil: "assets/img/profile-pics/videl.jpg",
        coronas: 2,
        vidas: 5,
        resultados: [
            {
                category: 1,
                correctas: 4,
                incorrectas: 1,
                aprobadas: false,
            },
            {
                category: 2,
                correctas: 5,
                incorrectas: 0,
                aprobadas: true,
            },
            {
                category: 3,
                correctas: 5,
                incorrectas: 0,
                aprobadas: true,
            }
        ]
    },
    {
        id: 3,
        nombre: "freezer",
        imagenPerfil: "assets/img/profile-pics/freezer.jpg",
        coronas: 2,
        vidas: 5,
        resultados: [
            {
                category: 1,
                correctas: 4,
                incorrectas: 1,
                aprobadas: false,
            },
            {
                category: 2,
                correctas: 5,
                incorrectas: 0,
                aprobadas: true,
            },
            {
                category: 3,
                correctas: 5,
                incorrectas: 0,
                aprobadas: true,
            }
        ]
    },
    {
        id: 4,
        nombre: "Gohan",
        imagenPerfil: "assets/img/profile-pics/gohan.jpg",
        coronas: 2,
        vidas: 5,
        resultados: [
            {
                category: 1,
                correctas: 4,
                incorrectas: 1,
                aprobadas: false,
            },
            {
                category: 2,
                correctas: 5,
                incorrectas: 0,
                aprobadas: true,
            },
            {
                category: 3,
                correctas: 5,
                incorrectas: 0,
                aprobadas: true,
            }
        ]
    }
];



console.log ('Usuarios', usuarios);


var localstorage = window.localStorage;

if(localStorage.getItem('usuarios')== null) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}


function generarUsuarios(opcion) {
    if (opcion==0) {
        /*document.getElementById('facetas').innerHTML =
        `<h1>hola</h1>`;*/
        document.getElementById('facetas').innerHTML = null;
        JSON.parse(localStorage.getItem('usuarios')).forEach(function(foto) {
            document.getElementById('facetas').innerHTML +=
               `<div class="col-4" style="align-items: center;">
           
                           <button class="btn" style="border-radius: 15%;">
                               <img src="${foto.imagenPerfil}" id="otraFoto" style="border-radius: 15%; width:70px;">
                           </button>
           
                   <div>
                   <h1 style="color: #FB5669; text-align: center" id="personaje">${foto.nombre}</h1>
                   </div>
               </div>`;
        
           }); 
        
    }
     

}

generarUsuarios();


function login() {
    


}