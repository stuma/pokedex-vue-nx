import axios from 'axios';

export const PokedexService = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
})