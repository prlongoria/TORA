const gameMap = createGameMap();                             //Quiero que se ejecute la función en que se crea el mapa del juego y se guarde en esta constante
const boton = document.getElementById ("do");               //Recojo el botón
const verbs = createVerbsMap();                             //Quiero que se ejecute la función en que se crea el mapa de verbos posibles
boton.onclick = executeCommands;                            //Le digo lo que quiero que pase cuando doy clic al botón
let player = {position: [3, 0]};                          //Creamos una variable para que el jugador meta su posición y cambie el output a la descripción de donde se encuentra
                           
let exits = ["N", "S", "E", "W"];                           //Creo la variable exits
console.log (player.position);                              //Miro si funciona bien
let description = document.getElementById ("description");  //Cambio el texto cuando cambie la posición
let message = gameMap [player.position[0]][player.position[1]].description;  //Lo hago dinámico, para que cada vez que meta una posición diferente,cambie la descripción de donde se encuentra el jugador:dentro de gameMap meto los elementos [0] y [1] porque en este caso position es bidimensional, rooms[][]

description.innerHTML = message;                            //Cojo lo que pone el HTML en descripción y lo cambio por el message    
//console.log (message);

function concatenateCommands (command){                     //Creo una función para concatenar los mensajes (que no se borre lo que ya tiene en pantalla el output) cuando mete un comando el player de verbo y palabra aparezca en el output
    description.innerHTML += "<p>" + "> " + command + "</p>";
}

function concatenateOutputs (output){                       //Creo una función para concatenar los mensajes que le aparecen en el output cuando mete un comando el player de verbo y palabra, tanto si es un verbo correcto como si es no válido
   description.innerHTML += "<p>" + output + "</p>";
}


function createGameMap(){                                   //Creo la función donde creo mi mapa de recorrido (plano del juego) y las descripciones de los recintos (rooms)
    let rooms = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];    
    //console.log (rooms.length);
    //console.log(rooms);
    rooms [0][0]= {description: "Estás viendo a un guardia a lo lejos, quieres acercate y hablar con él o prefieres pasar a hurtadillas?", exits: ['e']};
    rooms [1][0]= {description: "Te encuentras en una estancia en penumbra, parece que se vislumbra una cama...¿es un dormitorio? Sí! Hay dos mesitas y un armario, decides rebuscar por si encontraras algo que te ayude en tu camino. Encuentras una vela, pero no hay mechero ni cerillas...quieres cogerla o prefieres dejarla, total no parece que sirva de nada. Ahora ves dos puertas, una Azul y otra Blanca, cuál prefieres abrir?", exits: ['n', 'e']};
    rooms [2][0]= {description: "De repente te encuentras ante una larga escalera, empiezas a subir y en el descansillo se divide en dos ramas, una a la izquierda y otra a la derecha, por cual te decides?", exits: ['n', 'e']};
    rooms [3][0]= {description: "Te pitan los oídos, estás aturdida, tienes mucha sed, abres los ojos y apenas puedes enfocar las imágenes..¿Dónde estoy? Cuando tus ojos empiezan a enfocar, te das cuenta de que te encuentras en una especie de sótano, te das cuenta de que hay dos puertas, una Azul y una Blanca, intentas abrirlas pero están cerradas con llave, así que empiezas a rebuscar y ves en un cajón unas herramientas, sí, un destornillador, quizá pueda servir, a qué puerta te diriges, al N o al E?", exits: ['n', 'e']};
    rooms [0][1]= {description: "Le has dado esquinazo al guardia, no parecía muy amigable. Y te encuentras en un pequeño baño, ves varios objetos aquí, qué te puede ser de ayuda, unas tijeras, unas tiritas, unas pilas? Mira, parece que hay una trampilla...decides ver qué hay al otro lado o regresas donde el guardia a busar una salida mejor?", exits: ['e', 'w']};
    rooms [1][1]= {description: "Estás en una especie de hall, y de repente aparece un hombre, te ha visto! Viene hacia ti! Qué puedes hacer? Intentas esconderte pero ya le tienes encima, te pregunta qué haces aquí? Le dices que te has perdido, sólo querías ir al baño, así que él te indica que el baño está en la puerta Blanca y se va. Sin embargo, puedes ver que hay otra puerta más de color Azul, por cual decides ir?", exits: ['n', 'e']};
    rooms [2][1]= {description: "Al abrir la puerta, escuchas pasos, y te das cuenta de que un hombre de uniforme viene hacia tí!! Un guardia!! Se acerca a hablar contigo. Te asustas mucho, pero te tranquilza, y te dice que te ayudará, que puedes salir por cualquiera de las dos puertas de la estancia, la Azul o la Blanca, te recomienda que salgas por la Azul y se va, qué escoges tú?", exits: ['s', 'e']};
    rooms [3][1]= {description: "Abres la puerta y se cierra bruscamente a tu espalda asustándote, sientes una corriente de aire, pero no puedes ver nada, parece un largo y frío pasillo, pero no puedes ver a dónde te llevará...necesitas un poco de luz. Cuando la consigues ves que tienes dos salidas, una Azul y otra Blanca, cuál decides coger?", exits: ['n', 'e']};
    rooms [0][2]= {description: "Ves una especie de biblioteca, y en uno de los sillones parece que haya alguien, es un hombre muy mayor, quieres hablar con él? Al dirigirte a él, se pone a gritar y a tocar una campanlla, oyes pasos tras una de las puertas...es un guardia!! Rápido, por qué puerta escapas?También ves dos salidas, prefieres tomar una de ellas? Cuál, Azul o Blanca?", exits: ['s', 'e']};
    rooms [1][2]= {description: "Un despacho! Hay un ordenador!!!Quizá tenga algo que necesite? Algún plano para saber cómo salir de aquí? Decides usar el ordenador, pero no tiene conexión a internet! Ahora que lo has conseguido, te das cuenta de que hay un documento que parece interesante, C@d3s, lo abres y puedes ver varias claves que parecen de cerraduras electrónicas o sistemas de seguridad, los quieres coger? Ahora te das cuenta de que tienes dos salidas, Azul o Blanca?", exits: ['e', 'w']};
    rooms [2][2]= {description: "Fíjate! Un almacén, quizá puedas encontrar algo que te sea útil..mira, tienen, pilas, cables, tijeras, alicates, mechero...pero sólo puedes coger uno de ellos, cual quieres? Continuas ahora tu camino, hacia qué puerta te diriges, Azul o Blanca?", exits: ['s', 'w']};
    rooms [3][2]= {description: "La cocina, sí! Te mueres de sed! Quieres usar el agua? Ahora que te sientes mejor, hacia dónde quieres ir, Azul o Blanco?", exits: ['n', 'w']};
    rooms [1][3]= {description: " ", exits: ['e', 'w']};
    rooms [2][3]= {description: " ", exits: ['s', 'w']};
    rooms [3][3]= {description: "Aire puro!! Mira qué cielo tan estrellado, y qué frío!! Pero qué gusto salir de esas paredes! Mira, un coche!!! Cómo puedes arrancarlo?", exits: ['n', 's', 'e', 'w']};
    console.log(rooms[3][0].exits[1]);
    return rooms;
}

