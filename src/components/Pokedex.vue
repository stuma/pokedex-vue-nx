<template>
    <div class="main-container"> 
        <div class="form-container">
            <form>
                <input type="text" v-model="query" placeholder="Search Pokemon" autocomplete="off">
                <button v-on:click="submit">Search</button>
            </form>
        </div>
        <div class="card-container">
            <div class="nameid-container">
                <div class="name-container">
                    <h1> {{ pokemon.name }} </h1>
                </div>
                <div class="id-container">
                    <h1>{{ pokemon.id }} </h1>
                </div>
            </div>
            <div class="img-container">
                <img imgSource class="picture" src="">
            </div>
            <div class="type-container" v-for="type in pokemon.types" :key="type.slot">
                <div class="type1-container">
                    <h1>{{ type.type.name }}</h1>
                </div>   
            </div>
            <div class="base-exp-container">
                <h1> {{ pokemon.base_experience }} </h1>
            </div>
            <div class="height-weight-container">
                <div class="height-container">
                    <h1> {{ pokemon.height }} </h1>
                </div>
                <div class="weight-container">
                    <h1> {{ pokemon.weight }} </h1>
                </div>
            </div>
            <div class="abilites-container" v-for="ability in pokemon.abilities" :key="ability.slot">    
                <div class="ability1-container">
                    <h1> {{ ability.ability.name }} </h1>   
                </div>    
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "./Pokedex.scss";
</style>

<script src="./Pokedex.js"/>