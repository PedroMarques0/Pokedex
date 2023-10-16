function PokemonCard() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  const pokemon = pokemonList[0];
  console.log(pokemon.name);

  return (
    <figure>
      <img src={pokemon.imgSrc} alt="" />
      <figcaption>
        <p>{pokemon.name}</p>
      </figcaption>
    </figure>
  );
}

export default PokemonCard;
