import { faker } from "@faker-js/faker/locale/en";

//create random fake songs and movies


const createRandomMovies=()=>{
    return `${faker.word.adjective()} ${faker.word.noun()}`;
}

const createRandomSongs=()=>{
    return `${faker.music.songName()}`
}

const createRandomProduct=()=>{
    return `${faker.commerce.product()} - ${faker.commerce.productDescription()}`
}

export {createRandomMovies,createRandomProduct,createRandomSongs}