import { PokedexService } from "./Pokedex.service"

export default {
    name: 'Pokedex',

    data: () => ({
        query: '',
        pokemon: {},
        imgSource: '',
        pokemonPicture: {}
    }),

    created() {
        // setear pokedex en ningun pokemon
    },
    mounted() {
        this.pokemonPicture = document.querySelector('[imgSource]')
        this.imgSource = "https://www.kindpng.com/picc/b/363-3639827_pokemon-characters-png.png"
        this.pokemonPicture.setAttribute('src', this.imgSource)
    },
    
    methods: {
        submit (event) {
            event.preventDefault()
            PokedexService.get(this.query.toLowerCase())
            .then(response => {
                this.setPokemon(response.data)
                console.log(this.pokemon)
            })
            .catch(error => {
                console.log(error)
                this.setNotFoundPokemon()
            })
        },
        setPokemon (pokemon) {
            this.pokemon = pokemon
            this.imgSource = pokemon.sprites.other.dream_world.front_default
            this.pokemonPicture.setAttribute('src', this.imgSource)
        },
        setNotFoundPokemon () {
            this.imgSource = "https://www.kindpng.com/picc/b/363-3639827_pokemon-characters-png.png"
            this.pokemonPicture.setAttribute('src', this.imgSource)
            this.pokemon = {
                name: 'Pokemon not found',
            }
        }


    }
}