function createVerbsMap(){                              //Creo una función para crear la lista o mapa de verbos válidos y sus objetos
    const verbs = new Map ();
    verbs.set ("ir", {do:movePlayer});
    verbs.set ("coger", true);
    verbs.set ("usar", true);
    verbs.set ("mirar", true);
    verbs.set ("hablar", true);
    return verbs;
}

function movePlayer(direction){                                  //Creo una función para que cuando metar verbs.get(commandVerb).do(commandObject), mueva al jugador por mi mapa de juego y a su vez que cambien las descripciones de la nueva posición en que se encuentra
   console.log (direction)
    console.log ("Moving Player");                                   //Pruebo en consola que funciona mi función 
    let currentDescription = gameMap [player.position[0]][player.position[1]].description;  //cojo la descripción de la posición en que se vaya encontrando a medida que cambia de posición
    let availableExits = gameMap [player.position[0]][player.position[1]].exits;       //cojo la exit que vaya escogiendo
    let exits = ["n", "s", "e", "w"];                                               //creo un array de exits
    if (!exits.includes(direction)){                                         //si exits NO INCLUYE la dirección que meta el jugador, el output pondrá ese mensaje
        concatenateOutputs("Dirección errónea");                                // solo return porque quiero que no retorne nada
        return;
    }
    if (!availableExits.includes(direction)){                                //Si avalaibleExits no incluye esa dirección, el output manda ese mensaje
        concatenateOutputs("No puedes pasar por aquí");
        return;
    }
  changePosition(direction);
}

function changePosition (direction){
    let currentDescription = gameMap [player.position[0]][player.position[1]].description;
    console.log (direction);
    if (direction==='n'){
         player = {position: [3, 1]};                          //Creamos una variable para que el jugador meta su posición y cambie el output a la descripción de donde se encuentra

        //player.position [1] += 1;
        //console.log (player);
       // return currentDescription;
    }
    if (direction==='s'){
     player.position [1] -= 1;
     //return currentDescription;
     }
 if (direction==='e'){
     player.position [0]+= 1;
    // return currentDescription;
     }
 if (direction==='w'){
     player.position [0]-= 1;
     //return currentDescription;
     }
}
    

