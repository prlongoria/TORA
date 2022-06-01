const gameMap = createGameMap();

//Recojo el botón:
const boton = document.getElementById ("do");
const verbs = createVerbsMap();

//Le digo lo que quiero que pase cuando doy clic al botón:
boton.onclick = executeCommands;

//Creamos una variable para que el jugador meta su posición y cambie el output a la descripción de donde se encuentra:
let player = {position: [0, 0]};
//Miro si funciona bien:
console.log (player.position);
//Cambio el texto cuando cambie la posición:
let description = document.getElementById ("description");    
//Lo hago dinámico, para que cada vez que meta una posición diferente,cambie la descripción de donde se encuentra el jugador:dentro de gameMap meto las posiciones [0] y [1] porque en este caso solo tiene dos posiciones, si tuviera una tercera la metería como player.position[2]   
let message = gameMap [player.position[0]][player.position[1]].description;        
description.innerHTML = message;       
console.log (message);
//let concatenatedOutputs = concatenateOutputs;
//console.log (concatenatedOutputs());

function concatenateCommands (command){
    description.innerHTML += "<p>" + "> " + command + "</p>";

}

function concatenateOutputs (output){
    description.innerHTML += "<p>" + output + "</p>";

}



function createGameMap(){

    let rooms = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
    //let exits = ["N", "S", "E", "W"];

    console.log (rooms.length);

    console.log(rooms);
    rooms [0][0]= {description: "Estás viendo a un guardia a lo lejos, quieres acercate y hablar con él o prefieres pasar a hurtadillas?", exits: ['E']};
    rooms [1][0]= {description: "Te encuentras en una estancia en penumbra, parece que se vislumbra una cama...¿es un dormitorio? Sí! Hay dos mesitas y un armario, decides rebuscar por si encontraras algo que te ayude en tu camino. Encuentras una vela, pero no hay mechero ni cerillas...quieres cogerla o prefieres dejarla, total no parece que sirva de nada. Ahora ves dos puertas, una Azul y otra Blanca, cuál prefieres abrir?", exits: ['N', 'E']};
    rooms [2][0]= {description: "De repente te encuentras ante una larga escalera, empiezas a subir y en el descansillo se divide en dos ramas, una a la izquierda y otra a la derecha, por cual te decides?", exits: ['N', 'E']};
    rooms [3][0]= {description: "Te pitan los oídos, estás aturdida, tienes mucha sed, abres los ojos y apenas puedes enfocar las imágenes..¿Dónde estoy? Cuando tus ojos empiezan a enfocar, te das cuenta de que te encuentras en una especie de sótano, te das cuenta de que hay dos puertas, una Azul y una Blanca, intentas abrirlas pero están cerradas con llave, así que empiezas a rebuscar y ves en un cajón unas herramientas, sí, un destornillador, quizá pueda servir, a qué puerta te diriges?", exits: ['N', 'E']};
    rooms [0][1]= {description: "Le has dado esquinazo al guardia, no parecía muy amigable. Y te encuentras en un pequeño baño, ves varios objetos aquí, qué te puede ser de ayuda, unas tijeras, unas tiritas, unas pilas? Mira, parece que hay una trampilla...decides ver qué hay al otro lado o regresas donde el guardia a busar una salida mejor?", exits: ['E', 'W']};
    rooms [1][1]= {description: "Estás en una especie de hall, y de repente aparece un hombre, te ha visto! Viene hacia ti! Qué puedes hacer? Intentas esconderte pero ya le tienes encima, te pregunta qué haces aquí? Le dices que te has perdido, sólo querías ir al baño, así que él te indica que el baño está en la puerta Blanca y se va. Sin embargo, puedes ver que hay otra puerta más de color Azul, por cual decides ir?", exits: ['N', 'E']};
    rooms [2][1]= {description: "Al abrir la puerta, escuchas pasos, y te das cuenta de que un hombre de uniforme viene hacia tí!! Un guardia!! Se acerca a hablar contigo. Te asustas mucho, pero te tranquilza, y te dice que te ayudará, que puedes salir por cualquiera de las dos puertas de la estancia, la Azul o la Blanca, te recomienda que salgas por la Azul y se va, qué escoges tú?", exits: ['S', 'E']};
    rooms [3][1]= {description: "Abres la puerta y se cierra bruscamente a tu espalda asustándote, sientes una corriente de aire, pero no puedes ver nada, parece un largo y frío pasillo, pero no puedes ver a dónde te llevará...necesitas un poco de luz. Cuando la consigues ves que tienes dos salidas, una Azul y otra Blanca, cuál decides coger?", exits: ['N', 'E']};
    rooms [0][2]= {description: "Ves una especie de biblioteca, y en uno de los sillones parece que haya alguien, es un hombre muy mayor, quieres hablar con él? Al dirigirte a él, se pone a gritar y a tocar una campanlla, oyes pasos tras una de las puertas...es un guardia!! Rápido, por qué puerta escapas?También ves dos salidas, prefieres tomar una de ellas? Cuál, Azul o Blanca?", exits: ['S', 'E']};
    rooms [1][2]= {description: "Un despacho! Hay un ordenador!!!Quizá tenga algo que necesite? Algún plano para saber cómo salir de aquí? Decides usar el ordenador, pero no tiene conexión a internet! Ahora que lo has conseguido, te das cuenta de que hay un documento que parece interesante, C@d3s, lo abres y puedes ver varias claves que parecen de cerraduras electrónicas o sistemas de seguridad, los quieres coger? Ahora te das cuenta de que tienes dos salidas, Azul o Blanca?", exits: ['E', 'W']};
    rooms [2][2]= {description: "Fíjate! Un almacén, quizá puedas encontrar algo que te sea útil..mira, tienen, pilas, cables, tijeras, alicates, mechero...pero sólo puedes coger uno de ellos, cual quieres? Continuas ahora tu camino, hacia qué puerta te diriges, Azul o Blanca?", exits: ['S', 'W']};
    rooms [3][2]= {description: "La cocina, sí! Te mueres de sed! Quieres usar el agua? Ahora que te sientes mejor, hacia dónde quieres ir, Azul o Blanco?", exits: ['N', 'W']};
    rooms [1][3]= {description: " ", exits: ['E', 'W']};
    rooms [2][3]= {description: " ", exits: ['S', 'W']};
    rooms [3][3]= {description: "Aire puro!! Mira qué cielo tan estrellado, y qué frío!! Pero qué gusto salir de esas paredes! Mira, un coche!!! Cómo puedes arrancarlo?", exits: ['N', 'S', 'E', 'W']};
    //console.log(rooms);
    console.log(rooms[1][0].exits[1]);
    return rooms;
}

