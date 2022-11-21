var usuarios = [
    {
        id: 1,
        nombre: "Goku",
        imagenPerfil: "assets/img/profile-pics/goku.jpg",
        correo: 'goku@unah.hn',
        contraseña:'madrid',
        direccion: 'boulevard suyapa',
        numero: 99887766,
        pedidos: [
            {
                category: 1,
                socios: 4,
                productos: 1,
                unidades: false,
            },
            {
                category: 2,
                socios: 5,
                productos: 0,
                unidades: true,
            },
            {
                category: 3,
                socios: 5,
                productos: 0,
                unidades: true,
            }
        ]
    },
    {
        id: 2,
        nombre: "videl",
        imagenPerfil: "assets/img/profile-pics/videl.jpg",
        correo: 'videl@unah.hn',
        contraseña:'motagua',
        direccion: 'boulevard suyapa',
        numero: 99887766,
        pedidos: [
            {
                category: 1,
                socios: 4,
                productos: 1,
                unidades: false,
            },
            {
                category: 2,
                socios: 5,
                productos: 0,
                unidades: true,
            },
            {
                category: 3,
                socios: 5,
                productos: 0,
                unidades: true,
            }
        ]
    },
    {
        id: 3,
        nombre: "freezer",
        imagenPerfil: "assets/img/profile-pics/freezer.jpg",
        correo: 'freezer@unah.hn',
        contraseña:'olimpia',
        direccion: 'boulevard suyapa',
        numero: 99887766,
        pedidos: [
            {
                category: 1,
                socios: 4,
                productos: 1,
                unidades: false,
            },
            {
                category: 2,
                socios: 5,
                productos: 0,
                unidades: true,
            },
            {
                category: 3,
                socios: 5,
                productos: 0,
                unidades: true,
            }
        ]
    },
    {
        id: 4,
        nombre: "gohan",
        imagenPerfil: "assets/img/profile-pics/gohan.jpg",
        correo: 'gohan@unah.hn',
        contraseña:'barcelona',
        direccion: 'boulevard suyapa',
        numero: 99887766,
        pedidos: [
            {
                category: 1,
                socios: 4,
                productos: 1,
                unidades: false,
            },
            {
                category: 2,
                socios: 5,
                productos: 0,
                unidades: true,
            },
            {
                category: 3,
                socios: 5,
                productos: 0,
                unidades: true,
            }
        ]
    }
];

