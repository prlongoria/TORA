

function separateWords (words){
    let word = words.split (' ');
    console.log (word[0]);
    console.log (word[1]);
}
separateWords ('catch use');
separateWords ('go inspect');

let rooms = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

console.log (rooms.length);

console.log(rooms);
rooms [0][0]= "Estás viendo a un guardia a lo lejos, quieres acercate y hablar con él o prefieres pasar a hurtadillas?";
rooms [1][0]= "Te encuentras en una estancia en penumbra, parece que se vislumbra una cama...¿es un dormitorio? Sí! Hay dos mesitas y un armario, decides rebuscar por si encontraras algo que te ayude en tu camino. Encuentras una vela, pero no hay mechero ni cerillas...quieres cogerla o prefieres dejarla, total no parece que sirva de nada. Ahora ves dos puertas, una Azul y otra Blanca, cuál prefieres abrir?";
rooms [2][0]= "De repente te encuentras ante una larga escalera, empiezas a subir y en el descansillo se divide en dos ramas, una a la izquierda y otra a la derecha, por cual te decides?";
rooms [3][0]= "Te pitan los oídos, estás aturdida, tienes mucha sed, abres los ojos y apenas puedes enfocar las imágenes..¿Dónde estoy? Cuando tus ojos empiezan a enfocar, te das cuenta de que te encuentras en una especie de sótano, te das cuenta de que hay dos puertas, una Azul y una Blanca, intentas abrirlas pero están cerradas con llave, así que empiezas a rebuscar y ves en un cajón unas herramientas, sí, un destornillador, quizá pueda servir, a qué puerta te diriges? ";
rooms [0][1]= "Le has dado esquinazo al guardia, no parecía muy amigable. Y te encuentras en un pequeño baño, ves varios objetos aquí, qué te puede ser de ayuda, unas tijeras, unas tiritas, unas pilas? Mira, parece que hay una trampilla...decides ver qué hay al otro lado o regresas donde el guardia a busar una salida mejor?";
rooms [1][1]= "Estás en una especie de hall, y de repente aparece un hombre, te ha visto! Viene hacia ti! Qué puedes hacer? Intentas esconderte pero ya le tienes encima, te pregunta qué haces aquí? Le dices que te has perdido, sólo querías ir al baño, así que él te indica que el baño está en la puerta Blanca y se va. Sin embargo, puedes ver que hay otra puerta más de color Azul, por cual decides ir?";
rooms [2][1]= "Al abrir la puerta, escuchas pasos, y te das cuenta de que un hombre de uniforme viene hacia tí!! Un guardia!! Se acerca a hablar contigo. Te asustas mucho, pero te tranquilza, y te dice que te ayudará, que puedes salir por cualquiera de las dos puertas de la estancia, la Azul o la Blanca, te recomienda que salgas por la Azul y se va, qué escoges tú?";
rooms [3][1]= "Abres la puerta y se cierra bruscamente a tu espalda asustándote, sientes una corriente de aire, pero no puedes ver nada, parece un largo y frío pasillo, pero no puedes ver a dónde te llevará...necesitas un poco de luz. Cuando la consigues ves que tienes dos salidas, una Azul y otra Blanca, cuál decides coger?";
rooms [0][2]= "Ves una especie de biblioteca, y en uno de los sillones parece que haya alguien, es un hombre muy mayor, quieres hablar con él? Al dirigirte a él, se pone a gritar y a tocar una campanlla, oyes pasos tras una de las puertas...es un guardia!! Rápido, por qué puerta escapas?También ves dos salidas, prefieres tomar una de ellas? Cuál, Azul o Blanca?";
rooms [1][2]= "Un despacho! Hay un ordenador!!!Quizá tenga algo que necesite? Algún plano para saber cómo salir de aquí? Decides usar el ordenador, pero no tiene conexión a internet! Ahora que lo has conseguido, te das cuenta de que hay un documento que parece interesante, C@d3s, lo abres y puedes ver varias claves que parecen de cerraduras electrónicas o sistemas de seguridad, los quieres coger? Ahora te das cuenta de que tienes dos salidas, Azul o Blanca?";
rooms [2][2]= "Fíjate! Un almacén, quizá puedas encontrar algo que te sea útil..mira, tienen, pilas, cables, tijeras, alicates, mechero...pero sólo puedes coger uno de ellos, cual quieres? Continuas ahora tu camino, hacia qué puerta te diriges, Azul o Blanca?";
rooms [3][2]= "La cocina, sí! Te mueres de sed! Quieres usar el agua? Ahora que te sientes mejor, hacia dónde quieres ir, Azul o Blanco?";
rooms [0][3]= "Es una estancia enorme, mira qué pinta tienen esos sofás! Lo que darías por echarte una cabezadita! Pero no te distraigas, que es la principal? Qué haces, intentas abrirla o te vas por la puerta de servicio Blanca?";
rooms [3][3]= "Aire puro!! Mira qué cielo tan estrellado, y qué frío!! Pero qué gusto salir de esas paredes! Mira, un coche!!! Cómo puedes arrancarlo?";
console.log(rooms);