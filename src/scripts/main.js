//import { createPlan } from ./main.js
import { Catalog } from "./catalog.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { plantSeeds } from "./tractor.js"
import { createPlan } from "./plan.js"


//Invoke function that plants seeds
const yearlyPlan = createPlan();
plantSeeds(yearlyPlan);
console.log(usePlants())

// invoke usePlants and log usedPlants
const usedPlants = usePlants();
console.log(usedPlants)

//invoke harvestPlants 
const harvestedPlants = harvestPlants(usedPlants)
console.log(harvestedPlants)

Catalog(harvestedPlants)
//console.log(catalogHTML)
//document.querySelector(".container").innerHTML = catalogHTML