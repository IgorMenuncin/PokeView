const barra__busca = document.querySelector('.barra__busca');
const botaoBusca = document.querySelector('.botao__busca');
const divPrincipal = document.querySelector('.principal');

async function buscarPokemon(pokemonPesquisado){
    try{
        let consultarPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonPesquisado}`);
        let pokemonConvertido = await consultarPokemon.json();
        if(pokemonConvertido.erro){
            throw Error('Pokemon não encontrado');
        }
        const pokemon = {
            nome: pokemonConvertido.name,
            imagem: pokemonConvertido.sprites.front_default
        }
        
        const elementoPokemon = document.createElement("div")
        elementoPokemon.classList.add("resultado");
        elementoPokemon.innerHTML += 
        `   <p class='pokeName'>${pokemon.nome}</p>
            <img class='pokeImagem' src='${pokemon.imagem}' alt='imagem do pokemon ${pokemon.nome}'>
        `
        divPrincipal.appendChild(elementoPokemon)

        barra__busca.value = "";
    }
    catch (erro){
        console.log(erro);
        alert('Pokemon não encontrado');
    }

}



botaoBusca.addEventListener('click',(event) => {
    console.log(barra__busca.value);
    buscarPokemon(barra__busca.value);
})


