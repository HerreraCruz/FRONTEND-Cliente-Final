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



//console.log ('Usuarios', usuarios);


var localstorage = window.localStorage;

if(localStorage.getItem('usuarios')== null) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function firstPage() {
    

}

function login() {
    if (document.getElementsByClassName('origen0')[0].id!='titulo') {
        document.getElementsByClassName('origen0')[0].id='titulo';
        document.getElementsByClassName('origen1')[0].id='facetas';
    }
    document.getElementById('titulo').innerHTML= `<div>aunClick</div>`
    document.getElementById('facetas').innerHTML =
    `<div><img src="assets/img/1.png" alt="" id="imagen"></div>
    <div id="login-signup">
        <button id="login" onclick="generarUsuarios(0)">LOGIN</button>
        <hr>
        <div style="color: #4C33E7; font-size: 2.0rem;">REGISTRARSE</div>
    </div>`
}


function generarUsuarios(opcion) {
    if (opcion==0) {
        /*document.getElementById('facetas').innerHTML =
        `<h1>hola</h1>`;*/
        document.getElementById('facetas').innerHTML = null;
        document.getElementById('facetas').id='personas';
        document.getElementById('titulo').id='titulo2';
        document.getElementById('titulo2').innerHTML = 
        `<div><i class="fa-solid fa-angle-left" onclick="login()"></i></div>
         <div>aunClick-USUARIOS</div>
         <div><i class="fa-solid fa-bars" onclick="menu()" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></div>`
        JSON.parse(localStorage.getItem('usuarios')).forEach(function(foto) {
            document.getElementById('personas').innerHTML +=
            `<button class="btn" style="border-radius: 15%;">
                <img src="${foto.imagenPerfil}" id="otraFoto" style="border-radius: 15%;">
                <div>
                        <h1 style="color: #FB5669; text-align: center" id="personaje">${foto.nombre}</h1>
                </div>
            </button>`;
           
           });  
    }
}


function menu() {
    document.getElementsByClassName("fa-solid fa-angle-left")[0].innerHTML=
    `<!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">MENU</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            ...
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
        </div>
        </div>
    </div>
    </div>`;
}


/*function generarUsuarios(opcion) {
    if (opcion==0) {
        document.getElementById('facetas').innerHTML =
        `<h1>hola</h1>`;
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
     

}*/

//generarUsuarios();
