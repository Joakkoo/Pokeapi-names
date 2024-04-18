async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/ruleta');
        const data = await response.json();

        const nombrePokemon = data.nombreSeleccionado; 
        const responsePokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
        const pokemonData = await responsePokemon.json();

        document.getElementById("pokedex").innerHTML = `
            <h2>${pokemonData.name.toUpperCase()}</h2>
            <img src="${pokemonData.sprites.front_default}">
            <p>Ataque: ${pokemonData.stats[1].base_stat}</p>
            <p>Experiencia Base: ${pokemonData.base_experience}</p>
            <p>HP: ${pokemonData.stats[0].base_stat}</p>
            <p>Defensa ${pokemonData.stats[2].base_stat}</p>

        `;
    } catch (error) {
        console.error(error);
        document.getElementById("pokedex").innerHTML = "<p>Error al cargar Pokémon</p>";
    }
}

fetchData();
