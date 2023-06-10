<template>
  <div v-if="pokemon">
    <h1>Quien es este pokemon?</h1>
    <PokemonImage :pokemonId="pokemon?.id" :showPokemon="showPokemon" />
    <PokemonOptions
      :pokemons="pokemonArr"
      @selectionPokemon="selectionPokemon"
    />
    <div v-show="showAnswer">
      <h2>{{ message }}</h2>
      <button @click="newGame">New Game</button>
    </div>
  </div>
</template>

<script>
import PokemonImage from "../components/PokemonImage.vue";
import PokemonOptions from "../components/PokemonOptions.vue";
import getPokemonsOptions from "@/helpers/getPokemonOptions";

export default {
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
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
        return (this.message = "YOU WIN");
      }

      return (this.message = `YOU LOSE, IS ${this.pokemon.name.toUpperCase()}`);
    },
    newGame() {
      (this.pokemonArr = []),
        (this.pokemon = null),
        (this.showPokemon = false),
        (this.showAnswer = false),
        (this.message = "");
      this.getPokemonsForOptions();
    },
  },
  mounted() {
    this.getPokemonsForOptions();
  },
};
</script>

<style scoped>
button {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-left: 40px;
  width: 250px;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
