<template>
    <div class="main-container"> 
        <div class="form-container">
            <form>
                <input class="input-container" type="text" v-model="query" placeholder="Search Pokemon" autocomplete="off">
                <button class="btn-container" v-on:click="submit">Search</button>
            </form>
        </div>
        <div class="card-container">
            <div class="nameid-container">
                <div class="name-container">
                    <div> {{ pokemon.name }} </div>
                </div>
                <div class="id-container">
                    <div v-if="pokemon.id">Nº {{ pokemon.id }} </div>
                </div>
            </div>
            <div class="img-container">
                <img imgSource class="picture" src="">
            </div>
            <div class="type-container">
                <div v-for="type in pokemon.types" :key="type.slot">
                    <div class="type1-container">
                        <div>{{ type.type.name }}</div>
                    </div>   
                </div>
            </div>
            <div class="base-exp-container">
                <div v-if="pokemon.base_experience">Base experience</div>
                <div v-if="pokemon.base_experience"> {{ pokemon.base_experience }} </div>
            </div>
            <div class="height-weight-container">
                <div class="height-container">
                    <div v-if="pokemon.height">Height: {{ pokemon.height }}"</div>
                </div>
                <div class="weight-container">
                    <div v-if="pokemon.weight">Weight: {{ pokemon.weight }} lbs</div>
                </div>
            </div>
            <div class="abilites-container">
                <div v-if="pokemon.abilities">Abilities</div>
                <div v-for="ability in pokemon.abilities" :key="ability.slot">    
                    <div class="ability1-container">
                        <div> {{ ability.ability.name }} </div>   
                    </div>
                </div>    
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "./Pokedex.scss";
</style>

<script src="./Pokedex.js"/>