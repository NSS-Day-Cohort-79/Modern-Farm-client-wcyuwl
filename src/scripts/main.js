//import { createPlan } from ./main.js
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant, usePlants } from "./field.js"

//invoke createPlan & pass return value to addPlant

console.log("Welcome to the main module")

const asparagusSeed = createAsparagus()
addPlant(asparagusSeed)

const cornSeed = createCorn()
addPlant(cornSeed)

const potatoSeed = createPotato()
addPlant(potatoSeed)

const soybeanSeed = createSoybean()
addPlant(soybeanSeed)

const sunflowerSeed = createSunflower()
addPlant(sunflowerSeed)

const wheatSeed = createWheat()
addPlant(wheatSeed)

// invoke usePlants and log usedPlants
const usedPlants = usePlants();
console.log(usedPlants)
