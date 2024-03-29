import pokemonApi from "@/api/pokemonApi";

function gePokemons() {
  const pokemonsArr = Array.from(Array(650));

  return pokemonsArr.map((_, index) => index + 1);
}

async function getPokemonsOptions() {
  const mixedPokemons = gePokemons().sort(() => Math.random() - 0.5);

  const pokemonsNames = await getPokemonsNames(mixedPokemons.splice(0, 4));

  return pokemonsNames;
}

async function getPokemonsNames([a, b, c, d]) {
  const promiseArr = [
    pokemonApi.get(`${a}`),
    pokemonApi.get(`${b}`),
    pokemonApi.get(`${c}`),
    pokemonApi.get(`${d}`),
  ];

  const [p1, p2, p3, p4] = await Promise.all(promiseArr);

  return [
    {
      name: p1.data.name,
      id: p1.data.id,
    },
    {
      name: p2.data.name,
      id: p2.data.id,
    },
    {
      name: p3.data.name,
      id: p3.data.id,
    },
    {
      name: p4.data.name,
      id: p4.data.id,
    },
  ];
}

export default getPokemonsOptions;
