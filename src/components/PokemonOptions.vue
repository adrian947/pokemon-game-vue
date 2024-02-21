<template>
  <div class="options-container">
    <ul>
      <li
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        @click="$emit('selectionPokemon', pokemon.id)"
      >
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
li {
  font-size: 16px;
  padding: 10px 20px;
  background-color: #f44336; /* Color de fondo rojo */
  color: #fff; /* Color del texto blanco */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: background-color 0.3s ease;
}

li:hover {
  background-color: #ff5f52;
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>