var categorias = [
    {
        id: 1,
        nombre: "COMIDA",
        icono: "assets/img/categorias/1.jpg",
        color: "#F27B7B",
        socios: [
            {
            id: 1,
            palabra: "BIGOS",
            logo: "assets/img/restaurantes/R1.jpg",
            productos: [
                {
                    id: 1,
                    nombre: "HAMBURGUESA GIGANTE",
                    precio: 139,
                    imagen: 'assets/img/productos/bigos/B1.jpg',
                },{
                    id: 2,
                    nombre: "BURRITOS DE POLLO",
                    precio: 78,
                    imagen: 'assets/img/productos/bigos/B2.jpg',
                },{
                    id: 3,
                    nombre: "SANWITCH CUBANO",
                    precio: 184,
                    imagen: 'assets/img/productos/bigos/B3.jpg',
                },{
                    id: 4,
                    nombre: "HAMBURGUESA KRISPY",
                    precio: 109,
                    imagen: 'assets/img/productos/bigos/B4.jpg',
                },{
                    id: 5,
                    nombre: "HAMBURGUESA JALAPEÑA",
                    precio: 128,
                    imagen: 'assets/img/productos/bigos/B5.jpg',
                },{
                    id: 6,
                    nombre: "SANDWICH TEJANO",
                    precio: 199,
                    imagen: 'assets/img/productos/bigos/B6.jpg',
                }
            ]

            },
            {
                id: 2,
                palabra: "BURGER KING",
                logo: "assets/img/restaurantes/R2.png",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 3,
                palabra: "POLLO CAMPERO",
                logo: "assets/img/restaurantes/R3.png",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 4,
                palabra: "FURIWA",
                logo: "assets/img/restaurantes/R4.png",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 5,
                palabra: "PIZZA HUT",
                logo: "assets/img/restaurantes/R5.jfif",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 6,
                palabra: "DENNY'S",
                logo: "assets/img/restaurantes/R6.png",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 7,
                palabra: "EL PATIO",
                logo: "assets/img/restaurantes/R7.jfif",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 8,
                palabra: "PUPUSAS MIRAFLORES",
                logo: "assets/img/restaurantes/R8.jpg",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 9,
                palabra: "ALITAS KENNEDY",
                logo: "assets/img/restaurantes/R9.png",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    },
    {
        id: 2,
        nombre: "BEBIDA",
        icono: "assets/img/categorias/2.jpg",
        color: "#F27B7B",
        socios: [
            {
                id: 1,
                palabra: "ITSMANIA",
                logo: "assets/img/restaurantes/B1.png",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 3,
                palabra: "GALEANO",
                logo: "assets/img/restaurantes/B2.jfif",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 3,
                palabra: "CIRCLE K",
                logo: "assets/img/restaurantes/B3.png",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            },
            {
                id: 3,
                palabra: "CASA DEL RON",
                logo: "assets/img/restaurantes/B4.jpg",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    },
    {
        id: 3,
        nombre: "REPOSTERÍA",
        icono: "assets/img/categorias/3.jpg",
        color: "#F27B7B",
        socios: [
            {
            id: 1,
            palabra: "Hermana",
            logo: "assets/img/restaurantes/",
            productos: [
                {
                    palabra: "Brother",
                    correcta: false,
                },{
                    palabra: "Mother",
                    correcta: false,
                },{
                    palabra: "water",
                    correcta: false,
                },{
                    palabra: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                palabra: "Familia",
                logo: "assets/img/restaurantes/",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    },
    {
        id: 4,
        nombre: "CAFÉ Y TÉ",
        icono: "assets/img/categorias/4.jpg",
        color: "#F27B7B",
        socios: [
            {
            id: 1,
            palabra: "Hermana",
            logo: "assets/img/restaurantes/",
            productos: [
                {
                    palabra: "Brother",
                    correcta: false,
                },{
                    palabra: "Mother",
                    correcta: false,
                },{
                    palabra: "water",
                    correcta: false,
                },{
                    palabra: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                palabra: "Familia",
                logo: "assets/img/restaurantes/",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    },
    {
        id: 5,
        nombre: "PAQUETERÍA",
        icono: "assets/img/categorias/5.webp",
        color: "#F27B7B",
        socios: [
            {
            id: 1,
            palabra: "Hermana",
            logo: "assets/img/restaurantes/",
            productos: [
                {
                    palabra: "Brother",
                    correcta: false,
                },{
                    palabra: "Mother",
                    correcta: false,
                },{
                    palabra: "water",
                    correcta: false,
                },{
                    palabra: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                palabra: "Familia",
                logo: "assets/img/restaurantes/",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    },
    {
        id: 6,
        nombre: "ABARROTERÍA",
        icono: "assets/img/categorias/6.webp",
        color: "#F27B7B",
        socios: [
            {
            id: 1,
            palabra: "Hermana",
            logo: "assets/img/restaurantes/",
            productos: [
                {
                    palabra: "Brother",
                    correcta: false,
                },{
                    palabra: "Mother",
                    correcta: false,
                },{
                    palabra: "water",
                    correcta: false,
                },{
                    palabra: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                palabra: "Familia",
                logo: "assets/img/restaurantes/",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    },
    {
        id: 7,
        nombre: "GIFTS",
        icono: "assets/img/categorias/7.webp",
        color: "#F27B7B",
        socios: [
            {
            id: 1,
            palabra: "Hermana",
            logo: "assets/img/restaurantes/",
            productos: [
                {
                    palabra: "Brother",
                    correcta: false,
                },{
                    palabra: "Mother",
                    correcta: false,
                },{
                    palabra: "water",
                    correcta: false,
                },{
                    palabra: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                palabra: "Familia",
                logo: "assets/img/restaurantes/",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    },
    {
        id: 8,
        nombre: "FARMACIA",
        icono: "assets/img/categorias/8.webp",
        color: "#F27B7B",
        socios: [
            {
            id: 1,
            palabra: "Hermana",
            logo: "assets/img/restaurantes/",
            productos: [
                {
                    palabra: "Brother",
                    correcta: false,
                },{
                    palabra: "Mother",
                    correcta: false,
                },{
                    palabra: "water",
                    correcta: false,
                },{
                    palabra: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                palabra: "Familia",
                logo: "assets/img/restaurantes/",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    },
    {
        id: 9,
        nombre: "FERRETERÍA",
        icono: "assets/img/categorias/9.webp",
        color: "#F27B7B",
        socios: [
            {
            id: 1,
            palabra: "Hermana",
            logo: "assets/img/restaurantes/",
            productos: [
                {
                    palabra: "Brother",
                    correcta: false,
                },{
                    palabra: "Mother",
                    correcta: false,
                },{
                    palabra: "water",
                    correcta: false,
                },{
                    palabra: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                palabra: "Familia",
                logo: "assets/img/restaurantes/",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    },
    {
        id: 10,
        nombre: "PAPELERÍA",
        icono: "assets/img/categorias/10.jfif",
        color: "#F27B7B",
        socios: [
            {
            id: 1,
            palabra: "Hermana",
            logo: "assets/img/restaurantes/",
            productos: [
                {
                    palabra: "Brother",
                    correcta: false,
                },{
                    palabra: "Mother",
                    correcta: false,
                },{
                    palabra: "water",
                    correcta: false,
                },{
                    palabra: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                palabra: "Familia",
                logo: "assets/img/restaurantes/",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    },
    {
        id: 11,
        nombre: "TECNOLOGÍA",
        icono: "assets/img/categorias/11.webp",
        color: "#F27B7B",
        socios: [
            {
            id: 1,
            palabra: "Hermana",
            logo: "assets/img/restaurantes/",
            productos: [
                {
                    palabra: "Brother",
                    correcta: false,
                },{
                    palabra: "Mother",
                    correcta: false,
                },{
                    palabra: "water",
                    correcta: false,
                },{
                    palabra: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                palabra: "Familia",
                logo: "assets/img/restaurantes/",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    },
    {
        id: 12,
        nombre: "DEPORTE",
        icono: "assets/img/categorias/12.jpg",
        color: "#F27B7B",
        socios: [
            {
            id: 1,
            palabra: "Hermana",
            logo: "assets/img/restaurantes/",
            productos: [
                {
                    palabra: "Brother",
                    correcta: false,
                },{
                    palabra: "Mother",
                    correcta: false,
                },{
                    palabra: "water",
                    correcta: false,
                },{
                    palabra: "Sister",
                    correcta: true,
                },
            ]

            },
            {
                id: 2,
                palabra: "Familia",
                logo: "assets/img/restaurantes/",
                productos: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },{
                        palabra: "Mother",
                        correcta: false,
                    },{
                        palabra: "water",
                        correcta: false,
                    },{
                        palabra: "Java",
                        correcta: false,
                    }
                ]
        
            }
        ],

    }
];

var pedidosPendientes =[
    {
        id: 0,
        category: 0,
        socios: 0,
        productos: 0,
        unidades: 0,
    }
]


//console.log('Usuarios', usuarios);

console.log('ver',categorias[0].socios);
console.log('ver',categorias.length);
console.log('ver',usuarios.length);
var unit;


var localstorage = window.localStorage;

if(localStorage.getItem('usuarios')== null) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

if(localStorage.getItem('categorias')== null) {
    localStorage.setItem('categorias', JSON.stringify(categorias));
}
console.log('a', JSON.parse(localstorage.getItem('categorias'))[0].socios);
console.log('b', JSON.parse(localstorage.getItem('categorias'))[0].socios[0].id);

console.log('c', JSON.parse(localstorage.getItem('usuarios')).length);

function login() {
    if (document.getElementsByClassName('origen0')[0].id!='titulo') {
        document.getElementsByClassName('origen0')[0].id='titulo';
        document.getElementsByClassName('origen1')[0].id='facetas';
    };
    document.getElementById('titulo').innerHTML= `<div>aunClick</div>`
    document.getElementById('facetas').innerHTML =
        `<div><img src="assets/img/1.png" alt="" id="imagen"></div>
        <div id="login-signup">
            <button id="login" onclick="generarUsuarios()">
                LOGIN
            </button>
            <hr>
            <div style="color: #4C33E7; font-size: 2.0rem;" onclick="registrarse()">
                REGISTRARSE
            </div>
        </div>`;
}


function generarUsuarios() {
        document.getElementsByClassName('origen1')[0].id='personas'
        document.getElementById('personas').innerHTML=null;
        document.getElementsByClassName('origen0')[0].id='titulo2'
        document.getElementById('titulo2').innerHTML = 
            `<div><i class="fa-solid fa-angle-left" onclick="login()"></i></div>
            <div>aunClick-USUARIOS</div>
            <div><i class="fa-solid fa-bars" onclick="menu()" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></div>`
        JSON.parse(localStorage.getItem('usuarios')).forEach(function(foto) {
            console.log("i", foto.id);
            document.getElementById('personas').innerHTML +=
                `<button class="btn" style="border-radius: 15%;" onclick="generarCategorias(${foto.id}); console.log('id', ${foto.id});">
                    <img src="${foto.imagenPerfil}" id="otraFoto" style="border-radius: 15%;">
                    <div id="rubro">
                        ${foto.nombre}    
                    </div>
                </button>`;
           });  
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
            <div><i class="fa-regular fa-circle-user"></i> PERFIL</div>
            <div><i class="fa-solid fa-cart-shopping"></i> COMPRAS</div>
            <div><i class="fa-regular fa-comment-dots"></i> MENSAJES</div>
            <div><i class="fa-regular fa-bell"></i> NOTIFICACIONES</div>
            <div onclick="login()" data-bs-dismiss="modal"><i class="fa-solid fa-right-from-bracket"></i> SALIR</div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CERRAR</button>
        </div>
        </div>
    </div>
    </div>`;
}

function generarCategorias(a) {
    //if(JSON.parse(localstorage.getItem('categorias'))[0].socios[0].id==iden) {console.log('func', JSON.parse(localstorage.getItem('categorias'))[0].socios[0].id);}
    document.getElementsByClassName('origen1')[0].id='categoria'
    document.getElementById('categoria').innerHTML=null;
    document.getElementById('titulo2').innerHTML = 
        `<div><i class="fa-solid fa-angle-left" onclick="generarUsuarios()"></i></div>
         <div>aunClick-CATEGORIAS</div>
         <div><i class="fa-solid fa-bars" onclick="menu()" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></div>`;
    JSON.parse(localStorage.getItem('categorias')).forEach(function(rubro){
        document.getElementById('categoria').innerHTML +=
           `<button class="btn col-6" id="botonSelect" onclick="generarRestaurantes(${a}, ${rubro.id})">
                <img src="${rubro.icono}" style="border-radius: 15%; width:140px; height:115px;">
                <div id="rubro">${rubro.nombre}
                </div>
            </button>`;
       }); 
}

function generarRestaurantes(a,b) {
    console.log('b', b);
    document.getElementById('categoria').innerHTML=null;
    document.getElementById('titulo2').innerHTML = 
        `<div><i class="fa-solid fa-angle-left" onclick="generarCategorias(${a})"></i></div>
         <div>aunClick-RESTAURANTES</div>
         <div><i class="fa-solid fa-bars" onclick="menu()" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></div>`;
    JSON.parse(localStorage.getItem('categorias'))[b-1].socios.forEach(function(ques){
        
            document.getElementById('categoria').innerHTML +=
            `<button class="btn col-6" id="botonSelect" onclick="generarProductos(${a}, ${b}, ${ques.id})">
                 <img src="${ques.logo}" style="border-radius: 15%; width:130px; height:130px;">
                 <div id="rubro">${ques.palabra}
                 </div>
             </button>`;
       }); 
}

function generarProductos(a,b,c) {
    document.getElementById('categoria').innerHTML=null;
    //document.getElementById('personas').id='categoria';
    document.getElementById('titulo2').innerHTML = 
        `<div><i class="fa-solid fa-angle-left" onclick="generarRestaurantes(${a},${b})"></i></div>
         <div>aunClick-PROD/SERV</div>
         <div><i class="fa-solid fa-bars" onclick="menu()" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></div>`;
    JSON.parse(localStorage.getItem('categorias'))[b-1].socios[c-1].productos.forEach(function(pro){
        
            document.getElementById('categoria').innerHTML +=
            `<button class="btn col-6" id="botonSelect" onclick="compraProducto(${a},${b},${c},${pro.id})">
                 <img src="${pro.imagen}" style="border-radius: 15%; width:130px; height:130px;">
                 <div id="rubro">${pro.nombre}
                 </div>
             </button>`;
       }); 
}

function compraProducto(a,b,c,d) {
    unit=1;
    document.getElementById('categoria').innerHTML=null;
    document.getElementById('titulo2').innerHTML = 
        `<div><i class="fa-solid fa-angle-left" onclick="generarProductos(${a},${b},${c})"></i></div>
         <div>aunClick-COMPRA</div>
         <div><i class="fa-solid fa-bars" onclick="menu()" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></div>`;
    document.getElementById('categoria').innerHTML =
        `<div id="compra"><img src="assets/img/productos/bigos/bigos.jpg" style="border-radius: 15%; width:350px;">
            <br><br><br>
            <button class="btn col-6" id="botonSelect">
                    <img src="${JSON.parse(localStorage.getItem('categorias'))[b-1].socios[c-1].productos[d-1].imagen}" style="border-radius: 15%; width:150px; height:150px;">
                    <div id="rubro">${JSON.parse(localStorage.getItem('categorias'))[b-1].socios[c-1].productos[d-1].nombre}</div>      
            </button>
            <br><div id="rubro" style="font-size:2rem;">L ${JSON.parse(localStorage.getItem('categorias'))[b-1].socios[c-1].productos[d-1].precio}.00</div><br>
            
            <div style="font-size:2rem; width:100%; display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-evenly; align-items: center; align-content: center;" id="rubro">
                <div onclick="cantidad(0)"><i class="fa-solid fa-circle-minus"></i></div>
                <div id="num">${unit}</div>
                <div onclick="cantidad(1)"><i class="fa-solid fa-circle-plus"></i></div>
                
            </div>
            <div id="titulo3">AGREGAR A ORDEN</div>
        </div>`;
}

function registrarse() {
    
    document.getElementsByClassName('origen0')[0].id='titulo2'
        document.getElementById('titulo2').innerHTML = 
            `<div><i class="fa-solid fa-angle-left" onclick="login()"></i></div>
            <div>aunClick-REGISTRO</div>
            <div><i class="fa-solid fa-bars" onclick="menu()" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></div>`
    document.getElementById('facetas').innerHTML =
        `<div class="container">
            <div id="registro">
            
                    <input class="form-control" type="text" id="name" placeholder="Nombre de Usuario">
                    <input class="form-control" type="number" id="image" placeholder="Imagen perfil" min="1" max="2">
                    <input class="form-control" type="text" id="email" placeholder="Correo Electrónico">
                    <input class="form-control" type="password" id="password" placeholder="Contraseña">
                    <input class="form-control" type="text" id="address" placeholder="Dirección">
                    <input class="form-control" type="number" id="cell" placeholder="Número Celular" min="8" max="8">                   

            </div>
         </div>
        <div id="login-signup">
            <button id="login" onclick="guardar()">
                SIGN UP
            </button>
            <hr>
        </div>`;

        
}

function guardar() {
    const user =  {
                
        id: JSON.parse(localstorage.getItem('usuarios')).length + 1,
        nombre: document.getElementById('name').value,
        imagenPerfil: `assets/img/profile-pics/${document.getElementById('image').value}.jpg`,
        correo: document.getElementById('email').value,
        contraseña:document.getElementById('password').value,
        direccion: document.getElementById('address').value,
        numero: document.getElementById('cell').value,
        pedidos: [],
    };

    console.log(user);
    usuarios.push(user);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    console.log(usuarios);

    generarUsuarios();
}



function cantidad(valor) {
    if (valor==1) {
        unit++
    } else if(unit<2) {}
    else {
        unit--
    };
    console.log(unit); 
    document.getElementById('num').innerHTML = `${unit}`;
}

function ordenPendiente(params) {
      
    
}