function executeCommands(){                                             //Función para que al meter el player un comando (verbo+exits) cambie la descripción del lugar a la del lugar en que se encuentra
    console.log ("Estoy en la función executeComands");
    let commands =document.getElementById("commands").value;            //Quiero que coja el valor (el input de id commands, lo que es el verbo+exit) que mete el usuario en el input commands
    concatenateCommands(commands);                                      //Para que no lo sustituya, sino que lo añada a la historia que sale en el output
    commands = commands.toLowerCase();                                  //Quiero que lo convierta todo a minúsculas
    //console.log (commands);                                             //Para ver en consola qué imprimiría:
    let command = commands.split (' ');                                 //Quiero que separe las strings que mete el usuario en dos strings
    let commandVerb = command [0];
    let commandObject = command[1];                                      //Quiero que coja sólo el primer string ([0], es decir, el verbo, no el exits)de las que contiene command
    //console.log(commandObject);
    //console.log (commandVerb);                                          //Quiero ver qué pasa en consola, para saber si voy bien encaminada
                                                                        //Quiero que si el verbo (primer string de commands) está en mi mapa, salga en el output el mensaje "Buena Elección":
    if (verbs.has(commandVerb)){                                        //Si mi mapa contiene el primer string de command, que es el verbo, entonces
        verbs.get(commandVerb).do(commandObject);                       //coge el primer parametro y el segundo de command, es decir, verifica que el verbo es correcto y también que la dirección o el objeto o lo que tenga que poner junto a ese verbo, sea válido para poder continuar con el juego
        let description = document.getElementById ("description");      //Recoje lo que pone el output description de mi html
        let message = "Buena elección de acción!";                                //Creo un mensaje que quiero que aparezca si se cumple la condición que puse
        concatenateOutputs(message)                                     //Coge lo que pone en description y súmale el message: AL TENER QUE CONCATENARLO, LE METO LA FUNCIÓN concatenateOutputs(AQUÍ METO EL message de Buena Elección) QUE ES LA QUE TIENE QUE REALIZAR CUANDO METE UN COMANDO VÁLIDO
        return message;                                                 //Devuélveme en el output lo que pone en message
        
    }else{
        let description = document.getElementById ("description");
        let message = "Acción no válida. Prueba con Ir, Coger, Usar, Mirar, Hablar";
        concatenateOutputs(message)                                     //AL TENER QUE CONCATENARLO, LE METO LA FUNCIÓN concatenateOutputs(AQUÍ METO EL message de Buena Elección) QUE ES LA QUE TIENE QUE REALIZAR CUANDO METE UN COMANDO VÁLIDO
        return message;
    }  

}


function splitString (sentence){                        //Función para separar los comandos (verbo+exit) que pone en el input el player
    var words = sentence.split(" ");
    console.log(words[0]);
    console.log(words[1]);
    return words;
}




//let concatenatedOutputs = concatenateOutputs;
//console.log (concatenatedOutputs());


/*YO CREO QUE ESTO NO VALE:
    if (movePlayer [3][0]){
        let message = "Quieres ir al N o al E?";
            if (exits = "N"){
                player.position [2][0]; 
                return message;               
            }
            if (exits = "E"){
                player.position [3][1];
                return message;
            } else{
                message = "Opción errónea, prueba las dadas"
                return message;
            }
    }*/

/*CREO QUE ESTO NO VALE:
function movePlayer() {
    if (player.position [3][0]){
        let optionsMessage = "Quieres ir al N o al E?";
        return optionsMessage;
        if (exits = "N") {
            player.position [2][0]; 
                return message; 
        }
        if (exits = "E") {
            player.position [3][1]; 
                return message; 
        }
    }




    //let verbs = direction.do;    
    //verbs.get ("ir");
    //verbs.get ("coger");
    //verbs.get ("usar");
    //verbs.get ("mirar");
    //verbs.get ("hablar");
    //return verbs.get;
    //console.log ("Has escogido ", verbs.get);
 



/*function createVerbsMap(){
    const verbs = new Map ();
    verbs.set ("ir", true);
    verbs.set ("coger", true);
    verbs.set ("usar", true);
    verbs.set ("mirar", true);
    verbs.set ("hablar", true);
    return verbs;
}*/