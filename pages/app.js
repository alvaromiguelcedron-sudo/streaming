function sugerirPelicula() {
    const peliculas = ["Interstellar", "The Batman", "Stranger Things", "Joker", "Avengers", "Harry Potter"];
    const random = Math.floor(Math.random() * peliculas.length);
    const seleccionada = peliculas[random];

    // 1. Metemos el nombre de la peli en el modal
    document.getElementById("peliculaSeleccionada").innerText = seleccionada;

    // 2. Llamamos al modal de Bootstrap para que se muestre
    const miModal = new bootstrap.Modal(document.getElementById('modalPelicula'));
    miModal.show();
}
function mostrarInfo(titulo) {
    // 1. Base de datos de información
    const informacion = {
        "Stranger Things": "Stranger Things es una serie de televisión estadounidense de drama, suspenso, ciencia ficción y terror, coproducida y distribuida por Netflix. Creada por los hermanos Matt y Ross Duffer, y producida ejecutivamente por Shawn Levy. Ambientada durante la década de 1980, la historia se sitúa en el pequeño pueblo ficticio de Hawkins, Indiana, Estados Unidos, donde sus residentes comienzan a lidiar con una dimensión alternativa hostil conocida como Upside Down, después de que una instalación de experimentación humana cercana abre una puerta entre ella y el mundo normal.",
        "The Batman": "The Batman (Batman en Hispanoamérica) es una película estadounidense de superhéroes dirigida por Matt Reeves y basada en el personaje homónimo creado por Bob Kane y Bill Finger para DC Comics. El guion fue escrito por Reeves y Peter Craig, y narra los acontecimientos del justiciero Batman durante su segundo año luchando contra el crimen y la corrupción en Gotham City, además de enfrentarse al asesino serial Riddler. La cinta está protagonizada por Robert Pattinson como el personaje titular, acompañado de un elenco que incluye a Zoë Kravitz, Paul Dano, Jeffrey Wright, John Turturro, Peter Sarsgaard, Andy Serkis y Colin Farrell.",
        "Interstellar": "Interstellar (conocida como Interestelar en Hispanoamérica) es una película épica de drama y ciencia ficción, de coproducción británico-estadounidense-canadiense, de 2014, dirigida por Christopher Nolan y protagonizada por Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine y Matt Damon. Ambientada en un futuro distópico donde la humanidad está luchando por sobrevivir, ya que la Tierra se está volviendo inhabitable por el cambio climático que arrasa con todo. La película cuenta la historia de un grupo de astronautas que viajan a través de un agujero de gusano cerca de Saturno en busca de un nuevo hogar para la humanidad."
    
    };

    // 2. Cargamos los datos en el modal
    document.getElementById("infoTitulo").innerText = titulo;
    document.getElementById("infoTexto").innerText = informacion[titulo] || "Información no disponible por el momento.";

    // 3. Mostramos el modal
    const modalInfo = new bootstrap.Modal(document.getElementById('modalInfo'));
    modalInfo.show();
}