function createVerbsMap(){
    const verbs = new Map ();
    verbs.set ("ir", true);
    verbs.set ("coger", true);
    verbs.set ("usar", true);
    verbs.set ("mirar", true);
    verbs.set ("hablar", true);
    return verbs;
}

function executeCommands(){
    //Quiero que coja el valor que mete el usuario en el input commands:
    let commands =document.getElementById("commands").value;
    concatenateCommands(commands);
    //Quiero que lo convierta todo a minúsculas:
    commands = commands.toLowerCase();
    //Para ver en consola qué imprimiría:
    console.log (commands);
    //Quiero que separe las strings que mete el usuario en dos strings:
    let command = commands.split (' ');
    //Quiero que coja sólo el primer string de las que contiene command:
    let commandVerb = command [0];
    //Quiero ver qué pasa en consola, para saber si voy bien encaminada:
    console.log (commandVerb);
    //Quiero que si el verbo (primer string de commands) está en mi mapa, salga en el output el mensaje "Buena Elección":
    if (verbs.has(commandVerb)){    //Si mi mapa contiene el primer string de command, que es el verbo, entonces:
        //Recoje lo que pone el output description demi html:
        let description = document.getElementById ("description");
        //Creo un mensaje que quiero que aparezca si se cumple la condición que puse:
        let message = "Buena elección!";
        //Coge lo que pone en description y cámbialo por message:
        concatenateOutputs(message)
        //Devuélveme en el output lo que pone en message:
        return message;
        /* Si quiero que saga un alert y ver qué pasa en consola:
            alert ("Buena elección!");
            console.log ("Prueba Superada");*/
    }else{
        let description = document.getElementById ("description");
        let message = "Acción no válida. Prueba con Ir, Coger, Usar, Mirar, Hablar";
        concatenateOutputs(message)
        return message;
        /* Si quiero que saga un alert y ver qué pasa en consola:
            alert ("Acción no válida. Prueba con Ir, Coger, Usar, Mirar, Hablar");
            console.log("Na nai");*/
    }   

}
function splitString (sentence){
    var words = sentence.split(" ");
    console.log(words[0]);
    console.log(words[1]);
    return words;
}

