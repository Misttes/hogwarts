let puntos = 0;
let house = undefined;
const sendSection = document.querySelector('.btn-center');
const questionsCards = document.getElementById('questions-cards');
const botonSend = document.querySelector('.Send');
const botonYes = document.getElementsByClassName('btn-select');
const botonNo = document.getElementsByClassName('btn-selectNO');
const preguntas = document.getElementsByClassName('questions');
//todo Casas
const Gryffindor = document.getElementById('Gryffindor');
const Hufflepuff = document.getElementById('Hufflepuff');
const Ravenclaw = document.getElementById('Ravenclaw');
const Slytherin = document.getElementById('Slytherin');
//!Contenido
const paginaUno = document.querySelector('.content');
const patronus = document.querySelector('.patronus-select')
//todo Animal
const ciervo = document.getElementById('Ciervo');
const wolf = document.getElementById('Wolf');
const lion = document.getElementById('Lion');
const fenix = document.getElementById('Phoenix');
const btnPatronus = document.querySelector('.btn-patronus')
// Boton Yes
for (let i = 0; i < botonYes.length; i++) {
    preguntas[0].style.display = 'block' ;
    botonYes[i].addEventListener('click', (e) => {
        if (i < 2) {
            preguntas[i+1].style.display = 'block';
            preguntas[i].style.display = 'none';
        }
        else{
            preguntas[i].style.display = 'none';
            //Insertar boton SEND
            sendSection.style.display = 'block';
            questionsCards.style.display = 'none';
        }
        puntos+= 10;

    });
}
// Boton No
for (let i = 0; i < botonNo.length; i++) {
    preguntas[0].style.display = 'block' ;
    botonNo[i].addEventListener('click', (e) => {
        if (i < 2) {
            preguntas[i+1].style.display = 'block';
            preguntas[i].style.display = 'none';
        }
        else{
            preguntas[i].style.display = 'none';
            //Insertar boton SEND
            sendSection.style.display = 'block';
            questionsCards.style.display = 'none';
        }
        puntos+= 2;
    });
}

botonSend.addEventListener('click', (e) => {
    const nombre = document.getElementById('nombre').value;
    if (nombre === "" || nombre === " ") {
        alert("Agregar Nombre para continuar");
        return;
    }
    let numRandom = Math.floor(Math.random() * nombre.length) + 1
    console.log(numRandom);
    puntos = puntos + numRandom;
    const mago = document.getElementById('mago');
    mago.textContent = nombre;

    const edad = document.getElementById('edad').value;
    if (edad === "" || edad === " ") {
        alert("Agregar Nombre para continuar");
        return;
    }
    let edadInt = edad.charAt(edad.length - 1);
    edadInt = parseInt(edadInt, 10)

    puntos = puntos + edadInt;

    const linaje = document.getElementById('linaje').value;
    let linajeInt = parseInt(linaje, 10);
    puntos = puntos + linajeInt;

    document.getElementById('form-group').reset();
    
    puntajeCasa(puntos, linaje);
});

function puntajeCasa(puntos, linaje){

    console.log("puntos: " + puntos);

    if (puntos < 38) {
        if (puntos < 30) {
            Gryffindor.style.display = 'block';
            paginaUno.style.display = 'none';
            patronus.style.display = 'block';
            puntos = Math.round(puntos / 10); 
            console.log(puntos);
            house = "Gryffindor"
            console.log("puntos round: " + puntos, typeof puntos);
            patronusAnimal(puntos);

        } else {
            Hufflepuff.style.display = 'block';
            paginaUno.style.display = 'none';
            patronus.style.display = 'block';
            puntos = Math.round(puntos / 10); 
            console.log(puntos);
            house = "Hufflepuff"
            console.log("puntos round: " + puntos, typeof puntos);
            patronusAnimal(puntos);

        }
    } else {
        if (linaje == "1") {
            Ravenclaw.style.display = 'block';
            paginaUno.style.display = 'none';
            patronus.style.display = 'block';
            puntos = Math.round(puntos / 10);  
            console.log(puntos);
            house = "Ravenclaw"
            console.log("puntos round: " + puntos, typeof puntos);
            patronusAnimal(puntos);
            
        } else {
            Slytherin.style.display = 'block';
            paginaUno.style.display = 'none';
            patronus.style.display = 'block';
            puntos = Math.round(puntos / 10);  
            console.log(puntos);
            house = "Slytherin"
            console.log("puntos round: " + puntos, typeof puntos);
            patronusAnimal(puntos);

        }
    }
    console.log(house);
    return house; 
}
let linajeInt = parseInt(linaje, 10);
function patronusAnimal(puntos){
    btnPatronus.addEventListener('click', (e) => {
        const fobia = parseInt((document.getElementById('fear').value), 10);
        const aperitivo = parseInt((document.getElementById('meal').value), 10);

        puntos = puntos + fobia + aperitivo; 
        console.log("CasaPuntos: "+puntos);
        if (puntos < 11) {
            if (puntos < 8) {
                if (puntos < 5) {
                    ciervo.style.display = 'block';
                    patronus.style.display = 'none'; 
                } else {
                    wolf.style.display = 'block';
                    patronus.style.display = 'none'; 
                }
            } else {
                lion.style.display = 'block';
                patronus.style.display = 'none'; 
            }
        } else {
            fenix.style.display = 'block';
            patronus.style.display = 'none'; 
        }
    })  
}