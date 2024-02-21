<template>
  <div v-if="pokemon">
    <div class="poke-container">
      <img :src="imagenPokemon" alt="image de Pokémon" />
      <PokemonImage :pokemonId="pokemon?.id" :showPokemon="showPokemon" />
      <PokemonOptions
        :pokemons="pokemonArr"
        @selectionPokemon="selectionPokemon"
      />
    </div>
    <div v-show="showAnswer">
      <h2>{{ message }}</h2>
      <button @click="newGame">New Game</button>
    </div>
  </div>
</template>

<script>
import PokemonImage from '../components/PokemonImage.vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import getPokemonsOptions from '@/helpers/getPokemonOptions';

export default {
  data() {
    return {
      imagenPokemon: './img/pokemon.png',
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: '',
    };
  },

  components: {
    PokemonImage,
    PokemonOptions,
  },
  methods: {
    async getPokemonsForOptions() {
      const resp = await getPokemonsOptions();
      this.pokemonArr = resp;

      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    selectionPokemon(pokemonID) {
      this.showPokemon = true;
      this.showAnswer = true;

      if (pokemonID === this.pokemon.id) {
        return (this.message = 'YOU WIN');
      }

      return (this.message = `YOU LOSE, IS ${this.pokemon.name.toUpperCase()}`);
    },
    newGame() {
      (this.pokemonArr = []),
        (this.pokemon = null),
        (this.showPokemon = false),
        (this.showAnswer = false),
        (this.message = '');
      this.getPokemonsForOptions();
    },
  },
  mounted() {
    this.getPokemonsForOptions();
  },
};
</script>

<style scoped>

.poke-container{
	transform: translateX(-1rem);
}
button {
  font-size: 16px;
  padding: 10px 20px;
  background-color: #f44336; /* Color de fondo rojo */
  color: #fff; /* Color del texto blanco */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ff5f52;
}

img {
  width: 20%;
}
</style>
